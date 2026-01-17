import { motion } from 'framer-motion';
import { GameCard } from '@/data/portfolioData';
import { Sparkles } from 'lucide-react';

interface MemoryCardProps {
  card: GameCard;
  onClick: () => void;
  disabled: boolean;
}

const MemoryCard = ({ card, onClick, disabled }: MemoryCardProps) => {
  const IconComponent = card.icon;
  
  return (
    <motion.div
      className={`card-flip aspect-square cursor-pointer ${
        card.isFlipped || card.isMatched ? 'card-flipped' : ''
      }`}
      onClick={() => !disabled && !card.isFlipped && !card.isMatched && onClick()}
      whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.05 } : {}}
      whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.95 } : {}}
    >
      <div className="card-inner w-full h-full">
        {/* Card Back */}
        <div className={`card-face card-back flex items-center justify-center ${
          !card.isFlipped && !card.isMatched ? 'animate-pulse-glow' : ''
        }`}>
          <div className="relative">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-white/90" />
            <div className="absolute inset-0 blur-xl bg-primary/30" />
          </div>
        </div>
        
        {/* Card Front */}
        <motion.div
          className={`card-face card-front flex flex-col items-center justify-center p-3 md:p-4 text-center ${
            card.isMatched ? 'matched-card' : ''
          }`}
          initial={false}
          animate={card.isMatched ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <IconComponent className={`w-8 h-8 md:w-10 md:h-10 mb-2 ${card.isMatched ? 'text-white/90' : 'text-white'}`} />
          <h3 className="font-display text-xs md:text-sm font-bold text-white">
            {card.title}
          </h3>
          {card.isMatched && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-xs text-white/80 mt-1"
            >
              {card.content}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MemoryCard;
