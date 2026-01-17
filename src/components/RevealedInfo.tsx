import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioCard } from '@/data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

interface RevealedInfoProps {
  matchedCards: PortfolioCard[];
}

const RevealedInfo = ({ matchedCards }: RevealedInfoProps) => {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl md:text-2xl font-bold text-white">
        Discovered Info
      </h2>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        <AnimatePresence mode="popLayout">
          {matchedCards.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white/80 text-sm"
            >
              Match cards to reveal portfolio info...
            </motion.p>
          ) : (
            matchedCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="bg-card border border-border rounded-lg p-4 neon-border"
                >
                  <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    <div>
                        <h3 className="font-display font-semibold text-white">
                          {card.title}
                        </h3>
                        <p className="text-sm text-white/80">{card.content}</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-neon-green ml-auto" />
                  </div>
                  
                  <ul className="space-y-1.5">
                    {card.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="text-sm text-white/80 flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RevealedInfo;
