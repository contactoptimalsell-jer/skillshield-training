# 🔧 Dépannage : Connexion Google avec Clerk

## ⚠️ Problème

Vous ne pouvez plus vous connecter avec Google (OAuth).

## 🔍 Diagnostic

### Les erreurs ArXiv ne bloquent PAS la connexion Google

Les erreurs que vous voyez dans la console concernent **ArXiv** (statistiques), pas Clerk/Google OAuth. Elles ne devraient **pas empêcher** la connexion Google.

Si vous ne pouvez vraiment pas vous connecter avec Google, c'est un problème **séparé** lié à Clerk OAuth.

## ✅ Solutions

### Solution 1 : Vérifier la Configuration OAuth dans Clerk

1. **Allez dans Clerk Dashboard**
   - https://dashboard.clerk.com
   - Sélectionnez votre application

2. **Vérifiez les Providers OAuth**
   - Allez dans **User & Authentication** → **Social Connections**
   - Vérifiez que **Google** est activé
   - Vérifiez les **Redirect URLs** :
     - Dev : `http://localhost:5173/auth/callback`
     - Prod : `https://votre-domaine.vercel.app/auth/callback`

3. **Vérifiez les Credentials Google**
   - Client ID et Client Secret configurés
   - Si manquants, créez-les dans Google Cloud Console

### Solution 2 : Vider le Cache du Navigateur (Pour les erreurs ArXiv)

Les erreurs ArXiv sont dues au cache. Pour les corriger :

**Hard Refresh :**
- Windows/Linux : `Ctrl + Shift + R` ou `Ctrl + F5`
- Mac : `Cmd + Shift + R`

**Ou via DevTools :**
1. F12 → Network
2. Cochez "Disable cache"
3. Rafraîchissez

### Solution 3 : Vérifier les URLs de Callback

Dans Clerk Dashboard → **User & Authentication** → **Paths** :

**Sign-in redirect URL :**
- Dev : `http://localhost:5173`
- Prod : `https://votre-domaine.vercel.app`

**Sign-up redirect URL :**
- Dev : `http://localhost:5173`
- Prod : `https://votre-domaine.vercel.app`

### Solution 4 : Tester en Navigation Privée

1. Ouvrez une fenêtre de navigation privée (Incognito)
2. Essayez de vous connecter avec Google
3. Si ça fonctionne → problème de cache/cookies
4. Si ça ne fonctionne pas → problème de configuration Clerk

## 🐛 Si la Connexion Google Échoue Encore

### Erreurs Courantes

1. **"OAuth provider not configured"**
   - → Google pas activé dans Clerk Dashboard
   - Solution : Activer Google dans Social Connections

2. **"Redirect URI mismatch"**
   - → URL de callback incorrecte
   - Solution : Vérifier les Redirect URLs dans Clerk et Google Cloud Console

3. **"Invalid client credentials"**
   - → Client ID/Secret incorrects
   - Solution : Vérifier les credentials dans Clerk Dashboard

4. **Popup bloquée**
   - → Popup bloquée par le navigateur
   - Solution : Autoriser les popups pour votre domaine

### Vérification Google Cloud Console

Si vous utilisez vos propres credentials Google :

1. Allez sur https://console.cloud.google.com
2. **APIs & Services** → **Credentials**
3. Vérifiez votre OAuth 2.0 Client ID
4. **Authorized redirect URIs** doit contenir :
   - `https://accounts.clerk.dev/v1/oauth_callback`
   - Ou l'URL fournie par Clerk dans les instructions

## 📝 Note Importante

Les erreurs ArXiv dans la console sont **indépendantes** de la connexion Google. Elles sont dues au cache du navigateur et ne bloquent pas l'authentification.

Si vous ne pouvez vraiment pas vous connecter avec Google, c'est un problème de configuration Clerk OAuth, pas lié aux erreurs ArXiv.

## ✅ Checklist

- [ ] Google activé dans Clerk Dashboard (Social Connections)
- [ ] Client ID et Client Secret configurés dans Clerk
- [ ] Redirect URLs correctes dans Clerk
- [ ] Redirect URIs correctes dans Google Cloud Console (si credentials personnels)
- [ ] Testé en navigation privée
- [ ] Cache du navigateur vidé (pour les erreurs ArXiv)
- [ ] Pas d'erreurs spécifiques dans la console liées à Clerk/OAuth
