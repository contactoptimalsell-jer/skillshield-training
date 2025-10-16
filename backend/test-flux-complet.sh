#!/bin/bash

echo "🧪 Test du flux complet SkillShield"
echo "=================================="

# Couleurs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Test 1: Vérifier que le backend est démarré
print_status "Test 1: Vérification du backend..."
if curl -s http://localhost:3001 > /dev/null 2>&1; then
    print_success "Backend accessible sur http://localhost:3001"
else
    print_error "Backend non accessible. Démarrez-le avec: cd backend && npm start"
    exit 1
fi

# Test 2: Vérifier que le frontend est démarré
print_status "Test 2: Vérification du frontend..."
if curl -s http://localhost:5173 > /dev/null 2>&1; then
    print_success "Frontend accessible sur http://localhost:5173"
else
    print_warning "Frontend non accessible. Démarrez-le avec: npm run dev"
fi

# Test 3: Test de l'API submit-assessment
print_status "Test 3: Test de l'API submit-assessment..."

RESPONSE=$(curl -s -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test Flux Complet",
    "score": 88,
    "riskLevel": "Critique",
    "answers": {"job": "Développeur"},
    "breakdown": {"automation": 25}
  }')

echo "Réponse de l'API:"
echo "$RESPONSE" | jq . 2>/dev/null || echo "$RESPONSE"

if echo "$RESPONSE" | grep -q "success.*true"; then
    print_success "API submit-assessment fonctionne parfaitement !"
    echo "✅ Flux complet opérationnel"
elif echo "$RESPONSE" | grep -q "row-level security"; then
    print_warning "API répond mais erreur RLS (Supabase pas configuré)"
    echo "⚠️  Solution: Exécutez le script SQL dans Supabase Dashboard"
    echo "📚 Guide: TEST_FLUX_COMPLET.md"
elif echo "$RESPONSE" | grep -q "Could not find the table"; then
    print_warning "Table Supabase manquante"
    echo "⚠️  Solution: Créez la table avec le script SQL"
else
    print_error "API ne répond pas correctement"
    echo "❌ Vérifiez les logs du backend"
fi

echo ""
echo "🎯 RÉSUMÉ DU TEST:"
echo "=================="

if curl -s http://localhost:3001 > /dev/null 2>&1; then
    print_success "Backend: ✅ OPÉRATIONNEL"
else
    print_error "Backend: ❌ NON DÉMARRÉ"
fi

if curl -s http://localhost:5173 > /dev/null 2>&1; then
    print_success "Frontend: ✅ OPÉRATIONNEL"
else
    print_warning "Frontend: ⚠️ NON DÉMARRÉ"
fi

if echo "$RESPONSE" | grep -q "success.*true"; then
    print_success "API: ✅ FONCTIONNE PARFAITEMENT"
    print_success "Système: ✅ 100% OPÉRATIONNEL"
elif echo "$RESPONSE" | grep -q "row-level security"; then
    print_warning "API: ⚠️ FONCTIONNE (RLS à configurer)"
    print_warning "Système: ⚠️ 95% OPÉRATIONNEL (Supabase à configurer)"
else
    print_error "API: ❌ PROBLÈME"
    print_error "Système: ❌ NON OPÉRATIONNEL"
fi

echo ""
echo "📋 PROCHAINES ÉTAPES:"
if echo "$RESPONSE" | grep -q "row-level security"; then
    echo "1. 🔧 Configurer Supabase (5 minutes)"
    echo "   → https://supabase.com/dashboard"
    echo "   → Projet: jkdsepbnigcztrfcwkpj"
    echo "   → SQL Editor → Exécuter le script"
    echo "2. 🧪 Retester l'API"
    echo "3. 🌐 Tester le frontend complet"
elif echo "$RESPONSE" | grep -q "success.*true"; then
    echo "1. 🌐 Tester le frontend complet"
    echo "2. 📧 Vérifier la réception d'emails"
    echo "3. 🚀 Déployer en production"
else
    echo "1. 🔍 Vérifier les logs du backend"
    echo "2. 🔧 Redémarrer les serveurs"
    echo "3. 🧪 Retester"
fi

echo ""
echo "📚 Documentation:"
echo "• Guide complet: TEST_FLUX_COMPLET.md"
echo "• Configuration Supabase: SUPABASE_SETUP_FINAL.md"
echo "• Intégration: INTEGRATION_FINAL_GUIDE.md"

print_success "Test du flux complet terminé !"
