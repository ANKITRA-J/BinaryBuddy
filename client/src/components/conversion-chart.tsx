import { Card, CardContent } from '@/components/ui/card';

const referenceValues = [
  { decimal: 128, binary: '10000000' },
  { decimal: 64, binary: '1000000' },
  { decimal: 32, binary: '100000' },
  { decimal: 16, binary: '10000' },
  { decimal: 8, binary: '1000' },
  { decimal: 4, binary: '100' },
  { decimal: 2, binary: '10' },
  { decimal: 1, binary: '1' },
];

export function ConversionChart() {
  return (
    <Card className="bg-[var(--dark-card)] border-[var(--dark-muted)]">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center text-[var(--dark-text)]">
          Binary Reference Chart
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono">
          {referenceValues.map((item) => (
            <div 
              key={item.decimal}
              className="bg-[var(--input-bg)] rounded-lg p-3 text-center"
            >
              <div className="text-[var(--accent-yellow)] font-semibold">
                {item.decimal}
              </div>
              <div className="text-[var(--dark-muted)]">
                {item.binary}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
