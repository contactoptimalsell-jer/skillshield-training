import { motion } from 'framer-motion';

interface TimelineCtaBoxCompactProps {
  score: number;
}

export function TimelineCtaBoxCompact({ score }: TimelineCtaBoxCompactProps) {
  const getMessage = () => {
    if (score >= 70) {
      return 'transformer ce risque';
    } else if (score >= 50) {
      return 'anticiper ces changements';
    } else {
      return 'garder votre avance';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="mt-12 max-w-2xl mx-auto"
    >
      <div className="rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 p-6 text-center backdrop-blur-sm">
        <p className="text-white text-lg mb-4">
          <span className="font-bold text-cyan-400">SkillShield</span> peut vous aider à{' '}
          <span className="font-semibold text-white">{getMessage()}</span>
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = 'http://localhost:5173/waitinglist'}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition"
        >
          Découvrir nos solutions
        </motion.button>
      </div>
    </motion.div>
  );
}
