# 🔧 Configurer Google OAuth dans Clerk

## 📋 Guide Complet : Client ID et Client Secret Google

## 🎯 Vue d'ensemble

Pour utiliser la connexion Google avec Clerk, vous devez :
1. Créer un projet Google Cloud et configurer OAuth
2. Obtenir Client ID et Client Secret
3. Les configurer dans Clerk Dashboard

## 📝 Étape 1 : Créer un Projet Google Cloud

### 1.1 Accéder à Google Cloud Console

1. Allez sur https://console.cloud.google.com
2. Connectez-vous avec votre compte Google
3. Créez un nouveau projet ou sélectionnez un projet existant :
   - Cliquez sur le sélecteur de projet (en haut)
   - Cliquez sur **"New Project"**
   - Nom : `SkillShield` (ou autre nom)
   - Cliquez sur **"Create"**

### 1.2 Activer l'API OAuth 2.0

1. Dans le menu de gauche, allez dans **APIs & Services** → **Library**
2. Recherchez **"Google+ API"** ou **"Identity Platform API"**
3. Cliquez sur **"Enable"**

**Note :** L'API OAuth est généralement activée par défaut, mais vérifiez quand même.

## 🔑 Étape 2 : Créer les Credentials OAuth

### 2.1 Créer un OAuth 2.0 Client ID

1. Dans le menu de gauche, allez dans **APIs & Services** → **Credentials**
2. Cliquez sur **"+ CREATE CREDENTIALS"** en haut
3. Sélectionnez **"OAuth client ID"**

### 2.2 Configurer le Consent Screen (si première fois)

Si c'est la première fois, Google vous demandera de configurer le Consent Screen :

1. **User Type** : Sélectionnez **"External"** (pour le développement)
2. Cliquez sur **"Create"**
3. **App Information** :
   - App name : `SkillShield`
   - User support email : Votre email
   - Developer contact : Votre email
4. Cliquez sur **"Save and Continue"**
5. **Scopes** : Cliquez sur **"Save and Continue"** (par défaut suffit)
6. **Test users** : Cliquez sur **"Save and Continue"** (optionnel pour le développement)
7. Cliquez sur **"Back to Dashboard"**

### 2.3 Créer le OAuth Client ID

1. Dans **Credentials**, cliquez sur **"+ CREATE CREDENTIALS"** → **"OAuth client ID"**
2. **Application type** : Sélectionnez **"Web application"**
3. **Name** : `SkillShield Web Client` (ou autre nom)
4. **Authorized redirect URIs** : Ajoutez l'URL suivante :
   ```
   https://accounts.clerk.dev/v1/oauth_callback
   ```
   - Cliquez sur **"+ ADD URI"**
   - Collez l'URL ci-dessus
   - Cliquez sur **"Create"**

### 2.4 Copier Client ID et Client Secret

1. Une fenêtre popup s'affiche avec vos credentials
2. **Client ID** : Copiez cette valeur (commence par `xxxxx.apps.googleusercontent.com`)
3. **Client secret** : Copiez cette valeur (commence par `GOCSPX-xxxxx`)
4. **IMPORTANT** : Notez ces valeurs dans un endroit sûr (vous en aurez besoin dans Clerk)

## ⚙️ Étape 3 : Configurer dans Clerk Dashboard

### 3.1 Accéder à Clerk Dashboard

1. Allez sur https://dashboard.clerk.com
2. Connectez-vous à votre compte
3. Sélectionnez votre application **SkillShield**

### 3.2 Activer Google OAuth

1. Dans le menu de gauche, allez dans **User & Authentication** → **Social Connections**
2. Trouvez **"Google"** dans la liste
3. Cliquez sur le toggle pour **activer Google**
4. Une section **"Configure"** apparaît

### 3.3 Configurer Client ID et Client Secret

1. Dans la section **"Configure Google"** :
   - **Client ID** : Collez le Client ID copié depuis Google Cloud Console
   - **Client Secret** : Collez le Client Secret copié depuis Google Cloud Console
2. Cliquez sur **"Save"** ou **"Apply"**

### 3.4 Vérifier la Configuration

