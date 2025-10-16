import React from 'react';
import { motion } from 'framer-motion';
import { getScoreColor } from '../../utils/riskCalculator';

interface CircularGaugeProps {
  value: number;
  size?: number;
}

export const CircularGauge: React.FC<CircularGaugeProps> = ({ value, size = 300 }) => {
  const circumference = 2 * Math.PI * (size / 2 - 20);
  const offset = circumference - (value / 100) * circumference;
  const color = getScoreColor(value);

  return (
    <div className="relative">
      <svg width={size} height={size} className="mx-auto">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 20}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="20"
        />
        
        {/* Animated progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 20}
          fill="none"
          stroke={color}
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: "easeOut" }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{
            filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
          }}
        />

        {/* Score au centre avec animation count-up */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-6xl font-bold fill-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {value}%
        </motion.text>

        {/* Label sous le score */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="2.5em"
          className="text-lg fill-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Risque IA
        </motion.text>
      </svg>

      {/* Particules flottantes (optionnel) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${50 + Math.cos(i * 60 * Math.PI / 180) * (size / 2 - 40)}px`,
              top: `${50 + Math.sin(i * 60 * Math.PI / 180) * (size / 2 - 40)}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

