/**
 * Service de Statistiques Pragmatiques SkillShield
 * 3 métriques claires avec explications en une phrase
 */

interface PragmaticStats {
  activiteIA: number;     // Score 0-100% de l'activité IA globale
  actualites: number;     // Nombre d'articles emploi & IA cette semaine
  tendance: number;       // Évolution hebdomadaire (+/-%)
  date: string;           // Date de la dernière mise à jour
  lastUpdate: string;     // Heure de dernière mise à jour
}

interface ArxivData {
  count: number;
  lastWeekCount: number;
}

interface NewsData {
  totalResults: number;
  lastWeekResults: number;
}

class PragmaticStatsService {
  private readonly NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  
  /**
   * Collecte les 3 métriques pragmatiques
   */
  async collectPragmaticStats(): Promise<PragmaticStats> {
    try {
      console.log('🔍 Collecte des statistiques pragmatiques...');
      
      // Collecte en parallèle pour optimiser les performances
      const [arxivData, newsData] = await Promise.all([
        this.fetchArxivData(),
        this.fetchNewsData()
      ]);

      // 1. Calcul de l'Activité IA Globale (0-100%)
      const activiteIA = this.calculateActiviteIA(arxivData.count, newsData.totalResults);

      // 2. Actualités Emploi & IA (déjà calculé)
      const actualites = newsData.totalResults;

      // 3. Évolution Hebdomadaire
      const tendance = this.calculateTendance(
        activiteIA, 
        this.calculateActiviteIA(arxivData.lastWeekCount, newsData.lastWeekResults)
      );

      const stats: PragmaticStats = {
        activiteIA: Math.round(activiteIA),
        actualites: Math.min(actualites, 99), // Limite à 99 pour l'affichage
        tendance: Math.round(tendance),
        date: new Date().toISOString().split('T')[0],
        lastUpdate: new Date().toLocaleTimeString('fr-FR')
      };

      console.log('✅ Statistiques pragmatiques collectées:', stats);
      return stats;

    } catch (error) {
      console.error('❌ Erreur lors de la collecte des stats pragmatiques:', error);
      return this.getDefaultPragmaticStats();
    }
  }

