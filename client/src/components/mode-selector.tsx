import { Button } from '@/components/ui/button';
import type { PracticeMode } from '@/hooks/use-binary-practice';

interface ModeSelectorProps {
  currentMode: PracticeMode;
  onModeChange: (mode: PracticeMode) => void;
}

export function ModeSelector({ currentMode, onModeChange }: ModeSelectorProps) {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <Button
        onClick={() => onModeChange('dec-to-bin')}
        className={`mode-btn px-6 py-3 rounded-lg font-medium ${
          currentMode === 'dec-to-bin' ? 'active' : ''
        }`}
        variant="ghost"
      >
        Decimal → Binary
      </Button>
      <Button
        onClick={() => onModeChange('bin-to-dec')}
        className={`mode-btn px-6 py-3 rounded-lg font-medium ${
          currentMode === 'bin-to-dec' ? 'active' : ''
        }`}
        variant="ghost"
      >
        Binary → Decimal
      </Button>
    </div>
  );
}
