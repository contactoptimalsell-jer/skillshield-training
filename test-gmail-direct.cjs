// Test d'envoi email direct avec Gmail comme expéditeur
const { Resend } = require('resend');

async function testGmailDelivery() {
  const resend = new Resend('re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo');
  
  try {
    console.log('🧪 Test d\'envoi direct avec Gmail...');
    
    const data = await resend.emails.send({
      from: 'Jerome Karr <jerome.karr@gmail.com>', // Votre Gmail comme expéditeur
      to: 'klanbicoc@gmail.com', // Email de test
      subject: '🛡️ Test Gmail Direct - SkillShield',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #06B6D4;">Test de livraison Gmail Direct</h2>
          <p>Si vous recevez cet email, le problème est résolu !</p>
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3>Score de test : 75%</h3>
            <p>Date : ${new Date().toLocaleString()}</p>
            <p>Expéditeur : jerome.karr@gmail.com</p>
          </div>
          <p>Ce test utilise votre Gmail comme expéditeur pour contourner les blocages.</p>
        </div>
      `,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    });
    
    console.log('✅ Email de test envoyé avec succès:', data);
    console.log('📧 Vérifiez votre boîte Gmail dans 1-2 minutes');
    
  } catch (error) {
    console.error('❌ Erreur:', error);
  }
}

testGmailDelivery();