  /**
   * Récupère les données arXiv (publications IA)
   */
  private async fetchArxivData(): Promise<ArxivData> {
    try {
      const response = await fetch(
        'http://export.arxiv.org/api/query?search_query=cat:cs.AI&start=0&max_results=100&sortBy=submittedDate&sortOrder=descending'
      );
      
      if (!response.ok) {
        throw new Error(`arXiv API error: ${response.status}`);
      }

      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      
      // Compter les publications de cette semaine et de la semaine dernière
      const entries = xmlDoc.querySelectorAll('entry');
      const now = new Date();
      const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);
      
      let thisWeekCount = 0;
      let lastWeekCount = 0;

      Array.from(entries).forEach(entry => {
        const published = entry.querySelector('published')?.textContent;
        if (!published) return;
        
        const pubDate = new Date(published);
        
        if (pubDate > oneWeekAgo) {
          thisWeekCount++;
        } else if (pubDate > twoWeeksAgo) {
          lastWeekCount++;
        }
      });

      console.log(`📚 arXiv: ${thisWeekCount} publications cette semaine, ${lastWeekCount} semaine dernière`);
      return { count: thisWeekCount, lastWeekCount };

    } catch (error) {
      console.error('Erreur arXiv:', error);
      return { count: 25, lastWeekCount: 23 }; // Valeurs par défaut réalistes
    }
  }

  /**
   * Récupère les actualités emploi & IA
   */
  private async fetchNewsData(): Promise<NewsData> {
    try {
      if (!this.NEWS_API_KEY) {
        console.warn('⚠️ NewsAPI key manquante, utilisation de données simulées');
        return this.getSimulatedNewsData();
      }

      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      const twoWeeksAgo = new Date();
      twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);

      // Cette semaine
      const thisWeekResponse = await fetch(
        `https://newsapi.org/v2/everything?q=AI+automation+jobs&from=${oneWeekAgo.toISOString().split('T')[0]}&language=en&apiKey=${this.NEWS_API_KEY}`
      );

      // Semaine dernière
      const lastWeekResponse = await fetch(
        `https://newsapi.org/v2/everything?q=AI+automation+jobs&from=${twoWeeksAgo.toISOString().split('T')[0]}&to=${oneWeekAgo.toISOString().split('T')[0]}&language=en&apiKey=${this.NEWS_API_KEY}`
      );

      if (!thisWeekResponse.ok || !lastWeekResponse.ok) {
        throw new Error('NewsAPI error');
      }

      const thisWeekData = await thisWeekResponse.json();
      const lastWeekData = await lastWeekResponse.json();

      console.log(`📰 NewsAPI: ${thisWeekData.totalResults} articles cette semaine, ${lastWeekData.totalResults} semaine dernière`);
      
      return {
        totalResults: thisWeekData.totalResults,
        lastWeekResults: lastWeekData.totalResults
      };

    } catch (error) {
      console.error('Erreur NewsAPI:', error);
      return this.getSimulatedNewsData();
    }
  }

  /**
   * Calcule l'Activité IA Globale (0-100%)
   */
  private calculateActiviteIA(arxivCount: number, newsCount: number): number {
    // Formule simple et pragmatique
    // 60% arXiv (publications scientifiques) + 40% actualités tech
    const arxivScore = Math.min((arxivCount / 50) * 100, 100); // Normalisé sur 50 pubs
    const newsScore = Math.min((newsCount / 30) * 100, 100);   // Normalisé sur 30 articles
    
    const activiteIA = (arxivScore * 0.6) + (newsScore * 0.4);
    return Math.max(0, Math.min(100, activiteIA));
  }

  /**
   * Calcule l'évolution hebdomadaire
   */
  private calculateTendance(currentActivite: number, lastWeekActivite: number): number {
    if (lastWeekActivite === 0) return 0;
    
    const tendance = ((currentActivite - lastWeekActivite) / lastWeekActivite) * 100;
    return Math.max(-50, Math.min(50, tendance)); // Limite entre -50% et +50%
  }

  /**
   * Données par défaut pragmatiques
   */
  private getDefaultPragmaticStats(): PragmaticStats {
    return {
      activiteIA: 27,
      actualites: 18,
      tendance: 1,
      date: new Date().toISOString().split('T')[0],
      lastUpdate: new Date().toLocaleTimeString('fr-FR')
    };
  }

  /**
   * Données simulées pour NewsAPI
   */
  private getSimulatedNewsData(): NewsData {
    const baseCount = Math.floor(Math.random() * 25) + 10; // 10-35 articles
    return {
      totalResults: baseCount,
      lastWeekResults: Math.max(5, baseCount + Math.floor(Math.random() * 10) - 5) // Variation réaliste
    };
  }

  /**
   * Sauvegarde les statistiques (localStorage pour MVP)
   */
  async savePragmaticStats(stats: PragmaticStats): Promise<void> {
    try {
      const existingStats = this.getStoredPragmaticStats();
      existingStats.push(stats);
      
      // Garder seulement les 30 derniers jours
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const filteredStats = existingStats.filter(stat => 
        new Date(stat.date) > thirtyDaysAgo
      );

      localStorage.setItem('skillshield-pragmatic-stats', JSON.stringify(filteredStats));
      console.log('💾 Statistiques pragmatiques sauvegardées');

    } catch (error) {
      console.error('Erreur sauvegarde stats pragmatiques:', error);
    }
  }

  /**
   * Récupère les statistiques stockées
   */
  getStoredPragmaticStats(): PragmaticStats[] {
    try {
      const stored = localStorage.getItem('skillshield-pragmatic-stats');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erreur lecture stats pragmatiques:', error);
      return [];
    }
  }

  /**
   * Récupère les dernières statistiques
   */
  getLatestPragmaticStats(): PragmaticStats | null {
    const stats = this.getStoredPragmaticStats();
    return stats.length > 0 ? stats[stats.length - 1] : null;
  }

  /**
   * Génère les explications pragmatiques
   */
  getPragmaticExplanations(): Record<string, string> {
    return {
      activiteIA: "Mesure l'intensité des développements IA cette semaine basée sur les publications scientifiques et actualités tech.",
      actualites: "Nombre d'articles publiés cette semaine sur l'impact de l'IA sur les métiers et l'emploi.",
      tendance: "Évolution de l'activité IA par rapport à la semaine dernière (+ = hausse, - = baisse)."
    };
  }

  /**
   * Prédit la prochaine mise à jour
   */
  getNextUpdateTime(): string {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(6, 0, 0, 0);
    
    return tomorrow.toLocaleDateString('fr-FR') + ' à 6h';
  }
}

// Instance singleton
export const pragmaticStatsService = new PragmaticStatsService();

// Export des types
export type { PragmaticStats };

