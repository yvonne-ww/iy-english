import React, { useState, useRef } from 'react';
import { colors, spacing } from '../theme/colors';
import { Button, Card } from '../components';

export const ListeningComponent: React.FC<{ word: string; pronunciation: string }> = ({
  word,
  pronunciation,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const speak = () => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.onend = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card style={{ padding: spacing.lg, marginBottom: spacing.lg }}>
      <h3 style={{ color: colors.primary, marginBottom: spacing.md }}>🎧 聆聽練習</h3>
      <p style={{ color: colors.textSecondary, marginBottom: spacing.md }}>{pronunciation}</p>
      <Button
        variant="primary"
        onClick={speak}
        disabled={isPlaying}
        style={{
          width: '100%',
          padding: spacing.lg,
        }}
      >
        {isPlaying ? '播放中...' : '點擊播放發音'}
      </Button>
    </Card>
  );
};

export default ListeningComponent;
