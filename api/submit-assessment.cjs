// API Route pour soumettre une évaluation de risque IA
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const PDFDocument = require('pdfkit');
const { Buffer } = require('buffer');
const path = require('path');

// Charger les variables d'environnement
require('dotenv').config({ path: path.resolve(__dirname, '.env.local') });

// Initialiser Supabase
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || 'https://jkdsepbnigcztrfcwkpj.supabase.co',
  process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZHNlcGJuaWdjenRyZmN3a3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMTMxNDIsImV4cCI6MjA3NTc4OTE0Mn0.BNJgx8nRWnYo8XxGV0pMYbm3bo7MK1AQEDlqC6RxnF0'
);

// Initialiser Resend
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    // Rate limiting simple (max 3 soumissions par heure par IP)
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    
    const { count } = await supabase
      .from('risk_assessments')
      .select('*', { count: 'exact', head: true })
      .eq('ip_address', ipAddress)
      .gte('created_at', oneHourAgo);

    if (count >= 3) {
      return res.status(429).json({ error: 'Trop de tentatives. Réessayez dans 1h.' });
    }

    console.log('📝 Sauvegarde dans Supabase...');

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
          ip_address: ipAddress,
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('❌ Erreur Supabase:', dbError);
      return res.status(500).json({ error: 'Erreur de sauvegarde', details: dbError.message });
    }

    console.log('✅ Sauvegardé dans Supabase:', assessment.id);

    // 2. Générer le PDF
    console.log('📄 Génération du PDF...');
    const pdfBuffer = await generateReportPDF({ firstName, score, answers, breakdown });

    // 3. Envoyer l'email avec Resend
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

    // 4. Mettre à jour le statut email dans Supabase
    await supabase
      .from('risk_assessments')
      .update({
        email_sent: true,
        email_sent_at: new Date().toISOString(),
        resend_message_id: emailResult.id,
      })
      .eq('id', assessment.id);

    console.log('✅ Statut email mis à jour');

    // 5. Retourner la réponse
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
};

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
    const accentCyan = '#06B6D4';
    const emeraldGreen = '#10B981';
    const slateGray = '#475569';

    // Page 1: Couverture
    doc.fillColor(primaryBlue)
       .fontSize(36)
       .text('SkillShield', 50, 100)
       .fillColor(slateGray)
       .fontSize(18)
       .text('Analyse de Risque IA Professionnel', 50, 150);

    doc.fillColor(accentCyan)
       .fontSize(28)
       .text(`Rapport pour ${firstName}`, 50, 220);

    doc.fillColor(slateGray)
       .fontSize(16)
       .text(`Score de Risque IA: ${score}%`, 50, 280);

    const riskColor = getScoreColor(score);
    const riskLabel = getRiskLabel(score);
    
    doc.fillColor(riskColor)
       .fontSize(20)
       .text(riskLabel, 50, 320);

    doc.fillColor(slateGray)
       .fontSize(12)
       .text(`Généré le ${new Date().toLocaleDateString('fr-FR')}`, 50, 400);

    doc.addPage();

    // Page 2: Résumé exécutif
    doc.fillColor(primaryBlue)
       .fontSize(24)
       .text('Résumé Exécutif', 50, 50);

    doc.fillColor(slateGray)
       .fontSize(12)
       .text(getRiskMessage(score), 50, 100, { width: 500 });

    // Détail du score
    doc.fillColor(accentCyan)
       .fontSize(16)
       .text('Décomposition du Score', 50, 180);

    const breakdownItems = [
      { label: 'Risque de base métier', value: breakdown.baseJob || 0 },
      { label: 'Ajustement tâches', value: breakdown.taskAdjustment || 0 },
      { label: 'Compétences digitales', value: breakdown.digitalSkills || 0 },
      { label: 'Usage IA', value: breakdown.aiUsage || 0 },
      { label: 'Secteur d\'activité', value: breakdown.sector || 0 },
      { label: 'Marché du travail', value: breakdown.market || 0 },
      { label: 'Environnement', value: breakdown.environment || 0 },
      { label: 'Adaptabilité', value: breakdown.adaptability || 0 },
      { label: 'Démographie', value: breakdown.demographics || 0 },
      { label: 'Régulation', value: breakdown.regulation || 0 }
    ];

    let yPos = 220;
    breakdownItems.forEach(item => {
      doc.fillColor(slateGray)
         .fontSize(10)
         .text(`${item.label}: ${item.value > 0 ? '+' : ''}${item.value}%`, 70, yPos);
      yPos += 20;
    });

    doc.addPage();

    // Page 3: Recommandations personnalisées
    doc.fillColor(primaryBlue)
       .fontSize(24)
       .text('Recommandations Personnalisées', 50, 50);

    const recommendations = getRecommendations(score, answers);
    let recY = 100;
    recommendations.forEach((rec, index) => {
      doc.fillColor(emeraldGreen)
         .fontSize(14)
         .text(`${index + 1}. ${rec.title}`, 50, recY);
      doc.fillColor(slateGray)
         .fontSize(11)
         .text(rec.description, 70, recY + 20, { width: 450 });
      recY += 60;
    });

    doc.addPage();

    // Page 4: Timeline d'impact
    doc.fillColor(primaryBlue)
       .fontSize(24)
       .text('Timeline d\'Impact Prévisionnelle', 50, 50);

    const timeline = getTimeline(score);
    doc.fillColor(accentCyan)
       .fontSize(16)
       .text('Maintenant', 50, 120);
    doc.fillColor(slateGray)
       .fontSize(12)
       .text(timeline.immediate, 70, 150, { width: 450 });

    doc.fillColor(accentCyan)
       .fontSize(16)
       .text('Dans 1 an', 50, 220);
    doc.fillColor(slateGray)
       .fontSize(12)
       .text(timeline.oneYear, 70, 250, { width: 450 });

    doc.fillColor(accentCyan)
       .fontSize(16)
       .text('Dans 3 ans', 50, 320);
    doc.fillColor(slateGray)
       .fontSize(12)
       .text(timeline.threeYears, 70, 350, { width: 450 });

    doc.addPage();

    // Page 5: Actions concrètes
    doc.fillColor(primaryBlue)
       .fontSize(24)
       .text('Plan d\'Action Immédiat', 50, 50);

    const actions = getActionPlan(score);
    let actionY = 100;
    actions.forEach((action, index) => {
      doc.fillColor(emeraldGreen)
         .fontSize(14)
         .text(`${index + 1}. ${action.title}`, 50, actionY);
      doc.fillColor(slateGray)
         .fontSize(11)
         .text(action.description, 70, actionY + 20, { width: 450 });
      doc.fillColor(accentCyan)
         .fontSize(10)
         .text(`Priorité: ${action.priority}`, 70, actionY + 40);
      actionY += 80;
    });

    doc.addPage();

    // Page 6: Call-to-action émotionnel
    doc.fillColor(primaryBlue)
       .fontSize(28)
       .text('Votre Avenir Vous Appartient', 50, 100);

    doc.fillColor(slateGray)
       .fontSize(16)
       .text('Ne laissez pas l\'IA décider de votre destin professionnel.', 50, 160);

    doc.fillColor(emeraldGreen)
       .fontSize(18)
       .text('Rejoignez SkillShield dès aujourd\'hui', 50, 220);

    doc.fillColor(slateGray)
       .fontSize(12)
       .text('• Alertes mensuelles sur votre secteur', 70, 280)
       .text('• Plan de reconversion personnalisé', 70, 300)
       .text('• Analyses sectorielles avancées', 70, 320)
       .text('• Chatbot IA 24/7 questions carrière', 70, 340)
       .text('• Coaching mensuel avec professionnels', 70, 360)
       .text('• Formation 360° 20+ au lancement', 70, 380);

    doc.fillColor(accentCyan)
       .fontSize(14)
       .text('Les 20 premiers : -50% à vie', 50, 450);

    doc.end();
  });
}

