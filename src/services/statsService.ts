/**
 * Service de collecte et calcul des statistiques dynamiques SkillShield
 * Sources : arXiv, NewsAPI, GitHub, Google Trends
 */

interface StatsData {
  scoreIA: number;
  alertes: number;
  progression: number;
  date: string;
  rawData: {
    arxiv: number;
    news: number;
    github: number;
    trends?: number;
  };
}

interface ArxivResponse {
  feed: {
    entry: Array<{
      published: string;
      title: string;
      category: Array<{ term: string }>;
    }>;
  };
}

interface NewsResponse {
  totalResults: number;
  articles: Array<{
    title: string;
    description: string;
    publishedAt: string;
    source: { name: string };
  }>;
}

interface GitHubResponse {
  total_count: number;
  items: Array<{
    name: string;
    stargazers_count: number;
    created_at: string;
  }>;
}

class StatsService {
  private readonly NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  private readonly GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  
  /**
   * Collecte toutes les données et calcule le score IA
   */
  async collectAllStats(): Promise<StatsData> {
    try {
      console.log('🔍 Collecte des statistiques...');
      
      // Collecte en parallèle pour optimiser les performances
      const [arxivData, newsData, githubData] = await Promise.all([
        this.fetchArxivData(),
        this.fetchNewsData(),
        this.fetchGitHubData()
      ]);

      // Calcul du score IA basé sur les données collectées
      const scoreIA = this.calculateAIScore({
        arxiv: arxivData,
        news: newsData.totalResults,
        github: githubData.total_count
      });

      // Calcul de la progression (simulation pour le MVP)
      const progression = this.calculateProgression(scoreIA);

      const statsData: StatsData = {
        scoreIA: Math.round(scoreIA),
        alertes: Math.min(newsData.totalResults, 99), // Limite à 99 pour l'affichage
        progression,
        date: new Date().toISOString().split('T')[0],
        rawData: {
          arxiv: arxivData,
          news: newsData.totalResults,
          github: githubData.total_count
        }
      };

      console.log('✅ Statistiques collectées:', statsData);
      return statsData;

    } catch (error) {
      console.error('❌ Erreur lors de la collecte des stats:', error);
      // Retourner des données par défaut en cas d'erreur
      return this.getDefaultStats();
    }
  }

  /**
   * Récupère les données arXiv (publications IA récentes)
   * Utilise un proxy API pour contourner CORS
   */
  private async fetchArxivData(): Promise<number> {
    try {
      // Utiliser le proxy API au lieu de l'URL directe (problème CORS)
      const response = await fetch(
        '/api/arxiv-proxy?search_query=cat:cs.AI&start=0&max_results=100&sortBy=submittedDate&sortOrder=descending'
      );
      
      if (!response.ok) {
        throw new Error(`arXiv API error: ${response.status}`);
      }

      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      
      // Compter les publications de cette semaine
      const entries = xmlDoc.querySelectorAll('entry');
      const thisWeekCount = Array.from(entries).filter(entry => {
        const published = entry.querySelector('published')?.textContent;
        if (!published) return false;
        
        const pubDate = new Date(published);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        
        return pubDate > weekAgo;
      }).length;

      console.log(`📚 arXiv: ${thisWeekCount} publications IA cette semaine`);
      return thisWeekCount;

    } catch (error) {
      console.error('Erreur arXiv:', error);
      return 25; // Valeur par défaut
    }
  }

