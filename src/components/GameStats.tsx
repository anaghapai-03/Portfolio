import { motion } from 'framer-motion';
import { MousePointer2, Trophy, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GameStatsProps {
  moves: number;
  matches: number;
  totalPairs: number;
  onReset: () => void;
}

const GameStats = ({ moves, matches, totalPairs, onReset }: GameStatsProps) => {
  const isComplete = matches === totalPairs;
  
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-6">
        <motion.div 
          className="flex items-center gap-2"
          animate={{ scale: moves > 0 ? [1, 1.1, 1] : 1 }}
          transition={{ duration: 0.2 }}
        >
          <MousePointer2 className="w-5 h-5 text-primary" />
          <span className="font-display text-lg">
            <span className="text-muted-foreground text-sm mr-1">Moves:</span>
            <span className="text-foreground font-bold">{moves}</span>
          </span>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-2"
          animate={matches > 0 ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <Trophy className={`w-5 h-5 ${isComplete ? 'text-neon-green' : 'text-secondary'}`} />
          <span className="font-display text-lg">
            <span className="text-muted-foreground text-sm mr-1">Matches:</span>
            <span className={`font-bold ${isComplete ? 'text-neon-green' : 'text-foreground'}`}>
              {matches}/{totalPairs}
            </span>
          </span>
        </motion.div>
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={onReset}
        className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-display"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset Game
      </Button>
    </div>
  );
};

export default GameStats;
