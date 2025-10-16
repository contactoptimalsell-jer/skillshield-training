#!/bin/bash

echo "🧪 Test d'intégration SkillShield - Backend ES Modules"
echo "=================================================="

# Test 1: Vérifier que le backend est démarré
echo "Test 1: Vérification du backend..."
if curl -s http://localhost:3001 > /dev/null 2>&1; then
    echo "✅ Backend accessible sur http://localhost:3001"
else
    echo "❌ Backend non accessible. Démarrez-le avec: cd backend && npm start"
    exit 1
fi

# Test 2: Test de l'API submit-assessment
echo "Test 2: Test de l'API submit-assessment..."

RESPONSE=$(curl -s -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test Integration",
    "score": 65,
    "riskLevel": "Élevé",
    "answers": {"firstName": "Test Integration"},
    "breakdown": {"baseJob": 30}
  }')

if echo "$RESPONSE" | grep -q "success"; then
    echo "✅ API submit-assessment fonctionne correctement"
    echo "Réponse: $RESPONSE"
elif echo "$RESPONSE" | grep -q "row-level security"; then
    echo "⚠️  API répond mais erreur RLS (attendu si Supabase pas configuré)"
    echo "Réponse: $RESPONSE"
    echo "Solution: Exécutez le script SQL dans Supabase Dashboard"
else
    echo "❌ API ne répond pas correctement"
    echo "Réponse: $RESPONSE"
    exit 1
fi

echo ""
echo "🎯 PROCHAINES ÉTAPES:"
echo "1. Exécuter le script SQL dans Supabase Dashboard"
echo "2. Intégrer le hook useSubmitAssessment dans votre composant"
echo "3. Tester le flux complet (questionnaire → email → résultats)"
echo ""
echo "✅ Test d'intégration terminé !"
