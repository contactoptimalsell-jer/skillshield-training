// Exemple d'intégration du hook useSubmitAssessment dans un composant de formulaire
import React, { useState } from 'react';
import { useSubmitAssessment } from './src/hooks/useSubmitAssessment';

function CalculatorForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    answers: {
      job: '',
      experience: 0,
      sector: '',
      // ... autres champs du questionnaire
    }
  });

  const [calculatedScore, setCalculatedScore] = useState(0);
  const [calculatedBreakdown, setCalculatedBreakdown] = useState({});

  // Utiliser le hook personnalisé
  const { submitAssessment, submitting, submitted, error, reset } = useSubmitAssessment();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.firstName) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    try {
      await submitAssessment({
        email: formData.email,
        firstName: formData.firstName,
        score: calculatedScore,
        answers: formData.answers,
        breakdown: calculatedBreakdown,
      });
    } catch (error) {
      // L'erreur est déjà gérée dans le hook
      console.error('Erreur de soumission:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAnswerChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [field]: value
      }
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        🧮 Calculateur de Risque IA
      </h2>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Champ Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            📧 Adresse Email *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="votre@email.com"
            required
          />
        </div>

        {/* Champ Prénom */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            👤 Prénom *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Votre prénom"
            required
          />
        </div>

        {/* Champ Métier */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            💼 Votre métier
          </label>
          <select
            value={formData.answers.job}
            onChange={(e) => handleAnswerChange('job', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sélectionnez votre métier</option>
            <option value="data-scientist">Data Scientist</option>
            <option value="developer">Développeur</option>
            <option value="designer">Designer</option>
            <option value="marketing">Marketing</option>
            {/* ... autres options */}
          </select>
        </div>

        {/* Champ Expérience */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ⏰ Années d'expérience
          </label>
          <input
            type="number"
            min="0"
            max="50"
            value={formData.answers.experience}
            onChange={(e) => handleAnswerChange('experience', parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0"
          />
        </div>

        {/* Affichage du score calculé */}
        {calculatedScore > 0 && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900">📊 Score de Risque IA</h3>
            <div className="text-3xl font-bold text-blue-600">
              {calculatedScore}%
            </div>
            <div className="text-sm text-blue-700">
              {calculatedScore < 30 ? 'Risque Faible' :
               calculatedScore < 50 ? 'Risque Modéré' :
               calculatedScore < 70 ? 'Risque Élevé' : 'Risque Critique'}
            </div>
          </div>
        )}

        {/* Affichage des erreurs */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <span className="text-red-600">❌</span>
              <span className="ml-2 text-red-700">{error}</span>
            </div>
          </div>
        )}

        {/* Boutons d'action */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => {
              // Simulation du calcul du score
              const mockScore = Math.floor(Math.random() * 100);
              const mockBreakdown = {
                baseJob: Math.floor(mockScore * 0.4),
                experience: Math.floor(mockScore * 0.2),
                sector: Math.floor(mockScore * 0.2),
                other: Math.floor(mockScore * 0.2)
              };
              
              setCalculatedScore(mockScore);
              setCalculatedBreakdown(mockBreakdown);
              reset(); // Réinitialiser les états d'erreur
            }}
            className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
          >
            🧮 Calculer mon score
          </button>

          <button
            type="submit"
            disabled={submitting || calculatedScore === 0}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {submitting ? (
              <>
                <span className="animate-spin">⏳</span>
                Envoi en cours...
              </>
            ) : (
              <>
                📧 Envoyer mon rapport
              </>
            )}
          </button>
        </div>

        {/* Message de succès */}
        {submitted && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <span className="text-green-600">✅</span>
              <span className="ml-2 text-green-700">
                Rapport envoyé ! Vérifiez votre email.
              </span>
            </div>
          </div>
        )}
      </form>

      {/* Instructions */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">📋 Instructions</h3>
        <ol className="text-sm text-gray-700 space-y-1">
          <li>1. Remplissez votre email et prénom</li>
          <li>2. Sélectionnez votre métier et expérience</li>
          <li>3. Cliquez sur "Calculer mon score"</li>
          <li>4. Cliquez sur "Envoyer mon rapport"</li>
          <li>5. Vérifiez votre email pour le rapport PDF</li>
        </ol>
      </div>
    </div>
  );
}

export default CalculatorForm;

