import React, { useState } from 'react';
import { colors, spacing, borderRadius } from '../theme/colors';
import { Button, Input, Card } from '../components';

export const WordbookPage: React.FC = () => {
  const [wordbooks] = useState([
    { id: '1', name: '雅思高頻詞彙', wordCount: 523, color: colors.primary },
    { id: '2', name: 'GRE 詞彙', wordCount: 1200, color: colors.error },
    { id: '3', name: '日常生活詞彙', wordCount: 340, color: colors.success },
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newWordbookName, setNewWordbookName] = useState('');

  return (
    <div
      style={{
        padding: spacing.xl,
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: spacing.xl,
        }}
      >
        <h1 style={{ color: colors.primary }}>我的詞本</h1>
        <Button variant="primary" onClick={() => setShowCreateForm(!showCreateForm)}>
          + 新建詞本
        </Button>
      </div>

      {showCreateForm && (
        <Card style={{ marginBottom: spacing.lg, padding: spacing.lg }}>
          <h3 style={{ marginBottom: spacing.md }}>建立新詞本</h3>
          <div style={{ display: 'flex', gap: spacing.md }}>
            <Input
              placeholder="詞本名稱"
              value={newWordbookName}
              onChange={(e) => setNewWordbookName(e.target.value)}
              fullWidth
            />
            <Button variant="success">建立</Button>
            <Button variant="ghost" onClick={() => setShowCreateForm(false)}>
              取消
            </Button>
          </div>
        </Card>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: spacing.lg,
        }}
      >
        {wordbooks.map((wordbook) => (
          <Card key={wordbook.id}>
            <div
              style={{
                height: '80px',
                backgroundColor: wordbook.color,
                borderRadius: borderRadius.md,
                marginBottom: spacing.md,
              }}
            />
            <h3 style={{ color: colors.primary, marginBottom: spacing.sm }}>{wordbook.name}</h3>
            <p style={{ color: colors.textSecondary, marginBottom: spacing.lg }}>
              {wordbook.wordCount} 個詞彙
            </p>
            <Button variant="primary" fullWidth size="sm">
              開始學習
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WordbookPage;
