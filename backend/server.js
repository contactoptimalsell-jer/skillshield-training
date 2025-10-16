import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import PDFDocument from 'pdfkit';
import { Buffer } from 'buffer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialiser Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Initialiser Resend
const resend = new Resend(process.env.RESEND_API_KEY);

console.log('🔑 Configuration chargée:', {
  supabaseUrl: process.env.SUPABASE_URL ? '✅' : '❌',
  supabaseKey: process.env.SUPABASE_ANON_KEY ? '✅' : '❌',
  resendKey: process.env.RESEND_API_KEY ? '✅' : '❌',
});

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend SkillShield is running',
    timestamp: new Date().toISOString()
  });
});

// Route newsletter - Ajouter après /api/health
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email, source = 'homepage' } = req.body;

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    // Vérifier doublon
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('email, subscribed')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.subscribed) {
        return res.json({ 
          success: true, 
          message: 'Vous êtes déjà inscrit !',
          alreadySubscribed: true
        });
      } else {
        // Réactiver
        await supabase
          .from('newsletter_subscribers')
          .update({ subscribed: true })
          .eq('email', email);
        
        return res.json({ 
          success: true, 
          message: 'Abonnement réactivé !',
          reactivated: true
        });
      }
    }

    // Nouvelle inscription
    const { data: subscriber, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{
        email,
        source,
        user_agent: req.headers['user-agent'],
        ip_address: req.ip,
      }])
      .select()
      .single();

    if (error) throw error;

    console.log('✅ Nouvel abonné newsletter:', email);

    return res.json({
      success: true,
      message: 'Inscription réussie ! Merci de votre confiance.',
      subscriberId: subscriber.id
    });

  } catch (error) {
    console.error('❌ Erreur newsletter:', error);
    return res.status(500).json({
      error: 'Erreur lors de l\'inscription',
      details: error.message,
    });
  }
});

// Route principale pour soumettre l'évaluation
app.post('/api/submit-assessment', async (req, res) => {
  try {
    console.log('📥 Requête reçue:', req.body);
    const { email, firstName, score, riskLevel, answers, breakdown } = req.body;

    // Validation
    if (!email || !firstName || score === undefined || !answers || !breakdown) {
      console.log('❌ Données manquantes');
      return res.status(400).json({ error: 'Données manquantes' });
    }

    console.log('✅ Données valides:', { email, firstName, score });
    console.log('📝 Insertion dans Supabase...');

    // 1. Insérer dans Supabase
    const { data: assessment, error: dbError } = await supabase
      .from('risk_assessments')
      .insert([
        {
          email,
          first_name: firstName,
          score,
          risk_level: riskLevel,
          answers,
          breakdown,
          user_agent: req.headers['user-agent'],
          ip_address: req.ip,
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('❌ Erreur Supabase:', dbError);
      return res.status(500).json({ 
        error: 'Erreur de sauvegarde', 
        details: dbError.message 
      });
    }

    console.log('✅ Sauvegardé dans Supabase:', assessment.id);

    // 2. Générer le PDF
    console.log('📄 Génération du PDF...');
    const pdfBuffer = await generateSimplePDF({ firstName, score });

    // 3. Envoyer l'email
    console.log('📧 Envoi de l\'email...');
    const htmlContent = generateEmailHTML({ firstName, score });

    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'SkillShield <onboarding@resend.dev>',
      to: email,
      subject: `🛡️ ${firstName}, votre rapport SkillShield est prêt`,
      html: htmlContent,
      attachments: [
        {
          filename: `SkillShield_Rapport_${firstName}_${score}pct.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    console.log('✅ Email envoyé:', emailResult.id);

    // 4. Mettre à jour le statut email
    await supabase
      .from('risk_assessments')
      .update({
        email_sent: true,
        email_sent_at: new Date().toISOString(),
        resend_message_id: emailResult.id,
      })
      .eq('id', assessment.id);

    console.log('✅ Statut email mis à jour');

    return res.status(200).json({
      success: true,
      assessmentId: assessment.id,
      emailSent: true,
      messageId: emailResult.id,
    });

  } catch (error) {
    console.error('❌ Erreur globale:', error);
    return res.status(500).json({
      error: 'Erreur lors du traitement',
      details: error.message,
    });
  }
});

// Fonction pour générer un PDF simple
async function generateSimplePDF({ firstName, score }) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const chunks = [];
    
    doc.on('data', chunk => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    // Page de couverture
    doc.fontSize(48).text('🛡️', { align: 'center' });
    doc.moveDown();
    doc.fontSize(32).text('SkillShield', { align: 'center' });
    doc.moveDown();
    doc.fontSize(20).text(`Rapport pour ${firstName}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(60).text(`${score}%`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text('Score de Risque IA', { align: 'center' });

    doc.end();
  });
}

// HTML de l'email
function generateEmailHTML({ firstName, score }) {
  const getColor = (score) => {
    if (score < 30) return '#10B981';
    if (score < 50) return '#F59E0B';
    if (score < 70) return '#F97316';
    return '#EF4444';
  };

  const color = getColor(score);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; background: #0F172A; color: white; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #1E293B; border-radius: 16px; padding: 40px; }
    h1 { color: #06B6D4; text-align: center; }
    .score { font-size: 48px; font-weight: bold; text-align: center; color: ${color}; margin: 20px 0; }
    .cta { background: linear-gradient(135deg, #06B6D4, #3B82F6); padding: 16px 32px; color: white; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🛡️ SkillShield</h1>
    <h2>Bonjour ${firstName},</h2>
    <p>Votre rapport de risque IA est prêt !</p>
    <div class="score">${score}%</div>
    <p>Retrouvez votre analyse complète en pièce jointe.</p>
    <center>
      <a href="https://skillshield.app/waitlist" class="cta">Rejoindre SkillShield</a>
    </center>
  </div>
</body>
</html>
  `;
}

const PORT = process.env.PORT || 3001;

// Démarrer le serveur et le garder actif
app.listen(PORT, () => {
  console.log(`\n✅ Backend SkillShield démarré !`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`📡 Test: http://localhost:${PORT}/api/health\n`);
});

// Empêcher le serveur de se fermer
process.on('SIGINT', () => {
  console.log('\n👋 Arrêt du serveur...');
  process.exit(0);
});