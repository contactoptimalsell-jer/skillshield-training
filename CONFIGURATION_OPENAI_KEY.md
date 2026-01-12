# 🔑 Configuration de la Clé API OpenAI

## ⚠️ IMPORTANT : Ne JAMAIS commiter la clé API dans le code

Les clés API sont des informations sensibles qui doivent rester privées.

## ✅ Configuration Correcte : Vercel Dashboard

### Étape 1 : Accéder aux Variables d'Environnement

1. Allez sur **https://vercel.com/dashboard**
2. Sélectionnez votre projet **SkillShield**
3. Allez dans **Settings** (Paramètres)
4. Cliquez sur **Environment Variables** (Variables d'environnement)

### Étape 2 : Ajouter la Clé OpenAI

1. Cliquez sur **Add New** (Ajouter)
2. **Key** (Nom) : `OPENAI_API_KEY`
3. **Value** (Valeur) : Collez votre clé API OpenAI (commence par `sk-...`)
4. **Environments** : Cochez tous les environnements :
   - ✅ Production
   - ✅ Preview
   - ✅ Development
5. Cliquez sur **Save**

### Étape 3 : Redéployer

1. Allez dans **Deployments**
2. Cliquez sur les **3 points** (⋯) du dernier déploiement
3. Sélectionnez **Redeploy**
4. Confirmez le redéploiement

## ✅ Vérification

Après le redéploiement, l'API `/api/aegis` devrait fonctionner correctement.

## 🔒 Sécurité

- ✅ La clé est stockée de manière sécurisée dans Vercel
- ✅ Elle n'apparaîtra jamais dans le code source
- ✅ Elle est accessible uniquement par les fonctions serverless
- ✅ Chaque environnement peut avoir sa propre clé si nécessaire

## 📝 Note

Si vous voyez cette clé dans vos fichiers `.env` locaux, **ne les commitez JAMAIS**. Le fichier `.env` devrait être dans `.gitignore`.
