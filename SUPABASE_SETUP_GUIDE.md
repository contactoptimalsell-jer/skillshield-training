# 🗄️ **Configuration Supabase - SkillShield**

## ✅ **Fichier .env.local Créé**

Le fichier `.env.local` a été créé avec succès à la racine du projet avec vos clés :

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://jkdsepbnigcztrfcwkpj.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Resend (pour l'envoi d'emails)
RESEND_API_KEY=re_E4Fj9Jkc_5qn9RY2v5cuAgUPd5aUXseUo
RESEND_FROM_EMAIL=onboarding@resend.dev
```

## 🚨 **Action Requise : Configuration Supabase**

### **1. Accéder à Supabase :**
- 🌐 Allez sur : https://supabase.com/dashboard
- 🔐 Connectez-vous à votre compte
- 📊 Sélectionnez votre projet : `jkdsepbnigcztrfcwkpj`

### **2. Exécuter le Script SQL :**
1. 📝 Cliquez sur **"SQL Editor"** dans le menu de gauche
2. ➕ Cliquez **"New Query"**
3. 📋 Copiez-collez le contenu du fichier `supabase-setup.sql`
4. ▶️ Cliquez **"Run"** pour exécuter le script

### **3. Vérifier la Configuration :**
Après exécution, vous devriez voir :
- ✅ Table `risk_assessments` créée
- ✅ Index créés
- ✅ Politiques RLS configurées
- ✅ Message : "Table risk_assessments créée avec succès!"

## 🧪 **Test de la Configuration :**

### **Test 1 : Vérifier la Table**
```sql
SELECT * FROM risk_assessments LIMIT 1;
```

### **Test 2 : Vérifier les Politiques**
```sql
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'risk_assessments';
```

## 🔧 **Configuration des Politiques RLS :**

Si les politiques ne fonctionnent pas, exécutez manuellement :

```sql
-- Activer RLS
ALTER TABLE risk_assessments ENABLE ROW LEVEL SECURITY;

-- Politique d'insertion publique
CREATE POLICY "Allow public insert" ON risk_assessments
  FOR INSERT
  WITH CHECK (true);

-- Politique de lecture publique
CREATE POLICY "Allow public read by id" ON risk_assessments
  FOR SELECT
  USING (true);
```

## 🚀 **Test Final :**

Une fois Supabase configuré, testez avec :

```bash
curl -X POST http://localhost:3001/api/submit-assessment \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "Test",
    "score": 50,
    "riskLevel": "Modéré",
    "answers": {"firstName": "Test"},
    "breakdown": {"baseJob": 20}
  }'
```

**Réponse attendue :**
```json
{
  "success": true,
  "assessmentId": "uuid-here",
  "emailSent": true,
  "messageId": "resend-message-id"
}
```

## 📊 **Variables d'Environnement Chargées :**

✅ **RESEND_API_KEY** : Trouvée  
✅ **RESEND_FROM_EMAIL** : onboarding@resend.dev  
✅ **VITE_SUPABASE_URL** : https://jkdsepbnigcztrfcwkpj.supabase.co  
✅ **VITE_SUPABASE_ANON_KEY** : Trouvée  

## 🎯 **Prochaines Étapes :**

1. ⚙️ **Configurer Supabase** (script SQL)
2. 🧪 **Tester l'API** complète
3. 📧 **Tester l'envoi d'emails**
4. 🎉 **Lancer le système complet**

## 🔍 **Dépannage :**

### **Erreur : "Could not find the table"**
→ Exécuter le script SQL dans Supabase

### **Erreur : "row-level security policy"**
→ Vérifier que les politiques RLS sont créées

### **Erreur : "Invalid API key"**
→ Vérifier les clés dans `.env.local`

---

**🎯 Une fois Supabase configuré, votre système sera entièrement opérationnel !**

