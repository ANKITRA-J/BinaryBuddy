import { useState, useCallback, useEffect } from 'react';
import { generateQuestion, calculateAccuracy, type Question, type Stats } from '@/lib/binary-utils';

export type PracticeMode = 'dec-to-bin' | 'bin-to-dec';

export function useBinaryPractice() {
  const [mode, setMode] = useState<PracticeMode>('dec-to-bin');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [stats, setStats] = useState<Stats>({ correct: 0, wrong: 0, accuracy: 100 });
  const [isAnswered, setIsAnswered] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<{
    type: 'correct' | 'wrong' | null;
    message: string;
  }>({ type: null, message: '' });

  const generateNewQuestion = useCallback(() => {
    const question = generateQuestion(mode);
    setCurrentQuestion(question);
    setIsAnswered(false);
    setUserInput('');
    setFeedback({ type: null, message: '' });
  }, [mode]);

  const checkAnswer = useCallback((answer: string) => {
    if (!currentQuestion || isAnswered) return;

    const isCorrect = answer.trim() === currentQuestion.answer;
    setIsAnswered(true);

    if (isCorrect) {
      setStats(prev => {
        const newStats = { ...prev, correct: prev.correct + 1 };
        newStats.accuracy = calculateAccuracy(newStats.correct, newStats.wrong);
        return newStats;
      });
      setFeedback({ type: 'correct', message: 'Correct!' });
    } else {
      setStats(prev => {
        const newStats = { ...prev, wrong: prev.wrong + 1 };
        newStats.accuracy = calculateAccuracy(newStats.correct, newStats.wrong);
        return newStats;
      });
      setFeedback({ 
        type: 'wrong', 
        message: `Wrong! Correct answer: ${currentQuestion.answer}` 
      });
    }
  }, [currentQuestion, isAnswered]);

  const handleInputChange = useCallback((value: string) => {
    if (isAnswered) return;
    
    // Validate input based on mode
    let filteredValue = value;
    if (mode === 'dec-to-bin') {
      // Only allow 0 and 1 for binary input
      filteredValue = value.replace(/[^01]/g, '');
    } else {
      // Only allow digits for decimal input
      filteredValue = value.replace(/[^0-9]/g, '');
    }
    
    setUserInput(filteredValue);
  }, [mode, isAnswered]);

  const handleSubmit = useCallback(() => {
    if (isAnswered) {
      generateNewQuestion();
    } else if (userInput.trim()) {
      checkAnswer(userInput);
    }
  }, [isAnswered, userInput, checkAnswer, generateNewQuestion]);

  const skipQuestion = useCallback(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  const changeMode = useCallback((newMode: PracticeMode) => {
    setMode(newMode);
    setStats({ correct: 0, wrong: 0, accuracy: 100 });
  }, []);

  // Generate initial question
  useEffect(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  return {
    mode,
    currentQuestion,
    stats,
    isAnswered,
    userInput,
    feedback,
    handleInputChange,
    handleSubmit,
    skipQuestion,
    changeMode
  };
}
