#!/bin/bash

# Script de démarrage pour le développement SkillShield
echo "🚀 Démarrage de SkillShield en mode développement..."

# Démarrer le serveur de test API
echo "🧪 Démarrage du serveur de test API sur le port 3001..."
node simple-test-server.cjs &
API_PID=$!

# Attendre que le serveur API démarre
sleep 2

# Démarrer le serveur Vite
echo "🎨 Démarrage du serveur Vite sur le port 5173..."
npm run dev &
VITE_PID=$!

echo ""
echo "🎉 SkillShield est maintenant en cours d'exécution !"
echo "📍 Application : http://localhost:5173"
echo "📍 Calculateur : http://localhost:5173/calculator"
echo "🛑 Pour arrêter, appuyez sur Ctrl+C"
echo ""

# Fonction de nettoyage
cleanup() {
    echo "🛑 Arrêt des serveurs..."
    kill $API_PID $VITE_PID 2>/dev/null
    exit 0
}

# Capturer Ctrl+C
trap cleanup SIGINT SIGTERM

# Attendre
wait
