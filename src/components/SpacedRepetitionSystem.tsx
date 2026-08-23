import React, { useState } from 'react';
import { colors, spacing } from '../theme/colors';
import { Button, Card } from '../components';

interface ReviewItem {
  id: string;
  word: string;
  nextReview: Date;
  interval: number; // 天數
  repetitions: number;
  easeFactor: number;
}

export const SpacedRepetitionSystem: React.FC = () => {
  const [reviewItems] = useState<ReviewItem[]>([
    {
      id: '1',
      word: 'serendipity',
      nextReview: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      interval: 1,
      repetitions: 1,
      easeFactor: 2.5,
    },
    {
      id: '2',
      word: 'ephemeral',
      nextReview: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      interval: 3,
      repetitions: 2,
      easeFactor: 2.3,
    },
  ]);

  const [quality, setQuality] = useState<number | null>(null);

  const calculateNextInterval = (item: ReviewItem, quality: number) => {
    let newEaseFactor = item.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
    newEaseFactor = Math.max(1.3, newEaseFactor);

    let newInterval: number;
    if (quality < 3) {
      newInterval = 1;
    } else if (item.repetitions === 0) {
      newInterval = 1;
    } else if (item.repetitions === 1) {
      newInterval = 3;
    } else {
      newInterval = Math.round(item.interval * newEaseFactor);
    }

    return { interval: newInterval, easeFactor: newEaseFactor };
  };

  return (
    <div>
      <h3 style={{ color: colors.primary, marginBottom: spacing.lg }}>📚 間隔重複複習</h3>
      <div style={{ display: 'grid', gap: spacing.md, marginBottom: spacing.lg }}>
        {reviewItems.map((item) => (
          <Card key={item.id} style={{ padding: spacing.lg }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: spacing.md,
              }}
            >
              <div>
                <h4 style={{ color: colors.primary }}>{item.word}</h4>
                <p style={{ color: colors.textSecondary, fontSize: '12px' }}>
                  下次複習: {item.nextReview.toLocaleDateString('zh-TW')}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: colors.textSecondary, fontSize: '12px' }}>間隔: {item.interval} 天</p>
                <p style={{ color: colors.textSecondary, fontSize: '12px' }}>難度系數: {item.easeFactor.toFixed(2)}</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: spacing.sm }}>
              {[1, 2, 3, 4, 5].map((q) => (
                <Button
                  key={q}
                  variant={quality === q ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setQuality(q)}
                  style={{ fontSize: '12px' }}
                >
                  {q === 1 ? '😫' : q === 2 ? '😕' : q === 3 ? '😐' : q === 4 ? '😊' : '🤩'}
                </Button>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SpacedRepetitionSystem;
