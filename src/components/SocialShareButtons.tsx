import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  MessageCircle, 
  Link as LinkIcon,
  Check,
  Share2 
} from 'lucide-react';

interface SocialShareButtonsProps {
  score: number;
  firstName?: string;
  job?: string;
  sector?: string;
}

export function SocialShareButtons({ score, firstName = 'Utilisateur', job, sector }: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  
  // URL à partager (page calculateur)
  const shareUrl = 'http://localhost:5173/calculator';
  
  // Message personnalisé selon le score
  const getMessage = () => {
    if (score >= 70) {
      return `Je viens de découvrir que mon métier a un risque de ${score}% d'être impacté par l'IA 😱 Et vous ? Faites le test gratuit !`;
    } else if (score >= 50) {
      return `Mon score de risque IA : ${score}%. Pas critique, mais je préfère anticiper ! 🎯 Calculez le vôtre gratuitement`;
    } else {
      return `Score de risque IA : ${score}% ✅ Mon métier est plutôt protégé, mais je reste vigilant ! Et vous ?`;
    }
  };

  const message = getMessage();
  const fullMessage = `${message}\n\n👉 ${shareUrl}`;

  // LinkedIn
  const shareLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=600');
    
    // Analytics (optionnel)
    trackShare('linkedin', score);
  };

  // Twitter/X
  const shareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(shareUrl)}&hashtags=IA,Carriere,SkillShield`;
    window.open(twitterUrl, '_blank', 'width=600,height=600');
    
    trackShare('twitter', score);
  };

  // Facebook
  const shareFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(message)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=600');
    
    trackShare('facebook', score);
  };

  // WhatsApp
  const shareWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    trackShare('whatsapp', score);
  };

  // Email
  const shareEmail = () => {
    const subject = `Mon score de risque IA : ${score}%`;
    const body = `${message}\n\nFaites le test ici : ${shareUrl}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    trackShare('email', score);
  };

  // Copier le lien
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      trackShare('copy-link', score);
    } catch (err) {
      console.error('Erreur copie:', err);
    }
  };

  // Analytics tracking (fonction à implémenter selon votre solution)
  const trackShare = (platform: string, score: number) => {
    // Google Analytics, Plausible, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'share', {
        method: platform,
        content_type: 'calculator_result',
        score: score
      });
    }
    
    // Console log pour debug
    console.log(`📤 Partage ${platform} pour score ${score}%`);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-gray-400 mb-2">
          <Share2 className="w-5 h-5" />
          <span className="text-sm font-medium">Partager vos résultats</span>
        </div>
        <p className="text-gray-500 text-xs">
          Aidez vos proches à découvrir leur risque IA
        </p>
      </div>

      {/* Boutons principaux (LinkedIn, Twitter, Facebook) */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* LinkedIn */}
        <motion.button
          onClick={shareLinkedIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex flex-col items-center gap-3 p-6 bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-xl hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-[#0A66C2]/20 flex items-center justify-center group-hover:bg-[#0A66C2]/30 transition">
            <Linkedin className="w-6 h-6 text-[#0A66C2]" />
          </div>
          <span className="text-sm font-semibold text-white">LinkedIn</span>
          <div className="absolute inset-0 rounded-xl bg-[#0A66C2]/0 group-hover:bg-[#0A66C2]/5 transition"></div>
        </motion.button>

        {/* Twitter/X */}
        <motion.button
          onClick={shareTwitter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex flex-col items-center gap-3 p-6 bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-xl hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center group-hover:bg-[#1DA1F2]/30 transition">
            <Twitter className="w-6 h-6 text-[#1DA1F2]" />
          </div>
          <span className="text-sm font-semibold text-white">Twitter</span>
          <div className="absolute inset-0 rounded-xl bg-[#1DA1F2]/0 group-hover:bg-[#1DA1F2]/5 transition"></div>
        </motion.button>

        {/* Facebook */}
        <motion.button
          onClick={shareFacebook}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex flex-col items-center gap-3 p-6 bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-xl hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-[#1877F2]/20 flex items-center justify-center group-hover:bg-[#1877F2]/30 transition">
            <Facebook className="w-6 h-6 text-[#1877F2]" />
          </div>
          <span className="text-sm font-semibold text-white">Facebook</span>
          <div className="absolute inset-0 rounded-xl bg-[#1877F2]/0 group-hover:bg-[#1877F2]/5 transition"></div>
        </motion.button>
      </div>

      {/* Boutons secondaires (WhatsApp, Email, Copier) */}
      <div className="grid grid-cols-3 gap-3">
        {/* WhatsApp */}
        <motion.button
          onClick={shareWhatsApp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-[#25D366] hover:bg-[#25D366]/10 transition text-sm text-gray-300 hover:text-[#25D366]"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </motion.button>

        {/* Email */}
        <motion.button
          onClick={shareEmail}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition text-sm text-gray-300 hover:text-cyan-400"
        >
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">Email</span>
        </motion.button>

        {/* Copier le lien */}
        <motion.button
          onClick={copyLink}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition text-sm text-gray-300 hover:text-cyan-400"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-xs">Copié !</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Copier</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Message motivationnel */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          💡 En partageant, vous aidez vos proches à anticiper l'impact de l'IA sur leur carrière
        </p>
      </div>
    </div>
  );
}

