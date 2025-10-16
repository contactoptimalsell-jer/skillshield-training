import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, RefreshCw, Clock, Info } from 'lucide-react';

interface UrgencyStat {
  id: string;
  value: number;
  unit?: string;
  label: string;
  source: string;
  sourceUrl: string;
  year: string;
  color: 'red' | 'orange' | 'yellow' | 'cyan';
  icon: string;
}

interface UrgencyStatCardProps {
  stat: UrgencyStat;
  delay: number;
}

const iconMap = {
  AlertTriangle: AlertTriangle,
  TrendingDown: TrendingDown,
  RefreshCw: RefreshCw,
  Clock: Clock
};

const colorClasses = {
  red: {
    border: 'border-red-500/30',
    bg: 'bg-red-500/5',
    text: 'text-red-400',
    glow: 'bg-red-500'
  },
  orange: {
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/5',
    text: 'text-orange-400',
    glow: 'bg-orange-500'
  },
  yellow: {
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/5',
    text: 'text-yellow-400',
    glow: 'bg-yellow-500'
  },
  cyan: {
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
    text: 'text-cyan-400',
    glow: 'bg-cyan-500'
  }
};

export const UrgencyStatCard: React.FC<UrgencyStatCardProps> = ({ stat, delay }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const Icon = iconMap[stat.icon as keyof typeof iconMap] || AlertTriangle;
  const colors = colorClasses[stat.color];

  // Intersection Observer pour déclencher animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation count-up
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 secondes
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: delay / 1000,
        ease: "easeOut"
      }}
      className={`
        relative p-6 rounded-xl border backdrop-blur-lg
        hover:scale-105 transition-all duration-300 cursor-pointer
        ${colors.border} ${colors.bg}
      `}
    >
      {/* Icon en haut */}
      <div className="mb-4">
        <Icon className={`w-8 h-8 ${colors.text}`} />
      </div>

      {/* Valeur avec count-up */}
      <div className="mb-3">
        <span className="text-4xl md:text-5xl font-bold text-white">
          {count.toLocaleString('fr-FR')}
          {stat.unit && <span className="text-3xl">{stat.unit}</span>}
        </span>
      </div>

      {/* Label */}
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        {stat.label}
      </p>

      {/* Source avec tooltip */}
      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-500 truncate mr-2">
          Source: {stat.source}
        </span>
        <a
          href={stat.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition flex-shrink-0"
          title={`Voir la source: ${stat.source}`}
        >
          <Info className="w-4 h-4" />
        </a>
      </div>

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl blur-xl opacity-20 -z-10 ${colors.glow}`}></div>
    </motion.div>
  );
};

