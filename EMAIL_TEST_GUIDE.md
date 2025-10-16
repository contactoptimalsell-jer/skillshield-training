# 📧 Guide de Test Email - SkillShield

## 🎯 Problème Résolu

Le système d'email a été corrigé pour utiliser **vraiment Resend** au lieu de simuler l'envoi.

## 🚀 Test de l'Envoi d'Email

### **Méthode 1 : Via l'Application Web (Recommandé)**

1. **Démarrer les serveurs avec les bonnes variables d'environnement :**
   ```bash
   # Option A : Commande complète avec variables d'environnement
   RESEND_API_KEY=re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo RESEND_FROM_EMAIL=onboarding@resend.dev node simple-test-server.cjs
   
   # Option B : Utiliser le script npm (plus simple)
   npm run email-server
   
   # Terminal 2 : Application Vite
   npm run dev
   ```

2. **Ou démarrer les deux en même temps :**
   ```bash
   npm run dev:full
   ```

3. **Tester dans le navigateur :**
   - Aller sur `http://localhost:5173/calculator`
   - Compléter le formulaire complet (8 étapes)
   - Cliquer "Calculer mon score"
   - Cliquer "Recevoir mon rapport par email"
   - Entrer votre vraie adresse email
   - Cliquer "Envoyer mon rapport gratuit"

### **Méthode 2 : Test Direct API**

```bash
# Utiliser le script de test
node test-email-send.js votre@email.com VotreNom

# Ou test manuel avec curl
curl -X POST http://localhost:3001/api/send-report-with-pdf \
  -H "Content-Type: application/json" \
  -d '{
    "email": "votre@email.com",
    "firstName": "Votre Nom",
    "score": 75,
    "answers": {
      "firstName": "Votre Nom",
      "job": "Développeur",
      "sector": "Tech"
    },
    "breakdown": {
      "baseJob": 15,
      "taskAdjustment": 5,
      "digitalSkills": 10
    }
  }'
```

## 📋 Vérifications

### **1. Serveur API Fonctionne**
```bash
curl http://localhost:3001/health
# Réponse attendue: {"status":"OK","message":"Test server running"}
```

### **2. Variables d'Environnement**
Le fichier `.env.local` doit contenir :
```
RESEND_API_KEY=re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### **3. Logs du Serveur**
Le serveur doit afficher :
```
🧪 Serveur de test démarré sur http://localhost:3001
📧 API email: http://localhost:3001/api/send-report-with-pdf
🔑 RESEND_API_KEY: Trouvée
```

### **4. Réponse API**
Réponse attendue en cas de succès :
```json
{
  "success": true,
  "messageId": "resend_xxxxxxxxxx",
  "message": "Email envoyé avec succès"
}
```

## 🔧 Dépannage

### **Problème : Email non reçu**

1. **Vérifier les spams** - L'email peut être dans votre dossier spam
2. **Vérifier l'adresse** - Assurez-vous que l'email est correct
3. **Vérifier les logs** - Regarder la console du serveur pour les erreurs

### **Problème : Erreur API**

1. **Serveur démarré ?** - Vérifier que `node simple-test-server.cjs` tourne
2. **Port libre ?** - Vérifier que le port 3001 n'est pas utilisé
3. **Variables d'env ?** - Vérifier que `.env.local` existe et contient la clé Resend

### **Problème : Clé Resend**

Si vous obtenez une erreur de clé API :
1. Vérifier que la clé `re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo` est correcte
2. Vérifier que le domaine `onboarding@resend.dev` est autorisé
3. Contacter le support Resend si nécessaire

## 📧 Contenu de l'Email

L'email envoyé contient :
- ✅ **Design premium** avec palette SkillShield
- ✅ **Message personnalisé** avec votre prénom
- ✅ **Score coloré** selon le niveau de risque
- ✅ **CTA vers la waitlist** avec offre -50%
- ✅ **Footer professionnel**

## 🎯 Test Recommandé

1. **Utilisez votre vraie adresse email**
2. **Complétez le calculateur complet** (8 étapes)
3. **Vérifiez votre boîte mail** (et les spams)
4. **Testez le lien** vers la waitlist dans l'email

**L'email devrait arriver dans les 1-2 minutes !** 📬✨