// === EMAIL HTML ÉMOTIONNEL ===
function generateEmailHTML({ firstName, score, breakdown }) {
  const riskColor = getScoreColor(score);
  const riskLabel = getRiskLabel(score);
  const riskMessage = getRiskMessage(score);

  return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Votre Rapport SkillShield</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%); color: #ffffff;">
    
    <!-- Header avec logo -->
    <div style="background: rgba(6, 182, 212, 0.1); border-bottom: 2px solid rgba(6, 182, 212, 0.3); padding: 30px 20px; text-align: center;">
        <h1 style="color: #06B6D4; margin: 0; font-size: 32px; font-weight: bold;">🛡️ SkillShield</h1>
        <p style="color: #94a3b8; margin: 10px 0 0 0; font-size: 16px;">Votre bouclier contre l'impact de l'IA</p>
    </div>

    <!-- Contenu principal -->
    <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        
        <!-- Message personnel -->
        <div style="text-align: center; margin-bottom: 40px;">
            <h2 style="color: #ffffff; font-size: 28px; margin: 0 0 20px 0; line-height: 1.3;">
                ${firstName}, votre avenir professionnel mérite mieux
            </h2>
            <p style="color: #94a3b8; font-size: 18px; margin: 0; line-height: 1.5;">
                ${riskMessage}
            </p>
        </div>

        <!-- Score principal -->
        <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%); border: 2px solid ${riskColor}; border-radius: 20px; padding: 30px; text-align: center; margin-bottom: 40px;">
            <div style="font-size: 48px; font-weight: bold; color: ${riskColor}; margin-bottom: 10px;">
                ${score}%
            </div>
            <div style="font-size: 20px; font-weight: 600; color: #ffffff; margin-bottom: 10px;">
                ${riskLabel}
            </div>
            <div style="font-size: 14px; color: #94a3b8;">
                Score de risque IA calculé pour votre profil
            </div>
        </div>

        <!-- Décomposition du score -->
        <div style="background: rgba(30, 41, 59, 0.5); border-radius: 15px; padding: 25px; margin-bottom: 40px;">
            <h3 style="color: #06B6D4; font-size: 20px; margin: 0 0 20px 0;">📊 Décomposition de votre score</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 12px;">
                <div style="color: #94a3b8;">Risque métier: <span style="color: #ffffff; font-weight: 600;">${breakdown.baseJob || 0}%</span></div>
                <div style="color: #94a3b8;">Compétences digitales: <span style="color: #ffffff; font-weight: 600;">${breakdown.digitalSkills || 0}%</span></div>
                <div style="color: #94a3b8;">Usage IA: <span style="color: #ffffff; font-weight: 600;">${breakdown.aiUsage || 0}%</span></div>
                <div style="color: #94a3b8;">Secteur: <span style="color: #ffffff; font-weight: 600;">${breakdown.sector || 0}%</span></div>
                <div style="color: #94a3b8;">Adaptabilité: <span style="color: #ffffff; font-weight: 600;">${breakdown.adaptability || 0}%</span></div>
                <div style="color: #94a3b8;">Marché: <span style="color: #ffffff; font-weight: 600;">${breakdown.market || 0}%</span></div>
            </div>
        </div>

        <!-- CTA émotionnel -->
        <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(14, 165, 233, 0.2) 100%); border: 2px solid rgba(6, 182, 212, 0.4); border-radius: 20px; padding: 30px; text-align: center; margin-bottom: 40px;">
            <div style="font-size: 24px; margin-bottom: 20px;">🚀</div>
            <h3 style="color: #ffffff; font-size: 24px; margin: 0 0 15px 0; line-height: 1.3;">
                ${score >= 70 ? 'Transformez ce risque en opportunité' : 
                  score >= 50 ? 'Anticipez pendant qu\'il est encore temps' : 
                  'Gardez votre avance précieuse'}
            </h3>
            <p style="color: #94a3b8; font-size: 16px; margin: 0 0 25px 0; line-height: 1.5;">
                Avec SkillShield, ${score >= 70 ? 'prenez les devants et créez votre avenir professionnel' : 
                score >= 50 ? 'restez compétitif et anticipez les changements' : 
                'restez toujours un coup d\'avance dans votre domaine'}.
            </p>
            
            <!-- Bouton CTA principal -->
            <a href="http://localhost:5173/waitinglist" style="display: inline-block; background: linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%); color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 12px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3); transition: all 0.3s ease;">
                🛡️ Rejoindre SkillShield
            </a>
            
            <div style="margin-top: 15px; font-size: 12px; color: #64748b;">
                Les 20 premiers : <strong style="color: #10B981;">-50% à vie</strong> • Sans engagement
            </div>
        </div>

        <!-- Avantages -->
        <div style="margin-bottom: 40px;">
            <h3 style="color: #06B6D4; font-size: 20px; margin: 0 0 20px 0; text-align: center;">✨ Vos avantages exclusifs</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 14px;">
                <div style="color: #94a3b8;">🔔 Alertes mensuelles secteur</div>
                <div style="color: #94a3b8;">🗺️ Plan reconversion personnalisé</div>
                <div style="color: #94a3b8;">📊 Analyses sectorielles avancées</div>
                <div style="color: #94a3b8;">🤖 Chatbot IA 24/7 carrière</div>
                <div style="color: #94a3b8;">👨‍🏫 Coaching mensuel professionnel</div>
                <div style="color: #94a3b8;">🎓 Formation 360° 20+ au lancement</div>
            </div>
        </div>

        <!-- Footer -->
        <div style="border-top: 1px solid rgba(148, 163, 184, 0.2); padding-top: 30px; text-align: center;">
            <p style="color: #64748b; font-size: 12px; margin: 0 0 10px 0;">
                Cet email a été envoyé à ${firstName} suite à votre évaluation de risque IA sur SkillShield.
            </p>
            <p style="color: #64748b; font-size: 12px; margin: 0 0 20px 0;">
                Si vous ne souhaitez plus recevoir nos emails, 
                <a href="mailto:unsubscribe@skillshield.app" style="color: #06B6D4; text-decoration: none;">cliquez ici</a>.
            </p>
            <p style="color: #64748b; font-size: 12px; margin: 0;">
                © 2024 SkillShield - Protégez votre carrière de l'IA
            </p>
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

