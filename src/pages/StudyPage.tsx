import React, { useState } from 'react';
import { colors, spacing } from '../theme/colors';
import { Card, Button, Badge } from '../components';

interface Word {
  id: string;
  english: string;
  chineseMeaning: string;
  level: 'basic' | 'junior' | 'senior';
  pronunciation: string;
}

export const StudyPage: React.FC = () => {
  const [words] = useState<Word[]>([
    {
      id: '1',
      english: 'serendipity',
      chineseMeaning: '巧合，幸運的發現',
      level: 'senior',
      pronunciation: '/ˌserənˈdɪpɪti/',
    },
    {
      id: '2',
      english: 'ephemeral',
      chineseMeaning: '短暫的，易逝的',
      level: 'senior',
      pronunciation: '/ɪˈfem(ə)rəl/',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentWord = words[currentIndex];
  const levelColor = {
    basic: '#52C77E',
    junior: '#FFB74D',
    senior: '#F16C63',
  };

  return (
    <div
      style={{
        padding: spacing.xl,
        maxWidth: '800px',
        margin: '0 auto',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ marginBottom: spacing.xl, color: colors.primary }}>學習模式</h1>

      <Card
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          minHeight: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          perspective: '1000px',
          marginBottom: spacing.lg,
        }}
      >
        <Badge variant="primary" style={{ marginBottom: spacing.md }}>
          {currentIndex + 1} / {words.length}
        </Badge>

        {!isFlipped ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: colors.primary, marginBottom: spacing.md, fontSize: '36px' }}>
              {currentWord.english}
            </h2>
            <p style={{ color: colors.textSecondary, fontSize: '16px', marginBottom: spacing.md }}>
              {currentWord.pronunciation}
            </p>
            <p style={{ color: colors.textTertiary, fontSize: '14px' }}>點擊翻轉卡片查看中文意思</p>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: colors.textSecondary, marginBottom: spacing.md }}>
              中文意思：
            </p>
            <h2 style={{ color: colors.primary, fontSize: '28px', marginBottom: spacing.md }}>
              {currentWord.chineseMeaning}
            </h2>
            <Badge
              variant="primary"
              style={{
                backgroundColor: levelColor[currentWord.level as keyof typeof levelColor],
              }}
            >
              {currentWord.level.toUpperCase()}
            </Badge>
          </div>
        )}
      </Card>

      <div
        style={{
          display: 'flex',
          gap: spacing.md,
          justifyContent: 'center',
        }}
      >
        <Button
          variant="ghost"
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
        >
          上一個
        </Button>
        <Button
          variant="success"
          onClick={() => setCurrentIndex(Math.min(words.length - 1, currentIndex + 1))}
          disabled={currentIndex === words.length - 1}
        >
          下一個
        </Button>
      </div>
    </div>
  );
};

export default StudyPage;
