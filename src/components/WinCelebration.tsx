import { motion, AnimatePresence } from 'framer-motion';
import { PartyPopper, Sparkles, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface WinCelebrationProps {
  isVisible: boolean;
  moves: number;
  onPlayAgain: () => void;
}

const WinCelebration = ({ isVisible, moves, onPlayAgain }: WinCelebrationProps) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative bg-card border border-primary/50 rounded-2xl p-8 md:p-12 text-center max-w-md mx-4 neon-border"
          >
            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0 
                }}
                animate={{ 
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.5) * 200,
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
                style={{
                  left: '50%',
                  top: '50%'
                }}
              >
                {i % 2 === 0 ? (
                  <Star className="w-4 h-4 text-neon-cyan" />
                ) : (
                  <Sparkles className="w-4 h-4 text-secondary" />
                )}
              </motion.div>
            ))}
            
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <PartyPopper className="w-16 h-16 text-secondary mx-auto mb-4" />
            </motion.div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
              You Did It!
            </h2>
            
            <p className="text-muted-foreground mb-6">
              You discovered my entire portfolio in{' '}
              <span className="text-primary font-bold">{moves}</span> moves!
            </p>
            
            <div className="space-y-3">
              <Button
                onClick={onPlayAgain}
                className="w-full font-display bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Play Again
              </Button>

              <Button
                onClick={() => navigate('/portfolio')}
                className="w-full font-display bg-white/5 text-white"
              >
                View Portfolio
              </Button>
              
              <p className="text-xs text-muted-foreground">
                Thanks for exploring my portfolio! 🎮
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WinCelebration;
