#!/bin/bash

echo "🧪 Test d'intégration SkillShield - Backend ES Modules"
echo "=================================================="

# Couleurs pour les messages
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction pour afficher les messages colorés
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

# Test 2: Test de l'API submit-assessment
print_status "Test 2: Test de l'API submit-assessment..."

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
    print_success "API submit-assessment fonctionne correctement"
    echo "Réponse: $RESPONSE"
elif echo "$RESPONSE" | grep -q "row-level security"; then
    print_warning "API répond mais erreur RLS (attendu si Supabase pas configuré)"
    echo "Réponse: $RESPONSE"
    print_status "Solution: Exécutez le script SQL dans Supabase Dashboard"
else
    print_error "API ne répond pas correctement"
    echo "Réponse: $RESPONSE"
    exit 1
fi

# Test 3: Vérifier que le frontend est accessible
print_status "Test 3: Vérification du frontend..."
if curl -s http://localhost:5173 > /dev/null 2>&1; then
    print_success "Frontend accessible sur http://localhost:5173"
else
    print_warning "Frontend non accessible. Démarrez-le avec: npm run dev"
fi

# Test 4: Vérifier les fichiers de configuration
print_status "Test 4: Vérification des fichiers de configuration..."

if [ -f "backend/server.js" ]; then
    print_success "backend/server.js existe"
else
    print_error "backend/server.js manquant"
fi

if [ -f "backend/.env" ]; then
    print_success "backend/.env existe"
else
    print_error "backend/.env manquant"
fi

if [ -f "supabase-setup.sql" ]; then
    print_success "supabase-setup.sql existe"
else
    print_error "supabase-setup.sql manquant"
fi

if [ -f "src/hooks/useSubmitAssessment.js" ]; then
    print_success "src/hooks/useSubmitAssessment.js existe"
else
    print_error "src/hooks/useSubmitAssessment.js manquant"
fi

# Test 5: Vérifier les variables d'environnement
print_status "Test 5: Vérification des variables d'environnement..."

if [ -f "backend/.env" ]; then
    if grep -q "SUPABASE_URL" backend/.env; then
        print_success "SUPABASE_URL configuré"
    else
        print_error "SUPABASE_URL manquant dans backend/.env"
    fi
    
    if grep -q "RESEND_API_KEY" backend/.env; then
        print_success "RESEND_API_KEY configuré"
    else
        print_error "RESEND_API_KEY manquant dans backend/.env"
    fi
fi

# Résumé
echo ""
echo "=================================================="
echo "📊 RÉSUMÉ DU TEST D'INTÉGRATION"
echo "=================================================="

if [ -f "backend/server.js" ] && [ -f "backend/.env" ] && [ -f "supabase-setup.sql" ]; then
    print_success "Configuration backend: ✅ COMPLÈTE"
else
    print_error "Configuration backend: ❌ INCOMPLÈTE"
fi

if curl -s http://localhost:3001 > /dev/null 2>&1; then
    print_success "Serveur backend: ✅ OPÉRATIONNEL"
else
    print_error "Serveur backend: ❌ NON DÉMARRÉ"
fi

if curl -s http://localhost:5173 > /dev/null 2>&1; then
    print_success "Serveur frontend: ✅ OPÉRATIONNEL"
else
    print_warning "Serveur frontend: ⚠️ NON DÉMARRÉ"
fi

echo ""
echo "🎯 PROCHAINES ÉTAPES:"
echo "1. Exécuter le script SQL dans Supabase Dashboard"
echo "2. Intégrer le hook useSubmitAssessment dans votre composant"
echo "3. Tester le flux complet (questionnaire → email → résultats)"
echo ""
echo "📚 Documentation: INTEGRATION_FINAL_GUIDE.md"
echo "🧪 Exemple d'intégration: INTEGRATION_EXAMPLE.jsx"
echo ""
print_success "Test d'intégration terminé !"

