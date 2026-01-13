# 🔍 Debug : Erreur "fetch failed"

## ✅ Variables d'environnement présentes

Vous avez bien :
- `SUPABASE_URL` (pour les API routes)
- `SUPABASE_ANON_KEY` (pour les API routes)
- `VITE_SUPABASE_URL` (pour le frontend)
- `VITE_SUPABASE_ANON_KEY` (pour le frontend)

## 🔍 Vérifications à faire

### 1. Vérifier que les variables sont activées pour tous les environnements

Dans la liste, vérifiez que `SUPABASE_URL` et `SUPABASE_ANON_KEY` ont le scope **"All Environments"** (Production, Preview, Development).

Si ce n'est pas le cas :
1. Cliquez sur les 3 points (⋯) à droite de la variable
2. Cliquez sur "Edit"
3. Cochez **Production**, **Preview**, et **Development**
4. Sauvegardez

### 2. Vérifier les logs Vercel pour l'erreur exacte

1. Allez dans **Deployments** → Dernier déploiement
2. Cliquez sur **Functions**
3. Cherchez `/api/progression`
4. Cliquez dessus pour voir les logs
5. Regardez les erreurs récentes

L'erreur "fetch failed" peut venir de :
- Variables d'environnement non chargées
- Valeurs incorrectes dans les variables
- Problème de connexion réseau vers Supabase
- URL Supabase mal formatée

### 3. Vérifier les valeurs des variables

Assurez-vous que :
- `SUPABASE_URL` commence par `https://` (pas `http://`)
- `SUPABASE_ANON_KEY` est bien la clé anonyme (commence souvent par `eyJ...`)

### 4. Redéployer après vérification

Après avoir vérifié/corrigé les variables, **redéployez** :
- Deployments → 3 points (⋯) → **Redeploy**

## 📋 Partagez

Dites-moi :
1. Les variables sont-elles activées pour "All Environments" ?
2. Que voyez-vous dans les logs de la fonction `/api/progression` ?
3. L'URL Supabase commence-t-elle bien par `https://` ?
