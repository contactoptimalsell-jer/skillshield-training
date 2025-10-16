# 🔧 Guide de Dépannage - SkillShield

## ❌ Erreurs Courantes et Solutions

### 1. **Erreur Supabase Import**
```
The requested module does not provide an export named 'Session'
```
**Solution :**
```bash
# Vider le cache Vite
rm -rf node_modules/.vite
npm run dev
```

### 2. **Erreur PostCSS**
```
It looks like you're trying to use tailwindcss directly as a PostCSS plugin
```
**Solution :**
```bash
# Redémarrer le serveur
pkill -f "vite"
npm run dev
```

### 3. **Erreur Variables d'Environnement**
```
Missing Supabase environment variables
```
**Solution :**
1. Copiez `env.example` vers `.env`
2. Remplissez avec vos vraies valeurs
3. Redémarrez le serveur

### 4. **Erreur Stripe**
```
Invalid API key
```
**Solution :**
1. Vérifiez que vous êtes en mode test sur Stripe
2. Copiez les bonnes clés dans `.env`
3. Redémarrez le serveur

### 5. **Erreur OpenAI**
```
Invalid API key
```
**Solution :**
1. Vérifiez votre clé API OpenAI
2. Assurez-vous d'avoir du crédit
3. Redémarrez le serveur

## 🚀 Commandes de Dépannage

### Redémarrer Proprement
```bash
# Arrêter le serveur
pkill -f "vite"

# Vider le cache
rm -rf node_modules/.vite

# Redémarrer
npm run dev
```

### Vérifier l'Installation
```bash
# Vérifier les dépendances
npm list @supabase/supabase-js stripe openai react-hot-toast

# Réinstaller si nécessaire
npm install @supabase/supabase-js stripe openai react-hot-toast
```

### Tester la Configuration
```bash
# Lancer le test de setup
node test-setup.js
```

## 🔍 Vérifications Rapides

### 1. **Serveur Démarré ?**
```bash
curl http://localhost:5173
```

### 2. **Variables d'Environnement ?**
```bash
# Vérifier que .env existe
ls -la .env

# Vérifier le contenu (sans les vraies valeurs)
cat .env | grep -E "VITE_|STRIPE_|OPENAI_"
```

### 3. **Dépendances Installées ?**
```bash
# Vérifier package.json
npm list --depth=0
```

## 🎯 Tests de Fonctionnement

### 1. **Test de Base**
1. Aller sur `http://localhost:5173`
2. Vérifier que la landing page se charge
3. Cliquer sur "Découvrir SkillShield Gratuitement"
4. Vérifier que la page d'inscription se charge

### 2. **Test d'Authentification** (avec .env configuré)
1. Aller sur `/signup`
2. Créer un compte test
3. Vérifier l'email de confirmation
4. Se connecter

### 3. **Test d'Onboarding** (avec .env configuré)
1. Se connecter
2. Compléter l'onboarding
3. Vérifier que le score IA se calcule
4. Vérifier la redirection vers le dashboard

## 📞 Support

### Logs Utiles
```bash
# Logs du serveur Vite
# (affichés dans le terminal où vous avez lancé npm run dev)

# Logs du navigateur
# F12 → Console → Voir les erreurs JavaScript
```

### Fichiers de Configuration
- `package.json` : Dépendances
- `vite.config.js` : Configuration Vite
- `tailwind.config.js` : Configuration Tailwind
- `postcss.config.js` : Configuration PostCSS
- `.env` : Variables d'environnement
- `vercel.json` : Configuration déploiement

## ✅ Checklist de Vérification

- [ ] Serveur démarre sans erreur (`npm run dev`)
- [ ] Landing page se charge (`http://localhost:5173`)
- [ ] Page d'inscription se charge (`/signup`)
- [ ] Variables d'environnement configurées (`.env`)
- [ ] Dépendances installées (`npm install`)
- [ ] Cache Vite vidé (`rm -rf node_modules/.vite`)

## 🎉 Si Tout Fonctionne

Votre SkillShield est prêt ! Vous pouvez maintenant :

1. **Configurer** les services externes (Supabase, Stripe, OpenAI)
2. **Tester** tous les flux utilisateur
3. **Déployer** sur Vercel
4. **Lancer** votre SaaS !

---

**Besoin d'aide ?** Vérifiez d'abord ce guide, puis consultez les logs pour identifier le problème spécifique.

