// Serveur de test simplifié SANS Supabase (pour test immédiat)
const express = require('express');
const cors = require('cors');
const path = require('path');
const { Resend } = require('resend');
const PDFDocument = require('pdfkit');
const { Buffer } = require('buffer');

// Charger les variables d'environnement
require('dotenv').config({ path: path.resolve(__dirname, '.env.local') });

console.log('🔑 Variables d\'environnement chargées:');
console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Trouvée (' + process.env.RESEND_API_KEY.substring(0, 10) + '...)' : 'Manquante');
console.log('RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL || 'Manquante');

// Initialiser Resend
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware pour capturer les erreurs
app.use((err, req, res, next) => {
  console.error('💥 Erreur non gérée:', err);
  res.status(500).json({
    error: 'Erreur interne du serveur',
    details: err.message
  });
});

// Route de santé
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Test server running (no Supabase)' });
});

// Route API pour la soumission d'évaluation (SANS Supabase)
app.post('/api/submit-assessment', async (req, res) => {
  try {
    const { email, firstName, score, riskLevel, answers, breakdown } = req.body;

    console.log('📝 Données reçues:', { email, firstName, score, riskLevel });

    // Validation
    if (!email || !firstName || score === undefined || !answers || !breakdown) {
      return res.status(400).json({ error: 'Données manquantes' });
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    console.log('📧 Génération du PDF...');
    
    // 1. Générer le PDF (sans sauvegarder en base)
    const pdfBuffer = await generateReportPDF({ firstName, score, answers, breakdown });

    // 2. Envoyer l'email avec Resend
    console.log('📧 Envoi de l\'email...');
    const htmlContent = generateEmailHTML({ firstName, score, breakdown });

    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'SkillShield <onboarding@resend.dev>',
      to: email,
      subject: `🛡️ ${firstName}, votre avenir professionnel mérite mieux - Rapport SkillShield`,
      html: htmlContent,
      attachments: [
        {
          filename: `SkillShield_Rapport_${firstName.replace(/\s+/g, '_')}_${score}pct.pdf`,
          content: pdfBuffer,
        },
      ],
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
        'X-Mailer': 'SkillShield',
        'List-Unsubscribe': '<mailto:unsubscribe@skillshield.app>',
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
      },
      tags: [
        { name: 'category', value: 'risk-report' },
        { name: 'user-type', value: 'calculator-user' }
      ]
    });

    console.log('✅ Email envoyé:', emailResult.id);

    // 3. Retourner la réponse (avec un ID fictif)
    return res.status(200).json({
      success: true,
      assessmentId: `temp_${Date.now()}`, // ID temporaire
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

app.listen(PORT, () => {
  console.log(`🧪 Serveur de test démarré sur http://localhost:${PORT} (SANS Supabase)`);
  console.log(`📊 API assessment: http://localhost:${PORT}/api/submit-assessment`);
});

// === GÉNÉRATION DU PDF PROFESSIONNEL ===
async function generateReportPDF({ firstName, score, answers, breakdown }) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50, bufferPages: true });
    const chunks = [];

    doc.on('data', chunk => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    // Couleurs SkillShield
    const primaryBlue = '#0EA5E9';
    const secondaryCyan = '#06B6D4';
    const accentGreen = '#10B981';

    // Page 1: Couverture
    doc.fillColor(primaryBlue)
       .fontSize(32)
       .text('SkillShield', 50, 100, { align: 'center' });
    
    doc.fillColor('#333')
       .fontSize(18)
       .text('Rapport d\'Évaluation du Risque IA', 50, 150, { align: 'center' });
    
    doc.fillColor(secondaryCyan)
       .fontSize(24)
       .text(`${firstName}`, 50, 200, { align: 'center' });
    
    doc.fillColor('#666')
       .fontSize(16)
       .text(`Score de Risque: ${score}%`, 50, 250, { align: 'center' });
    
    doc.fillColor(accentGreen)
       .fontSize(14)
       .text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, 50, 300, { align: 'center' });

    // Page 2: Résumé exécutif
    doc.addPage();
    doc.fillColor(primaryBlue)
       .fontSize(20)
       .text('Résumé Exécutif', 50, 50);
    
    doc.fillColor('#333')
       .fontSize(12)
       .text(`Bonjour ${firstName},`, 50, 100)
       .text(`Votre score de risque IA est de ${score}%, ce qui indique un niveau ${getRiskLevel(score)}.`, 50, 120)
       .text('Ce rapport vous fournit une analyse détaillée et des recommandations personnalisées.', 50, 140);

    // Page 3: Décomposition du score
    doc.addPage();
    doc.fillColor(primaryBlue)
       .fontSize(20)
       .text('Décomposition du Score', 50, 50);
    
    let y = 100;
    Object.entries(breakdown).forEach(([key, value]) => {
      doc.fillColor('#333')
         .fontSize(12)
         .text(`${key}: ${value}`, 50, y);
      y += 20;
    });

    // Page 4: Recommandations
    doc.addPage();
    doc.fillColor(primaryBlue)
       .fontSize(20)
       .text('Recommandations', 50, 50);
    
    doc.fillColor('#333')
       .fontSize(12)
       .text('• Développez vos compétences numériques', 50, 100)
       .text('• Formez-vous aux outils IA', 50, 120)
       .text('• Anticipez les changements sectoriels', 50, 140)
       .text('• Diversifiez vos compétences', 50, 160);

    // Page 5: Timeline
    doc.addPage();
    doc.fillColor(primaryBlue)
       .fontSize(20)
       .text('Timeline d\'Impact', 50, 50);
    
    doc.fillColor('#333')
       .fontSize(12)
       .text('Maintenant: Situation actuelle', 50, 100)
       .text('Dans 1 an: Évolution probable', 50, 120)
       .text('Dans 3 ans: Transformation anticipée', 50, 140);

    // Page 6: CTA
    doc.addPage();
    doc.fillColor(primaryBlue)
       .fontSize(20)
       .text('Prochaines Étapes', 50, 50);
    
    doc.fillColor('#333')
       .fontSize(12)
       .text('Rejoignez SkillShield pour:', 50, 100)
       .text('• Alertes mensuelles personnalisées', 50, 120)
       .text('• Plan de reconversion adapté', 50, 140)
       .text('• Coaching professionnel', 50, 160)
       .text('• Formation continue', 50, 180);

    doc.end();
  });
}

