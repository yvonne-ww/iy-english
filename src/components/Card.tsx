import React from 'react';
import { colors, spacing, borderRadius, shadows } from '../theme/colors';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, onClick, className = '', style }) => {
  return (
    <div
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: colors.surface,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        boxShadow: shadows.sm,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 150ms ease-in-out',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          (e.currentTarget as HTMLDivElement).style.boxShadow = shadows.md;
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          (e.currentTarget as HTMLDivElement).style.boxShadow = shadows.sm;
          (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        }
      }}
    >
      {children}
    </div>
  );
};

export default Card;
