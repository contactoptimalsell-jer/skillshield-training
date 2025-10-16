// Test de connexion Supabase
const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env.local') });

console.log('🧪 Test de connexion Supabase...');

// Vérifier les variables d'environnement
console.log('\n🔑 Variables d\'environnement :');
console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Trouvée' : 'Manquante');
console.log('SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Trouvée' : 'Manquante');

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.error('❌ Variables d\'environnement manquantes !');
  console.log('🔍 Variables disponibles:', Object.keys(process.env).filter(k => k.includes('SUPABASE')));
  process.exit(1);
}

// Initialiser Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testSupabase() {
  try {
    console.log('\n📊 Test de connexion à la table...');
    
    // Test 1: Vérifier que la table existe
    const { data, error } = await supabase
      .from('risk_assessments')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ Erreur de connexion:', error.message);
      
      if (error.message.includes('Could not find the table')) {
        console.log('\n🔧 Solution : Exécuter le script SQL dans Supabase :');
        console.log('1. Allez sur https://supabase.com/dashboard');
        console.log('2. Sélectionnez votre projet');
        console.log('3. Cliquez "SQL Editor"');
        console.log('4. Copiez-collez le contenu de supabase-setup.sql');
        console.log('5. Cliquez "Run"');
      } else if (error.message.includes('row-level security policy')) {
        console.log('\n🔧 Solution : Configurer les politiques RLS dans Supabase');
      }
      
      return;
    }

    console.log('✅ Connexion à la table réussie !');
    console.log('📊 Données trouvées :', data?.length || 0, 'enregistrements');

    // Test 2: Test d'insertion
    console.log('\n📝 Test d\'insertion...');
    const testData = {
      email: 'test-connection@example.com',
      first_name: 'Test Connection',
      score: 50,
      risk_level: 'Modéré',
      answers: { test: true },
      breakdown: { test: 50 }
    };

    const { data: insertData, error: insertError } = await supabase
      .from('risk_assessments')
      .insert([testData])
      .select();

    if (insertError) {
      console.error('❌ Erreur d\'insertion:', insertError.message);
      return;
    }

    console.log('✅ Insertion réussie ! ID:', insertData[0].id);

    // Test 3: Test de lecture
    console.log('\n📖 Test de lecture...');
    const { data: readData, error: readError } = await supabase
      .from('risk_assessments')
      .select('*')
      .eq('id', insertData[0].id)
      .single();

    if (readError) {
      console.error('❌ Erreur de lecture:', readError.message);
      return;
    }

    console.log('✅ Lecture réussie ! Données:', readData.first_name, readData.score + '%');

    // Nettoyage (optionnel)
    console.log('\n🧹 Nettoyage...');
    await supabase
      .from('risk_assessments')
      .delete()
      .eq('id', insertData[0].id);

    console.log('✅ Test Supabase complet et réussi !');
    console.log('🎯 Votre base de données est prête pour SkillShield !');

  } catch (err) {
    console.error('💥 Erreur inattendue:', err);
  }
}

testSupabase();
