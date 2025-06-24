import { Card, CardContent } from '@/components/ui/card';
import type { Stats } from '@/lib/binary-utils';

interface StatsDisplayProps {
  stats: Stats;
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="mb-8">
      <Card className="bg-[var(--dark-card)] border-[var(--dark-muted)]">
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold font-mono text-[var(--accent-yellow)]">
                {stats.correct}
              </div>
              <div className="text-[var(--dark-muted)] text-sm">Correct</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[var(--error-red)]">
                {stats.wrong}
              </div>
              <div className="text-[var(--dark-muted)] text-sm">Wrong</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-[var(--dark-text)]">
                {stats.accuracy}%
              </div>
              <div className="text-[var(--dark-muted)] text-sm">Accuracy</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
