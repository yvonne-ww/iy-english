import React from 'react';
import { colors, spacing } from '../theme/colors';
import { Button } from '../components';

export const HomePage: React.FC = () => {
  return (
    <div
      style={{
        padding: spacing.xl,
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: spacing.xxl }}>
        <h1 style={{ color: colors.primary, marginBottom: spacing.lg }}>歡迎來到 iY English</h1>
        <p style={{ fontSize: '18px', color: colors.textSecondary }}>用智能方式學習英文，掌握詞彙的每個細節</p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: spacing.lg,
          marginBottom: spacing.xxl,
        }}
      >
        {[
          { title: '今日挑戰', description: '完成每日詞彙挑戰', icon: '🎯' },
          { title: '複習卡片', description: '使用間隔重複法複習', icon: '📚' },
          { title: '統計數據', description: '查看學習進度和統計', icon: '📊' },
          { title: '自定義詞本', description: '建立自己的詞彙本', icon: '✏️' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: spacing.lg,
              backgroundColor: colors.surface,
              borderRadius: '12px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 150ms ease-in-out',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 12px rgba(155, 126, 189, 0.2)';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: spacing.md }}>{item.icon}</div>
            <h3 style={{ color: colors.primary, marginBottom: spacing.sm }}>{item.title}</h3>
            <p style={{ color: colors.textSecondary, fontSize: '14px' }}>{item.description}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <Button variant="primary" size="lg">
          開始學習
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