function getRecommendations(score, answers) {
  const baseRecs = [
    {
      title: 'Développer vos compétences digitales',
      description: 'Formez-vous aux outils IA et aux technologies émergentes de votre secteur.'
    },
    {
      title: 'Élargir votre réseau professionnel',
      description: 'Connectez-vous avec des professionnels de domaines complémentaires.'
    }
  ];

  if (score >= 70) {
    baseRecs.unshift({
      title: 'Envisager une reconversion rapide',
      description: 'Votre métier est très exposé. Explorez des domaines moins automatisables.'
    });
  } else if (score >= 50) {
    baseRecs.unshift({
      title: 'Anticiper les changements',
      description: 'Préparez-vous aux évolutions de votre métier dans les 2-3 prochaines années.'
    });
  }

  return baseRecs;
}

function getTimeline(score) {
  const timelines = {
    low: {
      immediate: 'Votre métier reste stable, mais surveillez les évolutions technologiques.',
      oneYear: 'Possibles améliorations de votre efficacité grâce à l\'IA.',
      threeYears: 'Votre expertise reste valorisée, continuez à vous former.'
    },
    medium: {
      immediate: 'Certaines tâches commencent à être automatisées.',
      oneYear: 'Nouveaux outils IA apparaissent dans votre secteur.',
      threeYears: 'Votre rôle évolue, l\'adaptation devient cruciale.'
    },
    high: {
      immediate: 'Automatisation visible de certaines de vos tâches.',
      oneYear: 'Transformation significative de votre métier.',
      threeYears: 'Votre profil doit évoluer pour rester compétitif.'
    },
    critical: {
      immediate: 'Automatisation rapide en cours dans votre domaine.',
      oneYear: 'Votre métier change radicalement.',
      threeYears: 'Une reconversion peut être nécessaire.'
    }
  };

  let level = 'low';
  if (score >= 70) level = 'critical';
  else if (score >= 50) level = 'high';
  else if (score >= 30) level = 'medium';

  return timelines[level];
}

function getActionPlan(score) {
  const actions = [
    {
      title: 'Formation immédiate',
      description: 'Inscrivez-vous à des formations sur l\'IA et les outils digitaux.',
      priority: 'Haute'
    },
    {
      title: 'Veille technologique',
      description: 'Suivez les évolutions de l\'IA dans votre secteur.',
      priority: 'Moyenne'
    }
  ];

  if (score >= 50) {
    actions.unshift({
      title: 'Plan de reconversion',
      description: 'Évaluez les opportunités dans des domaines moins exposés.',
      priority: 'Critique'
    });
  }

  return actions;
}

