// Test d'envoi email avec Gmail comme expéditeur
// Ceci est une solution temporaire pour contourner les blocages Gmail

const { Resend } = require('resend');

async function testGmailDelivery() {
  const resend = new Resend('re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo');
  
  try {
    const data = await resend.emails.send({
      from: 'SkillShield Test <jerome.karr@gmail.com>', // Votre Gmail comme expéditeur
      to: 'klanbicoc@gmail.com', // Email de test
      subject: '🛡️ Test Gmail - SkillShield',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Test de livraison Gmail</h2>
          <p>Si vous recevez cet email, Gmail accepte les emails de votre adresse Gmail.</p>
          <p>Score de test : 75%</p>
          <p>Date : ${new Date().toLocaleString()}</p>
        </div>
      `,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    });
    
    console.log('✅ Email de test envoyé:', data);
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

testGmailDelivery();

