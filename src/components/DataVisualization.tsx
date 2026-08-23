import React from 'react';
import { colors, spacing } from '../theme/colors';
import { Card } from '../components';

interface ChartProps {
  data: Array<{ label: string; value: number }>;
  title: string;
  type?: 'bar' | 'line' | 'pie';
}

export const DataVisualization: React.FC<ChartProps> = ({ data, title, type = 'bar' }) => {
  const maxValue = Math.max(...data.map((d) => d.value));

  if (type === 'bar') {
    return (
      <Card style={{ padding: spacing.lg }}>
        <h3 style={{ color: colors.primary, marginBottom: spacing.lg }}>{title}</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: spacing.md, height: '200px' }}>
          {data.map((item, idx) => (
            <div key={idx} style={{ flex: 1, textAlign: 'center' }}>
              <div
                style={{
                  height: `${(item.value / maxValue) * 150}px`,
                  backgroundColor: colors.primary,
                  borderRadius: '4px 4px 0 0',
                  marginBottom: spacing.sm,
                }}
              />
              <p style={{ color: colors.textSecondary, fontSize: '12px' }}>{item.label}</p>
              <p style={{ color: colors.textPrimary, fontWeight: 600 }}>{item.value}</p>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  if (type === 'pie') {
    const total = data.reduce((sum, d) => sum + d.value, 0);
    const colors_ = [colors.primary, colors.success, colors.warning, colors.error, colors.info];

    return (
      <Card style={{ padding: spacing.lg }}>
        <h3 style={{ color: colors.primary, marginBottom: spacing.lg }}>{title}</h3>
        <div style={{ display: 'flex', gap: spacing.lg }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <svg width="150" height="150" viewBox="0 0 150 150">
              {data.map((item, idx) => {
                const percentage = item.value / total;
                const startAngle = data.slice(0, idx).reduce((sum, d) => sum + d.value / total, 0) * Math.PI * 2;
                const endAngle = startAngle + percentage * Math.PI * 2;
                const x1 = 75 + 60 * Math.cos(startAngle - Math.PI / 2);
                const y1 = 75 + 60 * Math.sin(startAngle - Math.PI / 2);
                const x2 = 75 + 60 * Math.cos(endAngle - Math.PI / 2);
                const y2 = 75 + 60 * Math.sin(endAngle - Math.PI / 2);
                const largeArc = percentage > 0.5 ? 1 : 0;

                return (
                  <path
                    key={idx}
                    d={`M 75 75 L ${x1} ${y1} A 60 60 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    fill={colors_[idx % colors_.length]}
                  />
                );
              })}
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            {data.map((item, idx) => (
              <div key={idx} style={{ marginBottom: spacing.md }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: spacing.sm }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      backgroundColor: colors_[idx % colors_.length],
                      borderRadius: '2px',
                      marginRight: spacing.sm,
                    }}
                  />
                  <span style={{ color: colors.textPrimary }}>{item.label}</span>
                </div>
                <p style={{ color: colors.textSecondary, fontSize: '12px' }}>
                  {((item.value / total) * 100).toFixed(1)}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return null;
};

export default DataVisualization;
