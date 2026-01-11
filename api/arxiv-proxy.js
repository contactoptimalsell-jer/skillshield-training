/**
 * ============================================================================
 * API ROUTE : PROXY ARXIV API
 * ============================================================================
 *
 * Route : /api/arxiv-proxy
 * Méthode : GET
 *
 * Problème : L'API ArXiv ne supporte pas CORS depuis le navigateur
 * Solution : Proxy côté serveur pour contourner CORS
 *
 * ============================================================================
 */

export default async function handler(req, res) {
  // Seulement GET autorisé
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Paramètres de requête (par défaut : recherche IA)
    const searchQuery = req.query.search_query || 'cat:cs.AI'
    const start = req.query.start || '0'
    const maxResults = req.query.max_results || '100'
    const sortBy = req.query.sortBy || 'submittedDate'
    const sortOrder = req.query.sortOrder || 'descending'

    // Construire l'URL ArXiv
    // Utiliser HTTPS si disponible, sinon HTTP
    const arxivUrl = `https://export.arxiv.org/api/query?search_query=${encodeURIComponent(searchQuery)}&start=${start}&max_results=${maxResults}&sortBy=${sortBy}&sortOrder=${sortOrder}`

    // Faire la requête depuis le serveur (pas de problème CORS)
    const response = await fetch(arxivUrl, {
      headers: {
        'User-Agent': 'SkillShield/1.0 (https://skillshield-ai.com)',
      },
    })

    if (!response.ok) {
      throw new Error(`ArXiv API error: ${response.status}`)
    }

    // Récupérer le XML
    const xmlText = await response.text()

    // Retourner le XML avec les bons headers
    res.setHeader('Content-Type', 'application/xml; charset=utf-8')
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    res.status(200).send(xmlText)

  } catch (error) {
    console.error('Erreur ArXiv proxy:', error)
    res.status(500).json({ 
      error: 'Failed to fetch ArXiv data',
      message: error.message 
    })
  }
}