// === EMAIL HTML ÉMOTIONNEL ===
function generateEmailHTML({ firstName, score, breakdown }) {
  const riskColor = getScoreColor(score);
  const riskLabel = getRiskLabel(score);

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Votre Rapport SkillShield</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%); padding: 40px 20px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">🛡️ SkillShield</h1>
      <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Votre rapport d'évaluation du risque IA</p>
    </div>

    <!-- Contenu principal -->
    <div style="padding: 40px 20px;">
      
      <!-- Message personnalisé -->
      <div style="text-align: center; margin-bottom: 30px;">
        <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 24px;">Bonjour ${firstName} 👋</h2>
        <p style="color: #64748b; font-size: 16px; line-height: 1.6; margin: 0;">
          Votre analyse personnalisée du risque IA est prête ! 
          <br>Voici ce que révèle votre profil professionnel.
        </p>
      </div>

      <!-- Score principal -->
      <div style="background: linear-gradient(135deg, ${riskColor}15 0%, ${riskColor}25 100%); border: 2px solid ${riskColor}40; border-radius: 16px; padding: 30px; text-align: center; margin-bottom: 30px;">
        <div style="font-size: 48px; font-weight: bold; color: ${riskColor}; margin-bottom: 10px;">
          ${score}%
        </div>
        <div style="font-size: 20px; font-weight: 600; color: #1e293b; margin-bottom: 8px;">
          ${riskLabel}
        </div>
        <div style="font-size: 14px; color: #64748b;">
          Niveau de risque face à l'Intelligence Artificielle
        </div>
      </div>

      <!-- Message émotionnel -->
      <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #10B981;">
        <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px;">💡 Ce que cela signifie</h3>
        <p style="color: #64748b; font-size: 14px; line-height: 1.6; margin: 0;">
          ${getRiskMessage(score)}
        </p>
      </div>

      <!-- CTA principal -->
      <div style="text-align: center; margin: 40px 0;">
        <a href="http://localhost:5173/waitinglist" 
           style="display: inline-block; background: linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%); color: white; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);">
          🚀 Rejoindre la Liste d'attente
        </a>
        <p style="color: #64748b; font-size: 12px; margin: 15px 0 0 0;">
          Les 20 premiers : -50% à vie
        </p>
      </div>

      <!-- Avantages -->
      <div style="background-color: #f1f5f9; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px; text-align: center;">✨ Avec SkillShield, vous bénéficiez de :</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">🔔</span>
            <span style="color: #64748b; font-size: 14px;">Alertes mensuelles</span>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">🗺️</span>
            <span style="color: #64748b; font-size: 14px;">Plan de reconversion</span>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">📊</span>
            <span style="color: #64748b; font-size: 14px;">Analyses sectorielles</span>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">🤖</span>
            <span style="color: #64748b; font-size: 14px;">Chatbot IA 24/7</span>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">👨‍🏫</span>
            <span style="color: #64748b; font-size: 14px;">Coaching mensuel</span>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">🎓</span>
            <span style="color: #64748b; font-size: 14px;">Formation 360°</span>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align: center; padding-top: 30px; border-top: 1px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px; margin: 0 0 10px 0;">
          Ce rapport a été généré automatiquement par SkillShield
        </p>
        <p style="color: #64748b; font-size: 12px; margin: 0;">
          <a href="http://localhost:5173" style="color: #0EA5E9; text-decoration: none;">SkillShield.app</a> | 
          <a href="mailto:support@skillshield.app" style="color: #0EA5E9; text-decoration: none;">Support</a>
        </p>
      </div>

    </div>
  </div>
</body>
</html>`;
}

// === FONCTIONS UTILITAIRES ===
function getScoreColor(score) {
  if (score < 30) return '#10B981';
  if (score < 50) return '#F59E0B';
  if (score < 70) return '#F97316';
  return '#EF4444';
}

function getRiskLabel(score) {
  if (score < 30) return 'Risque Faible';
  if (score < 50) return 'Risque Modéré';
  if (score < 70) return 'Risque Élevé';
  return 'Risque Critique';
}

function getRiskMessage(score) {
  if (score < 30) return 'Votre métier est relativement protégé, mais la veille reste importante.';
  if (score < 50) return 'Des changements sont à prévoir. Il est temps d\'anticiper.';
  if (score < 70) return 'Votre métier est fortement exposé. Agissez maintenant.';
  return 'Votre métier est en danger immédiat. Une reconversion peut être nécessaire.';
}

function getRiskLevel(score) {
  if (score < 30) return 'faible';
  if (score < 50) return 'modéré';
  if (score < 70) return 'élevé';
  return 'critique';
}

