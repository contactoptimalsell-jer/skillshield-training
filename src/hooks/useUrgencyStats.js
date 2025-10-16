import { useState, useEffect } from 'react';

export function useUrgencyStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrgencyStats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/data/urgency-stats.json');
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error('Erreur chargement urgency stats:', err);
        setError(err.message);
        
        // Fallback avec données par défaut
        setStats({
          lastUpdate: new Date().toISOString(),
          stats: [
            {
              id: 'jobs-eliminated',
              value: 77999,
              label: 'emplois tech éliminés par l\'IA en 2025',
              source: 'Layoffs.fyi & TechCrunch Analysis',
              sourceUrl: 'https://layoffs.fyi',
              year: '2025',
              color: 'red',
              icon: 'AlertTriangle'
            },
            {
              id: 'skills-obsolete',
              value: 39,
              unit: '%',
              label: 'des compétences deviendront obsolètes d\'ici 2027',
              source: 'World Economic Forum',
              sourceUrl: 'https://www.weforum.org/publications/future-of-jobs-report-2025/',
              year: '2025',
              color: 'orange',
              icon: 'TrendingDown'
            },
            {
              id: 'jobs-transformed',
              value: 50,
              unit: '%',
              label: 'des métiers transformés d\'ici 2027',
              source: 'McKinsey Global Institute',
              sourceUrl: 'https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america',
              year: '2025',
              color: 'yellow',
              icon: 'RefreshCw'
            },
            {
              id: 'adaptation-time',
              value: 6,
              unit: 'mois',
              label: 'temps moyen d\'adaptation aux changements IA',
              source: 'LinkedIn Learning Report',
              sourceUrl: 'https://learning.linkedin.com/resources/workplace-learning-report',
              year: '2025',
              color: 'cyan',
              icon: 'Clock'
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUrgencyStats();
  }, []);

  return { stats, loading, error };
}

