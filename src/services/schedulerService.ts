/**
 * Service de planification pour les tâches automatiques
 * Gère la mise à jour quotidienne des nouvelles IA
 */

class SchedulerService {
  private updateInterval: NodeJS.Timeout | null = null
  private readonly UPDATE_HOUR = 9 // 9h du matin
  private readonly CHECK_INTERVAL = 60 * 60 * 1000 // Vérifier toutes les heures

  /**
   * Démarre le service de planification
   */
  start(): void {
    console.log('🚀 Démarrage du service de planification...')
    
    // Vérifier immédiatement si une mise à jour est nécessaire
    this.checkForUpdate()
    
    // Programmer les vérifications périodiques
    this.updateInterval = setInterval(() => {
      this.checkForUpdate()
    }, this.CHECK_INTERVAL)
    
    console.log('✅ Service de planification démarré')
  }

  /**
   * Arrête le service de planification
   */
  stop(): void {
    if (this.updateInterval) {
      clearInterval(this.updateInterval)
      this.updateInterval = null
      console.log('⏹️ Service de planification arrêté')
    }
  }

  /**
   * Vérifie s'il faut effectuer une mise à jour
   */
  private checkForUpdate(): void {
    const now = new Date()
    const hour = now.getHours()
    const lastUpdate = this.getLastUpdateTime()
    
    // Vérifier si c'est l'heure de mise à jour et qu'on n'a pas déjà mis à jour aujourd'hui
    if (hour >= this.UPDATE_HOUR && this.shouldUpdate(lastUpdate)) {
      console.log('🔄 Déclenchement de la mise à jour automatique des nouvelles IA...')
      this.triggerNewsUpdate()
      this.setLastUpdateTime(now)
    }
  }

  /**
   * Détermine si une mise à jour est nécessaire
   */
  private shouldUpdate(lastUpdate: Date | null): boolean {
    if (!lastUpdate) return true
    
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const lastUpdateDate = new Date(lastUpdate.getFullYear(), lastUpdate.getMonth(), lastUpdate.getDate())
    
    return lastUpdateDate < today
  }

  /**
   * Déclenche la mise à jour des nouvelles
   */
  private async triggerNewsUpdate(): Promise<void> {
    try {
      // Import dynamique pour éviter les dépendances circulaires
      const { aiNewsService } = await import('./aiNewsService')
      
      // Forcer la mise à jour (ignore le cache)
      await aiNewsService.refreshNews()
      
      console.log('✅ Mise à jour automatique des nouvelles IA terminée')
      
      // Déclencher un événement personnalisé pour notifier les composants
      window.dispatchEvent(new CustomEvent('aiNewsUpdated', {
        detail: { timestamp: new Date().toISOString() }
      }))
      
    } catch (error) {
      console.error('❌ Erreur lors de la mise à jour automatique:', error)
    }
  }

  /**
   * Récupère la dernière heure de mise à jour depuis le localStorage
   */
  private getLastUpdateTime(): Date | null {
    try {
      const timestamp = localStorage.getItem('skillshield_last_news_update')
      return timestamp ? new Date(timestamp) : null
    } catch {
      return null
    }
  }

  /**
   * Sauvegarde l'heure de dernière mise à jour
   */
  private setLastUpdateTime(date: Date): void {
    try {
      localStorage.setItem('skillshield_last_news_update', date.toISOString())
    } catch (error) {
      console.warn('Impossible de sauvegarder l\'heure de mise à jour:', error)
    }
  }

  /**
   * Force une mise à jour immédiate (pour les tests)
   */
  async forceUpdate(): Promise<void> {
    console.log('🔄 Mise à jour forcée des nouvelles IA...')
    await this.triggerNewsUpdate()
    this.setLastUpdateTime(new Date())
  }

  /**
   * Obtient les informations sur la prochaine mise à jour
   */
  getNextUpdateInfo(): { nextUpdate: Date; timeUntilUpdate: number } {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), this.UPDATE_HOUR, 0, 0)
    
    // Si l'heure de mise à jour est déjà passée aujourd'hui, programmer pour demain
    if (now >= today) {
      today.setDate(today.getDate() + 1)
    }
    
    const timeUntilUpdate = today.getTime() - now.getTime()
    
    return {
      nextUpdate: today,
      timeUntilUpdate
    }
  }
}

export const schedulerService = new SchedulerService()

// Démarrer automatiquement le service quand le module est importé
if (typeof window !== 'undefined') {
  schedulerService.start()
}