1. Vérifiez que le toggle **Google** est **activé** (vert)
2. Vérifiez que les credentials sont bien sauvegardés (pas d'erreur)

## 🔍 Étape 4 : Vérifier les Redirect URLs

### 4.1 Dans Clerk Dashboard

1. Allez dans **User & Authentication** → **Paths**
2. Vérifiez les **Redirect URLs** :
   - **Sign-in redirect URL** : 
     - Dev : `http://localhost:5173`
     - Prod : `https://votre-domaine.vercel.app`
   - **Sign-up redirect URL** :
     - Dev : `http://localhost:5173`
     - Prod : `https://votre-domaine.vercel.app`

### 4.2 Dans Google Cloud Console (si nécessaire)

Si vous avez d'autres redirect URIs à ajouter :

1. Retournez dans **Google Cloud Console** → **Credentials**
2. Cliquez sur votre **OAuth 2.0 Client ID**
3. Dans **Authorized redirect URIs**, vérifiez que vous avez :
   - `https://accounts.clerk.dev/v1/oauth_callback` (OBLIGATOIRE)
   - D'autres URLs si nécessaire
4. Cliquez sur **"Save"**

## ✅ Étape 5 : Tester la Connexion

### 5.1 Tester en Local (Dev)

1. Lancez votre application en local :
   ```bash
   npm run dev
   ```
2. Allez sur `http://localhost:5173/auth?mode=signin`
3. Cliquez sur **"Continue with Google"**
4. Vous devriez être redirigé vers Google pour vous connecter

### 5.2 Tester en Production

1. Déployez votre application sur Vercel
2. Allez sur `https://votre-domaine.vercel.app/auth?mode=signin`
3. Cliquez sur **"Continue with Google"**
4. Vous devriez être redirigé vers Google pour vous connecter

## 🐛 Résolution de Problèmes

### Problème : "OAuth provider not configured"

**Solution :**
- Vérifiez que Google est **activé** dans Clerk Dashboard
- Vérifiez que les credentials sont bien sauvegardés

### Problème : "Redirect URI mismatch"

**Solution :**
- Vérifiez que `https://accounts.clerk.dev/v1/oauth_callback` est dans les **Authorized redirect URIs** de Google Cloud Console
- Vérifiez que les URLs sont **exactement** identiques (pas d'espace, pas de slash en trop)

### Problème : "Invalid client credentials"

**Solution :**
- Vérifiez que le Client ID et Client Secret sont **correctement copiés**
- Vérifiez qu'il n'y a **pas d'espaces** avant/après les valeurs
- Recréez les credentials si nécessaire

### Problème : Popup bloquée

**Solution :**
- Autorisez les popups pour votre domaine dans le navigateur
- Essayez en navigation privée (Incognito)

## 📝 Résumé des URLs Importantes

### Google Cloud Console

**Authorized redirect URIs :**
```
https://accounts.clerk.dev/v1/oauth_callback
```

### Clerk Dashboard

**Redirect URLs (User & Authentication → Paths) :**
- Dev : `http://localhost:5173`
- Prod : `https://votre-domaine.vercel.app`

## ✅ Checklist Finale

- [ ] Projet Google Cloud créé
- [ ] OAuth 2.0 Client ID créé
- [ ] Redirect URI `https://accounts.clerk.dev/v1/oauth_callback` ajoutée dans Google
- [ ] Client ID copié depuis Google Cloud Console
- [ ] Client Secret copié depuis Google Cloud Console
- [ ] Google activé dans Clerk Dashboard
- [ ] Client ID configuré dans Clerk Dashboard
- [ ] Client Secret configuré dans Clerk Dashboard
- [ ] Redirect URLs vérifiées dans Clerk Dashboard
- [ ] Test de connexion réussi

## 💡 Note Importante

- **Client ID** : Peut être exposé publiquement (dans le code client)
- **Client Secret** : DOIT rester secret (uniquement dans Clerk Dashboard, jamais dans le code)
- **Redirect URI Clerk** : `https://accounts.clerk.dev/v1/oauth_callback` est OBLIGATOIRE

Une fois configuré, Clerk gère automatiquement tout le flux OAuth, vous n'avez rien à configurer dans votre code !
