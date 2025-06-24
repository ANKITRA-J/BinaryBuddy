import { useBinaryPractice } from '@/hooks/use-binary-practice';
import { ModeSelector } from '@/components/mode-selector';
import { StatsDisplay } from '@/components/stats-display';
import { PracticeArea } from '@/components/practice-area';
import { ConversionChart } from '@/components/conversion-chart';

export default function Home() {
  const {
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
  } = useBinaryPractice();

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-[var(--dark-text)]">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-center text-[var(--accent-yellow)] font-mono">
            BinaryType
          </h1>
          <p className="text-center text-[var(--dark-muted)] mt-2">
            Master binary conversion through practice
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-8">
        <ModeSelector currentMode={mode} onModeChange={changeMode} />
        <StatsDisplay stats={stats} />
        <PracticeArea
          mode={mode}
          question={currentQuestion}
          userInput={userInput}
          isAnswered={isAnswered}
          feedback={feedback}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onSkip={skipQuestion}
        />
        <ConversionChart />
      </main>
    </div>
  );
}
