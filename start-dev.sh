#!/bin/bash

# Script de démarrage pour le développement SkillShield
echo "🚀 Démarrage de SkillShield en mode développement..."

# Vérifier que Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez installer Node.js d'abord."
    exit 1
fi

# Vérifier que npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez installer npm d'abord."
    exit 1
fi

# Installer les dépendances si nécessaire
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Vérifier que le fichier .env.local existe
if [ ! -f ".env.local" ]; then
    echo "⚠️  Le fichier .env.local n'existe pas. Création d'un fichier d'exemple..."
    cat > .env.local << EOF
# Configuration Resend pour l'envoi d'emails avec PDF
RESEND_API_KEY=re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo
RESEND_FROM_EMAIL=onboarding@resend.dev
EOF
    echo "✅ Fichier .env.local créé avec les clés de test."
fi

# Démarrer le serveur de test API
echo "🧪 Démarrage du serveur de test API sur le port 3001..."
node simple-test-server.cjs &
API_PID=$!

# Attendre que le serveur API démarre
sleep 2

# Vérifier que le serveur API fonctionne
if curl -s http://localhost:3001/health > /dev/null; then
    echo "✅ Serveur API démarré avec succès"
else
    echo "❌ Erreur lors du démarrage du serveur API"
    kill $API_PID 2>/dev/null
    exit 1
fi

# Démarrer le serveur Vite
echo "🎨 Démarrage du serveur Vite sur le port 5173..."
npm run dev &
VITE_PID=$!

# Attendre que Vite démarre
sleep 3

# Vérifier que Vite fonctionne
if curl -s http://localhost:5173/ > /dev/null; then
    echo "✅ Serveur Vite démarré avec succès"
else
    echo "❌ Erreur lors du démarrage de Vite"
    kill $API_PID $VITE_PID 2>/dev/null
    exit 1
fi

echo ""
echo "🎉 SkillShield est maintenant en cours d'exécution !"
echo ""
echo "📍 URLs disponibles :"
echo "   • Application : http://localhost:5173"
echo "   • Calculateur : http://localhost:5173/calculator"
echo "   • API de test : http://localhost:3001"
echo "   • Santé API   : http://localhost:3001/health"
echo ""
echo "📧 Pour tester l'envoi d'email :"
echo "   1. Allez sur http://localhost:5173/calculator"
echo "   2. Complétez le formulaire"
echo "   3. Cliquez sur 'Recevoir mon rapport par email'"
echo "   4. Entrez votre email de test"
echo ""
echo "🛑 Pour arrêter les serveurs, appuyez sur Ctrl+C"
echo ""

# Fonction de nettoyage
cleanup() {
    echo ""
    echo "🛑 Arrêt des serveurs..."
    kill $API_PID $VITE_PID 2>/dev/null
    echo "✅ Serveurs arrêtés"
    exit 0
}

# Capturer Ctrl+C
trap cleanup SIGINT SIGTERM

# Attendre que l'utilisateur arrête les serveurs
wait

