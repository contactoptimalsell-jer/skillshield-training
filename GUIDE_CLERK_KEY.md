# 🔑 Qu'est-ce que VITE_CLERK_PUBLISHABLE_KEY ?

## 📖 Explication Simple

`VITE_CLERK_PUBLISHABLE_KEY` est une **variable d'environnement** qui contient la clé publique de votre compte Clerk. C'est comme un identifiant qui permet à votre application de se connecter au service d'authentification Clerk.

## 🔍 Pourquoi "VITE_" ?

- Votre projet utilise **Vite** comme outil de build (pas Next.js)
- Dans Vite, toutes les variables d'environnement accessibles côté client doivent commencer par `VITE_`
- C'est une règle de sécurité : seules les variables avec le préfixe `VITE_` sont exposées au navigateur

## 🔐 Où Trouver la Valeur ?

Vous avez déjà la clé ! C'est :
```
pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk
```

## ⚙️ Comment Configurer dans Vercel ?

### Étape 1 : Aller dans Vercel Dashboard

1. Connectez-vous à https://vercel.com
2. Sélectionnez votre projet **SkillShield**
3. Allez dans **Settings** (Paramètres) → **Environment Variables** (Variables d'environnement)

### Étape 2 : Ajouter la Variable

1. Cliquez sur **"Add New"** (Ajouter Nouvelle)
2. Dans le champ **"Key"** (Clé), tapez exactement :
   ```
   VITE_CLERK_PUBLISHABLE_KEY
   ```
   ⚠️ **Attention :** Le nom doit être EXACT, avec `VITE_` au début

3. Dans le champ **"Value"** (Valeur), collez :
   ```
   pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk
   ```

4. Cochez **tous** les environnements :
   - ✅ Production
   - ✅ Preview
   - ✅ Development

5. Cliquez sur **"Save"** (Enregistrer)

### Étape 3 : Redéployer (TRÈS IMPORTANT)

Après avoir ajouté la variable, vous **DEVEZ** redéployer :

1. Allez dans l'onglet **"Deployments"** (Déploiements)
2. Trouvez le dernier déploiement
3. Cliquez sur les **3 points** (⋯) à droite
4. Cliquez sur **"Redeploy"** (Redéployer)
5. Confirmez le redéploiement
6. Attendez la fin du déploiement (2-3 minutes)

## ✅ Vérification

Après le redéploiement :

1. Ouvrez votre site sur Vercel
2. Ouvrez la console du navigateur (F12)
3. Si vous voyez encore l'erreur, vérifiez :
   - Que le nom de la variable est exactement `VITE_CLERK_PUBLISHABLE_KEY`
   - Que la valeur est correcte
   - Que vous avez bien redéployé après l'ajout

## 📸 Résumé Visuel

```
Vercel Dashboard
  └─ Votre Projet
      └─ Settings
          └─ Environment Variables
              └─ Add New
                  Key:   VITE_CLERK_PUBLISHABLE_KEY
                  Value: pk_test_c3dlZXQtcmhpbm8tNC5jbGVyay5hY2NvdW50cy5kZXYk
                  ✅ Production
                  ✅ Preview
                  ✅ Development
                  └─ Save

  └─ Deployments
      └─ [Dernier déploiement]
          └─ ⋯ → Redeploy
```

## 🆘 Si Ça Ne Marche Pas

1. **Vérifiez l'orthographe** : `VITE_CLERK_PUBLISHABLE_KEY` (avec `VITE_`)
2. **Vérifiez qu'il n'y a pas d'espaces** avant/après le nom ou la valeur
3. **Redéployez manuellement** (c'est souvent la solution)
4. **Attendez 2-3 minutes** après le redéploiement

## 💡 Pourquoi Cette Clé ?

Cette clé permet à votre application de :
- Afficher les formulaires de connexion Clerk
- Gérer l'authentification des utilisateurs
- Vérifier les sessions utilisateur
- Intégrer Clerk dans votre application React

C'est une clé **publique** (safe à exposer dans le code client), contrairement à la clé secrète qui reste sur le serveur.