  /**
   * Récupère les actualités IA depuis NewsAPI
   */
  private async fetchNewsData(): Promise<NewsResponse> {
    try {
      if (!this.NEWS_API_KEY) {
        console.warn('⚠️ NewsAPI key manquante, utilisation de données simulées');
        return this.getSimulatedNewsData();
      }

      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      const fromDate = lastWeek.toISOString().split('T')[0];

      const response = await fetch(
        `https://newsapi.org/v2/everything?q=AI+automation+jobs&from=${fromDate}&sortBy=publishedAt&apiKey=${this.NEWS_API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`NewsAPI error: ${response.status}`);
      }

      const data: NewsResponse = await response.json();
      console.log(`📰 NewsAPI: ${data.totalResults} articles IA trouvés`);
      
      return data;

    } catch (error) {
      console.error('Erreur NewsAPI:', error);
      return this.getSimulatedNewsData();
    }
  }

  /**
   * Récupère l'activité GitHub (repositories IA)
   */
  private async fetchGitHubData(): Promise<GitHubResponse> {
    try {
      if (!this.GITHUB_TOKEN) {
        console.warn('⚠️ GitHub token manquant, utilisation de données simulées');
        return this.getSimulatedGitHubData();
      }

      const thisMonth = new Date();
      thisMonth.setMonth(thisMonth.getMonth() - 1);
      const sinceDate = thisMonth.toISOString().split('T')[0];

      const response = await fetch(
        `https://api.github.com/search/repositories?q=artificial+intelligence+created:>${sinceDate}&sort=stars`,
        {
          headers: {
            'Authorization': `token ${this.GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data: GitHubResponse = await response.json();
      console.log(`💻 GitHub: ${data.total_count} repos IA créés ce mois`);
      
      return data;

    } catch (error) {
      console.error('Erreur GitHub:', error);
      return this.getSimulatedGitHubData();
    }
  }

  /**
   * Calcule le score IA basé sur les données collectées (0-100)
   */
  private calculateAIScore(data: { arxiv: number; news: number; github: number }): number {
    // Formule pondérée basée sur l'activité IA
    const arxivWeight = 0.4;  // 40% - Publications scientifiques
    const newsWeight = 0.3;   // 30% - Actualités automation
    const githubWeight = 0.3; // 30% - Développement open source

    // Normalisation des données (0-100)
    const normalizedArxiv = Math.min((data.arxiv / 100) * 100, 100);
    const normalizedNews = Math.min((data.news / 50) * 100, 100);
    const normalizedGithub = Math.min((data.github / 200) * 100, 100);

    const totalScore = 
      (normalizedArxiv * arxivWeight) +
      (normalizedNews * newsWeight) +
      (normalizedGithub * githubWeight);

    return Math.max(0, Math.min(100, totalScore));
  }

  /**
   * Calcule la progression hebdomadaire (simulation pour MVP)
   */
  private calculateProgression(currentScore: number): number {
    // Simulation basée sur la variabilité du score
    const baseProgression = (Math.random() - 0.5) * 20; // -10 à +10
    const scoreBasedProgression = (currentScore - 50) * 0.2; // Influence du score
    
    return Math.round(baseProgression + scoreBasedProgression);
  }

  /**
   * Données par défaut en cas d'erreur
   */
  private getDefaultStats(): StatsData {
    return {
      scoreIA: 67,
      alertes: 3,
      progression: 12,
      date: new Date().toISOString().split('T')[0],
      rawData: {
        arxiv: 25,
        news: 3,
        github: 45
      }
    };
  }

  /**
   * Données simulées pour NewsAPI
   */
  private getSimulatedNewsData(): NewsResponse {
    return {
      totalResults: Math.floor(Math.random() * 20) + 1, // 1-20 articles
      articles: []
    };
  }

  /**
   * Données simulées pour GitHub
   */
  private getSimulatedGitHubData(): GitHubResponse {
    return {
      total_count: Math.floor(Math.random() * 100) + 20, // 20-120 repos
      items: []
    };
  }

  /**
   * Sauvegarde les statistiques (pour usage futur avec base de données)
   */
  async saveStats(stats: StatsData): Promise<void> {
    try {
      // Pour l'instant, on stocke dans localStorage
      const existingStats = this.getStoredStats();
      existingStats.push(stats);
      
      // Garder seulement les 30 derniers jours
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const filteredStats = existingStats.filter(stat => 
        new Date(stat.date) > thirtyDaysAgo
      );

      localStorage.setItem('skillshield-stats', JSON.stringify(filteredStats));
      console.log('💾 Statistiques sauvegardées');

    } catch (error) {
      console.error('Erreur sauvegarde stats:', error);
    }
  }

  /**
   * Récupère les statistiques stockées
   */
  getStoredStats(): StatsData[] {
    try {
      const stored = localStorage.getItem('skillshield-stats');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Erreur lecture stats:', error);
      return [];
    }
  }

  /**
   * Récupère les dernières statistiques
   */
  getLatestStats(): StatsData | null {
    const stats = this.getStoredStats();
    return stats.length > 0 ? stats[stats.length - 1] : null;
  }

  /**
   * Calcule l'historique de progression
   */
  getProgressionHistory(days: number = 7): number[] {
    const stats = this.getStoredStats();
    const recentStats = stats.slice(-days);
    
    if (recentStats.length < 2) return [0];
    
    return recentStats.map((stat, index) => {
      if (index === 0) return 0;
      const previous = recentStats[index - 1];
      return Math.round(((stat.scoreIA - previous.scoreIA) / previous.scoreIA) * 100);
    });
  }
}

// Instance singleton
export const statsService = new StatsService();

// Export des types pour usage externe
export type { StatsData };

