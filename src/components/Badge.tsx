import React from 'react';
import { colors, spacing, borderRadius } from '../theme/colors';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'error' | 'warning' | 'info';
  className?: string;
}

const variantColors = {
  primary: { bg: colors.primary, text: '#FFFFFF' },
  success: { bg: colors.success, text: '#FFFFFF' },
  error: { bg: colors.error, text: '#FFFFFF' },
  warning: { bg: colors.warning, text: '#FFFFFF' },
  info: { bg: colors.info, text: '#FFFFFF' },
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className = '' }) => {
  const colors_ = variantColors[variant];

  return (
    <span
      className={className}
      style={{
        backgroundColor: colors_.bg,
        color: colors_.text,
        padding: `${spacing.xs} ${spacing.sm}`,
        borderRadius: borderRadius.full,
        fontSize: '12px',
        fontWeight: 500,
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
};

export default Badge;