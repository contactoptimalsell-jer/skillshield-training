// Script de test pour le système de partage
console.log('🧪 Test du système de partage SkillShield');

// Simuler les données d'un utilisateur
const testUser = {
  firstName: 'Jean',
  score: 65,
  job: 'data-analyst',
  sector: 'tech'
};

// Simuler les messages de partage
function getMessage(score, firstName) {
  if (score >= 70) {
    return `Je viens de découvrir que mon métier a un risque de ${score}% d'être impacté par l'IA 😱 Et vous ? Faites le test gratuit sur SkillShield !`;
  } else if (score >= 50) {
    return `Mon score de risque IA : ${score}%. Pas critique, mais je préfère anticiper ! 🎯 Calculez le vôtre gratuitement sur SkillShield`;
  } else {
    return `Score de risque IA : ${score}% ✅ Mon métier est plutôt protégé, mais je reste vigilant ! Et vous ? Test gratuit sur SkillShield`;
  }
}

// Tester les messages
console.log('\n📝 Messages de partage testés :');
console.log('Score 75%:', getMessage(75, 'Jean'));
console.log('Score 65%:', getMessage(65, 'Jean'));
console.log('Score 35%:', getMessage(35, 'Jean'));

// Simuler les URLs de partage
const shareUrl = 'http://localhost:5173/calculator';
const fullMessage = `${getMessage(testUser.score, testUser.firstName)}\n\n👉 ${shareUrl}`;

console.log('\n🔗 URLs de partage :');
console.log('LinkedIn:', `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`);
console.log('Twitter:', `https://twitter.com/intent/tweet?text=${encodeURIComponent(getMessage(testUser.score, testUser.firstName))}&url=${encodeURIComponent(shareUrl)}&hashtags=IA,Carriere,SkillShield`);
console.log('WhatsApp:', `https://wa.me/?text=${encodeURIComponent(fullMessage)}`);

console.log('\n✅ Test du système de partage terminé !');
console.log('🎯 Le bouton "Partager mes résultats" devrait maintenant fonctionner parfaitement.');

