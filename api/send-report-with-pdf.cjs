// Route API Vercel pour l'envoi d'email avec PDF
const { Resend } = require('resend');
const PDFDocument = require('pdfkit');
const { Buffer } = require('buffer');

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
    const { email, firstName, score, answers, breakdown } = req.body;

    // Validation
    if (!email || !score) {
      return res.status(400).json({ error: 'Données manquantes' });
    }

    console.log('📧 Tentative d\'envoi pour:', email);

    // Pour le moment, on simule l'envoi pour éviter les erreurs de déploiement
    // TODO: Implémenter la génération PDF complète en production
    
    // Générer le HTML de l'email (version simplifiée)
    const htmlContent = generateSimpleEmailHTML({ firstName, score });

    // Envoyer via Resend (sans PDF pour le moment)
    console.log('📧 Envoi de l\'email...');
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'SkillShield <onboarding@resend.dev>',
      to: email,
      subject: `🛡️ ${firstName}, votre rapport de risque IA est prêt - SkillShield`,
      html: htmlContent,
    });

    console.log('✅ Email envoyé avec succès:', data.id);

    return res.status(200).json({ 
      success: true, 
      messageId: data.id 
    });

  } catch (error) {
    console.error('❌ Erreur:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de l\'envoi',
      details: error.message 
    });
  }
};

// === EMAIL HTML SIMPLIFIÉ ===
function generateSimpleEmailHTML({ firstName, score }) {
  const riskColor = getScoreColor(score);
  const riskLabel = getRiskLabel(score);
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #0F172A;">
  
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0F172A;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5);">
          
          <!-- Header Hero -->
          <tr>
            <td style="padding: 60px 40px; text-align: center; background: linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%);">
              <h1 style="margin: 0 0 20px; color: white; font-size: 48px;">
                ${firstName}
              </h1>
              <p style="margin: 0; color: rgba(255,255,255,0.95); font-size: 22px; font-weight: 600; line-height: 1.4;">
                Votre rapport de risque IA est prêt !
              </p>
            </td>
          </tr>

          <!-- Message émotionnel -->
          <tr>
            <td style="padding: 50px 40px; color: white;">
              <p style="margin: 0 0 25px; font-size: 18px; line-height: 1.7; color: #E2E8F0;">
                Pendant que vos collègues <strong style="color: #F59E0B;">paniquent</strong> face à l'IA,<br/>
                vous avez fait le premier pas : <strong style="color: #10B981;">comprendre votre risque</strong>.
              </p>
              
              <p style="margin: 0 0 25px; font-size: 18px; line-height: 1.7; color: #E2E8F0;">
                Votre score de <strong style="color: ${riskColor}; font-size: 32px;">${score}%</strong> révèle votre niveau d'exposition.
              </p>

              <p style="margin: 0; font-size: 18px; line-height: 1.7; color: #E2E8F0;">
                Mais ce n'est que le <strong>début</strong>.<br/>
                <span style="color: #06B6D4; font-weight: 600;">Vous pouvez transformer ce risque en opportunité.</span>
              </p>
            </td>
          </tr>

          <!-- Score Box -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255,255,255,0.05); border: 3px solid ${riskColor}; border-radius: 16px; padding: 30px;">
                <tr>
                  <td align="center">
                    <div style="font-size: 72px; font-weight: bold; color: ${riskColor}; margin-bottom: 15px;">
                      ${score}%
                    </div>
                    <div style="font-size: 20px; color: ${riskColor}; font-weight: 600; margin-bottom: 10px;">
                      ${riskLabel}
                    </div>
                    <div style="font-size: 14px; color: #94A3B8;">
                      ${getRiskMessage(score)}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Principal -->
          <tr>
            <td style="padding: 50px 40px; text-align: center; background: linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%);">
              <h2 style="margin: 0 0 15px; color: white; font-size: 32px;">
                Prêt à reprendre le contrôle ?
              </h2>
              <p style="margin: 0 0 30px; color: rgba(255,255,255,0.95); font-size: 18px;">
                Rejoignez SkillShield et transformez votre risque en opportunité
              </p>
              <a href="https://skillshield.app/waitinglist" style="display: inline-block; padding: 20px 50px; background: white; color: #0F172A; text-decoration: none; font-weight: bold; font-size: 18px; border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
                🚀 Rejoindre la Liste d'Attente
              </a>
              <p style="margin: 25px 0 0; color: rgba(255,255,255,0.9); font-size: 15px; font-weight: 600;">
                🔥 Les 20 premiers inscrits : -50% à vie
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 40px; text-align: center; background: #0A0F1E; border-top: 1px solid rgba(6, 182, 212, 0.2);">
              <p style="margin: 0 0 15px; color: #64748B; font-size: 14px;">
                <strong style="color: #FFFFFF;">SkillShield</strong> - L'assurance-vie de votre carrière à l'ère de l'IA
              </p>
              <p style="margin: 0 0 15px; color: #475569; font-size: 13px;">
                <a href="https://skillshield.app" style="color: #06B6D4; text-decoration: none;">skillshield.app</a>
                 | 
                <a href="mailto:bonjour@skillshield.app" style="color: #06B6D4; text-decoration: none;">bonjour@skillshield.app</a>
              </p>
              <p style="margin: 0; color: #475569; font-size: 11px;">
                Vous recevez cet email car vous avez utilisé notre calculateur de risque IA gratuit.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
  `;
}

// === FONCTIONS UTILITAIRES ===

function getScoreColor(score) {
  if (score < 30) return '#10B981';
  if (score < 50) return '#3B82F6';
  if (score < 70) return '#F59E0B';
  return '#EF4444';
}

function getRiskLabel(score) {
  if (score < 30) return '🟢 Risque Faible';
  if (score < 50) return '🔵 Risque Modéré';
  if (score < 70) return '🟠 Risque Élevé';
  return '🔴 Risque Critique';
}

function getRiskMessage(score) {
  if (score < 30) return 'Votre métier est relativement protégé face à l\'automatisation IA';
  if (score < 50) return 'Anticipez dès maintenant pour rester compétitif sur le marché';
  if (score < 70) return 'Action recommandée dans les prochains mois pour sécuriser votre carrière';
  return 'Action urgente nécessaire pour protéger votre avenir professionnel';
}

