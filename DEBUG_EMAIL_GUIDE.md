# 🔧 Guide de Debug Email - SkillShield

## 🎯 Diagnostic du Problème

Le serveur envoie les emails avec succès (✅ dans les logs), mais le frontend affiche "Erreur lors de l'envoi". 

## 🔍 Étapes de Diagnostic

### **1. Vérifier les Serveurs**

```bash
# Terminal 1 : Serveur Email
npm run email-server

# Terminal 2 : Application Vite  
npm run dev
```

### **2. Tester l'API Directement**

```bash
curl -X POST http://localhost:3001/api/send-report-with-pdf \
  -H "Content-Type: application/json" \
  -d '{
    "email": "votre@email.com",
    "firstName": "Test",
    "score": 50,
    "answers": {"firstName": "Test"},
    "breakdown": {"baseJob": 20}
  }'
```

**Réponse attendue :**
```json
{
  "success": true,
  "messageId": "resend_xxxxxxxxx",
  "message": "Email envoyé avec succès"
}
```

### **3. Tester via l'Application**

1. Aller sur `http://localhost:5173/calculator`
2. Compléter le formulaire (8 étapes)
3. Cliquer "Calculer mon score"
4. Cliquer "Recevoir mon rapport par email"
5. Entrer votre email
6. Cliquer "Envoyer mon rapport gratuit"

### **4. Vérifier les Logs du Navigateur**

Ouvrir les **DevTools** (F12) → **Console** et chercher :

**Logs attendus :**
```
📧 Envoi vers: http://localhost:3001/api/send-report-with-pdf
📧 Réponse du serveur: 200 OK
✅ Réponse reçue: {success: true, messageId: "...", message: "..."}
```

**Si erreur :**
```
❌ Erreur serveur: [détails de l'erreur]
```

## 🚨 Solutions selon l'Erreur

### **Erreur : "Failed to execute 'json' on 'Response'"**

**Cause :** Le serveur ne retourne pas de JSON valide
**Solution :** Vérifier que le serveur email fonctionne

### **Erreur : "Network Error" ou "fetch failed"**

**Cause :** Le serveur email n'est pas démarré
**Solution :** 
```bash
npm run email-server
```

### **Erreur : "CORS"**

**Cause :** Problème de CORS entre frontend et serveur
**Solution :** Le serveur a déjà CORS configuré, redémarrer si nécessaire

### **Erreur : "Missing API key"**

**Cause :** Variables d'environnement Resend manquantes
**Solution :** Utiliser `npm run email-server` au lieu de `node simple-test-server.cjs`

## 🎯 Test Rapide

**Commande de test complète :**

```bash
# 1. Démarrer le serveur email
npm run email-server

# 2. Dans un autre terminal, tester l'API
curl -X POST http://localhost:3001/api/send-report-with-pdf \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","firstName":"Test","score":50,"answers":{},"breakdown":{}}'

# 3. Si ça marche, tester via l'app
# Aller sur http://localhost:5173/calculator
```

## 📧 Vérification Email

Si l'API fonctionne mais que vous ne recevez pas l'email :

1. **Vérifier les spams** 📬
2. **Attendre 2-3 minutes** ⏰
3. **Vérifier l'adresse email** ✉️
4. **Tester avec une autre adresse** 🔄

## 🔧 Logs de Debug

**Serveur (Terminal 1) :**
```
🔑 RESEND_API_KEY: Trouvée
📧 Envoi via Resend...
✅ Email envoyé avec succès: resend_xxxxxxxxx
```

**Frontend (Console navigateur) :**
```
📧 Envoi vers: http://localhost:3001/api/send-report-with-pdf
📧 Réponse du serveur: 200 OK
✅ Réponse reçue: {success: true, messageId: "resend_xxxxxxxxx", message: "Email envoyé avec succès"}
```

## 🚀 Si Tout Fonctionne

Vous devriez recevoir un email magnifique avec :
- ✅ Design premium SkillShield
- ✅ Votre prénom personnalisé
- ✅ Score de risque coloré
- ✅ Message émotionnel
- ✅ Bouton CTA vers la waitlist

**L'email arrive généralement dans les 1-2 minutes !** 📬✨

