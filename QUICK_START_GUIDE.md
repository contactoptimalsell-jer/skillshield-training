# 🚀 Guide de Démarrage Rapide - SkillShield

## ✅ **STATUT ACTUEL**

- ✅ Serveur email : **FONCTIONNE** (port 3001)
- ✅ API email : **FONCTIONNE** (test réussi)
- ✅ Application : **DÉMARRÉE** (port 5173)

## 🌐 **ACCÈS À L'APPLICATION**

1. **Ouvrir votre navigateur**
2. **Aller sur** : `http://localhost:5173`
3. **Tester le calculateur** : `http://localhost:5173/calculator`

## 📧 **TESTER L'ENVOI D'EMAIL**

1. **Compléter le calculateur** jusqu'à la fin
2. **Cliquer sur "Envoyer mon rapport gratuit"**
3. **Entrer votre email** (ex: klanbicoc@gmail.com)
4. **Cliquer "Envoyer mon rapport gratuit"**

## 🎯 **RÉSULTAT ATTENDU**

**Vous devriez recevoir un email magnifique dans votre boîte mail !**

L'email contient :
- ✅ Design premium SkillShield
- ✅ Votre prénom personnalisé
- ✅ Score de risque coloré
- ✅ Message émotionnel persuasif
- ✅ Bouton CTA vers la waitlist

## 🔧 **SI ÇA NE MARCHE PAS**

1. **Vider le cache du navigateur** (Ctrl+Shift+R ou Cmd+Shift+R)
2. **Ouvrir les DevTools** (F12) pour voir les erreurs
3. **Vérifier que les deux serveurs fonctionnent** :
   - Serveur email : `http://localhost:3001/health`
   - Application : `http://localhost:5173`

## 📱 **COMMANDES UTILES**

```bash
# Vérifier le serveur email
curl http://localhost:3001/health

# Tester l'API email directement
curl -X POST http://localhost:3001/api/send-report-with-pdf \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","firstName":"Test","score":50,"answers":{},"breakdown":{}}'

# Redémarrer le serveur email
npm run email-server

# Redémarrer l'application
npm run dev
```

## 🎉 **TOUT EST PRÊT !**

**L'application fonctionne parfaitement. Vous pouvez maintenant tester le calculateur et recevoir vos emails !** 🚀

**Allez sur** : `http://localhost:5173/calculator`

