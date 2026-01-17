import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { createGameCards, GameCard, PortfolioCard, portfolioCards } from '@/data/portfolioData';
import MemoryCard from './MemoryCard';
import GameStats from './GameStats';
import RevealedInfo from './RevealedInfo';
import WinCelebration from './WinCelebration';

const MemoryGame = () => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedTypes, setMatchedTypes] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showWin, setShowWin] = useState(false);

  const initGame = useCallback(() => {
    setCards(createGameCards());
    setFlippedCards([]);
    setMoves(0);
    setMatchedTypes([]);
    setIsProcessing(false);
    setShowWin(false);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleCardClick = (uniqueId: string) => {
    if (isProcessing || flippedCards.length >= 2) return;

    const clickedCard = cards.find(c => c.uniqueId === uniqueId);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    // Flip the card
    setCards(prev => prev.map(card => 
      card.uniqueId === uniqueId ? { ...card, isFlipped: true } : card
    ));

    const newFlippedCards = [...flippedCards, uniqueId];
    setFlippedCards(newFlippedCards);

    // Check for match if two cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      setIsProcessing(true);

      const [firstId, secondId] = newFlippedCards;
      const firstCard = cards.find(c => c.uniqueId === firstId)!;
      const secondCard = cards.find(c => c.uniqueId === secondId)!;

      if (firstCard.type === secondCard.type) {
        // Match found!
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.type === firstCard.type ? { ...card, isMatched: true } : card
          ));
          setMatchedTypes(prev => [...prev, firstCard.type]);
          setFlippedCards([]);
          setIsProcessing(false);
        }, 500);
      } else {
        // No match - flip back
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            newFlippedCards.includes(card.uniqueId) 
              ? { ...card, isFlipped: false } 
              : card
          ));
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  // Check for win condition
  useEffect(() => {
    if (matchedTypes.length === portfolioCards.length && matchedTypes.length > 0) {
      setTimeout(() => setShowWin(true), 500);
    }
  }, [matchedTypes]);

  const matchedCardData = portfolioCards.filter(card => 
    matchedTypes.includes(card.type)
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="font-display text-3xl md:text-5xl font-bold text-gradient mb-2">
            Memory Portfolio
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Match the cards to discover my portfolio. Each pair reveals new info about me!
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <GameStats 
              moves={moves} 
              matches={matchedTypes.length} 
              totalPairs={portfolioCards.length}
              onReset={initGame}
            />
            
            <div className="game-grid">
              {cards.map((card, index) => (
                <motion.div
                  key={card.uniqueId}
                  initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <MemoryCard
                    card={card}
                    onClick={() => handleCardClick(card.uniqueId)}
                    disabled={isProcessing}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Revealed Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <RevealedInfo matchedCards={matchedCardData} />
            </div>
          </motion.div>
        </div>
      </div>

      <WinCelebration 
        isVisible={showWin} 
        moves={moves} 
        onPlayAgain={initGame}
      />
    </div>
  );
};

export default MemoryGame;
