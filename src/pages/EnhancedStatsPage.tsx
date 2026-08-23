import React, { useState } from 'react';
import { colors, spacing } from '../theme/colors';
import { Button, Card } from '../components';
import DataVisualization from '../components/DataVisualization';
import ListeningComponent from '../components/ListeningComponent';
import OCRComponent from '../components/OCRComponent';
import SpacedRepetitionSystem from '../components/SpacedRepetitionSystem';

export const EnhancedStatsPage: React.FC = () => {
  const [stats] = useState({
    totalWords: 2543,
    masteredWords: 523,
    learningWords: 342,
    accuracy: 87,
    studyStreak: 15,
    totalStudyTime: 342,
  });

  const weeklyProgressData = [
    { label: '星期一', value: 45 },
    { label: '星期二', value: 52 },
    { label: '星期三', value: 48 },
    { label: '星期四', value: 61 },
    { label: '星期五', value: 55 },
    { label: '星期六', value: 67 },
    { label: '星期日', value: 42 },
  ];

  const wordLevelData = [
    { label: '基礎', value: 520 },
    { label: '初中', value: 340 },
    { label: '高中', value: 320 },
    { label: '參考', value: 180 },
    { label: '擴展', value: 130 },
  ];

  const studyTypeData = [
    { label: '閃卡', value: 450 },
    { label: '選擇題', value: 320 },
    { label: '拼寫', value: 280 },
    { label: '聆聽', value: 200 },
  ];

  const StatCard: React.FC<{ label: string; value: string | number; subtext?: string }> = ({
    label,
    value,
    subtext,
  }) => (
    <Card style={{ textAlign: 'center', padding: spacing.lg }}>
      <p style={{ color: colors.textSecondary, marginBottom: spacing.sm, fontSize: '14px' }}>{label}</p>
      <h3 style={{ color: colors.primary, fontSize: '32px', marginBottom: spacing.sm }}>{value}</h3>
      {subtext && (
        <p style={{ color: colors.textTertiary, fontSize: '12px' }}>
          {subtext}
        </p>
      )}
    </Card>
  );

  return (
    <div style={{ padding: spacing.xl, maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: spacing.xl, color: colors.primary }}>📊 增強型學習統計</h1>

      {/* 統計卡片 */}
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
        <StatCard label="總學習時間" value={`${Math.round(stats.totalStudyTime / 60)} 小時`} subtext="累計" />
      </div>

      {/* 圖表區域 */}
      <div style={{ marginBottom: spacing.xl }}>
        <DataVisualization data={weeklyProgressData} title="📈 本週學習進度" type="bar" />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: spacing.lg,
          marginBottom: spacing.xl,
        }}
      >
        <DataVisualization data={wordLevelData} title="📚 詞彙等級分布" type="pie" />
        <DataVisualization data={studyTypeData} title="🎓 學習方式分布" type="pie" />
      </div>

      {/* 聆聽和 OCR 功能 */}
      <h2 style={{ color: colors.primary, marginBottom: spacing.lg }}>🎯 互動功能</h2>
      <div style={{ marginBottom: spacing.xl }}>
        <ListeningComponent word="serendipity" pronunciation="/ˌserənˈdɪpɪti/" />
      </div>

      <div style={{ marginBottom: spacing.xl }}>
        <OCRComponent onExtractText={(text) => console.log('Extracted:', text)} />
      </div>

      {/* 間隔重複系統 */}
      <h2 style={{ color: colors.primary, marginBottom: spacing.lg }}>🔄 複習計劃</h2>
      <SpacedRepetitionSystem />

      {/* 匯出按鈕 */}
      <div style={{ textAlign: 'center', marginTop: spacing.xl }}>
        <Button variant="primary">📥 匯出統計報告</Button>
      </div>
    </div>
  );
};

export default EnhancedStatsPage;
