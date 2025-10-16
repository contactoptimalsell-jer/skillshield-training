#!/bin/bash

echo "🚀 Démarrage du serveur d'email SkillShield..."

# Variables d'environnement pour Resend
export RESEND_API_KEY=re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo
export RESEND_FROM_EMAIL=onboarding@resend.dev

echo "🔑 Variables d'environnement configurées:"
echo "RESEND_API_KEY: ${RESEND_API_KEY:0:10}..."
echo "RESEND_FROM_EMAIL: $RESEND_FROM_EMAIL"

# Démarrer le serveur
echo "📧 Démarrage du serveur API..."
node simple-test-server.cjs