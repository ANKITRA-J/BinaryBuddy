import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, XCircle } from 'lucide-react';
import type { Question } from '@/lib/binary-utils';
import type { PracticeMode } from '@/hooks/use-binary-practice';

interface PracticeAreaProps {
  mode: PracticeMode;
  question: Question | null;
  userInput: string;
  isAnswered: boolean;
  feedback: {
    type: 'correct' | 'wrong' | null;
    message: string;
  };
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  onSkip: () => void;
}

export function PracticeArea({
  mode,
  question,
  userInput,
  isAnswered,
  feedback,
  onInputChange,
  onSubmit,
  onSkip
}: PracticeAreaProps) {
  if (!question) return null;

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const getPromptText = () => {
    return mode === 'dec-to-bin' 
      ? 'Convert this decimal to binary:' 
      : 'Convert this binary to decimal:';
  };

  const getHintText = () => {
    return mode === 'dec-to-bin' 
      ? 'Enter the binary representation' 
      : 'Enter the decimal representation';
  };

  const getFeedbackIcon = () => {
    if (feedback.type === 'correct') {
      return <CheckCircle className="text-[var(--success-green)] text-2xl" />;
    } else if (feedback.type === 'wrong') {
      return <XCircle className="text-[var(--error-red)] text-2xl" />;
    }
    return null;
  };

  const getInputClassName = () => {
    let baseClass = "w-full bg-[var(--input-bg)] border-2 rounded-lg px-4 py-4 text-center text-2xl font-mono text-[var(--dark-text)] focus:border-[var(--accent-yellow)] focus:outline-none transition-all duration-200";
    
    if (feedback.type === 'correct') {
      baseClass += " feedback-correct";
    } else if (feedback.type === 'wrong') {
      baseClass += " feedback-error";
    } else {
      baseClass += " border-[var(--dark-muted)]";
    }
    
    return baseClass;
  };

  return (
    <Card className="bg-[var(--dark-card)] border-[var(--dark-muted)] mb-8">
      <CardContent className="p-8">
        {/* Question Display */}
        <div className="text-center mb-8">
          <div className="text-[var(--dark-muted)] text-lg mb-2">
            {getPromptText()}
          </div>
          <div className="text-5xl font-bold font-mono text-[var(--accent-yellow)] mb-4">
            {question.value}
          </div>
          <div className="text-[var(--dark-muted)] text-sm">
            {getHintText()}
          </div>
        </div>

        {/* Input Area */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Input
              value={userInput}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyPress={handleKeyPress}
              className={getInputClassName()}
              placeholder="Type your answer..."
              autoComplete="off"
              spellCheck={false}
              autoFocus
            />
            {/* Feedback Icon */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-200">
              {getFeedbackIcon()}
            </div>
          </div>
          
          {/* Answer Feedback */}
          <div className={`mt-4 text-center text-sm transition-all duration-200 ${
            feedback.type === 'correct' ? 'text-[var(--success-green)] opacity-100' :
            feedback.type === 'wrong' ? 'text-[var(--error-red)] opacity-100' :
            'opacity-0'
          }`}>
            {feedback.message}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button
            onClick={onSkip}
            variant="secondary"
            className="bg-[var(--dark-muted)] text-[var(--dark-text)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--dark-text)] hover:text-[var(--dark-bg)] transition-all duration-200"
          >
            Skip
          </Button>
          <Button
            onClick={onSubmit}
            disabled={!isAnswered && !userInput.trim()}
            className={`bg-[var(--accent-yellow)] text-[var(--dark-bg)] px-6 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-all duration-200 ${
              (!isAnswered && !userInput.trim()) ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isAnswered ? 'Next Question' : 'Submit'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
