import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class CalculatorErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Calculator Error:', error, errorInfo);
  }

  private handleRetry = () => {
    // Essayer de récupérer les données depuis le localStorage
    const savedData = localStorage.getItem('skillshield-last-calculation');
    
    if (savedData) {
      try {
        const { answers, result } = JSON.parse(savedData);
        // Rediriger vers la page de résultats avec les données sauvegardées
        window.location.href = `/results?data=${encodeURIComponent(JSON.stringify({ answers, result }))}`;
      } catch (e) {
        console.error('Erreur lors de la récupération des données:', e);
        window.location.reload();
      }
    } else {
      // Si pas de données sauvegardées, rediriger vers la calculatrice
      window.location.href = '/calculator';
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center max-w-md">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Oups ! Une erreur s'est produite
            </h2>
            <p className="text-gray-300 mb-6">
              Le calculateur rencontre un problème technique. 
              <br />
              Vos résultats ont été sauvegardés.
            </p>
            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition font-semibold"
              >
                Voir mes résultats
              </button>
              <button
                onClick={() => window.location.href = '/calculator'}
                className="w-full px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition font-semibold"
              >
                Recommencer le test
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
