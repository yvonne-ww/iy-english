import React, { useState } from 'react';
import { colors, spacing } from '../theme/colors';
import { Card, Button } from '../components';

export const StatsPage: React.FC = () => {
  const [stats] = useState({
    totalWords: 2543,
    masteredWords: 523,
    learningWords: 342,
    accuracy: 87,
    studyStreak: 15,
    totalStudyTime: 342, // minutes
  });

  const StatCard: React.FC<{ label: string; value: string | number; subtext?: string }> = ({
    label,
    value,
    subtext,
  }) => (
    <Card
      style={{
        textAlign: 'center',
        padding: spacing.lg,
      }}
    >
      <p style={{ color: colors.textSecondary, marginBottom: spacing.sm, fontSize: '14px' }}>
        {label}
      </p>
      <h3 style={{ color: colors.primary, fontSize: '32px', marginBottom: spacing.sm }}>
        {value}
      </h3>
      {subtext && (
        <p style={{ color: colors.textTertiary, fontSize: '12px' }}>
          {subtext}
        </p>
      )}
    </Card>
  );

  return (
    <div
      style={{
        padding: spacing.xl,
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ marginBottom: spacing.xl, color: colors.primary }}>學習統計</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: spacing.lg,
          marginBottom: spacing.xl,
        }}
      >
        <StatCard label="總詞彙量" value={stats.totalWords} />
        <StatCard label="已掌握" value={stats.masteredWords} subtext="已達到精通" />
        <StatCard label="學習中" value={stats.learningWords} subtext="正在複習" />
        <StatCard label="準確率" value={`${stats.accuracy}%`} subtext="本週平均" />
        <StatCard label="連續打卡" value={`${stats.studyStreak} 天`} subtext="保持中 🔥" />
        <StatCard label="學習時間" value={`${Math.round(stats.totalStudyTime / 60)} 小時`} subtext="累計" />
      </div>

      <Card style={{ padding: spacing.lg }}>ß
        <h3 style={{ color: colors.primary, marginBottom: spacing.md }}>本週進度</h3>
        <div style={{ height: '200px', backgroundColor: colors.surface, borderRadius: '8px' }}>
          <p style={{ color: colors.textTertiary, textAlign: 'center', paddingTop: spacing.xl }}>圖表功能開發中...</p>
        </div>
      </Card>

      <div style={{ textAlign: 'center', marginTop: spacing.xl }}>
        <Button variant="primary">匯出統計報告</Button>
      </div>
    </div>
  );
};

export default StatsPage;
