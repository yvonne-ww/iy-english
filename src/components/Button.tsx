import React from 'react';
import { colors, spacing, borderRadius, transitions } from '../theme/colors';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const variantStyles = {
  primary: {
    backgroundColor: colors.primary,
    color: '#FFFFFF',
    '&:hover': { backgroundColor: colors.primaryLight },
    '&:active': { backgroundColor: colors.primaryDark },
  },
  secondary: {
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    '&:hover': { backgroundColor: colors.divider },
    '&:active': { backgroundColor: colors.border },
  },
  success: {
    backgroundColor: colors.success,
    color: '#FFFFFF',
    '&:hover': { backgroundColor: '#5FB88C' },
    '&:active': { backgroundColor: '#4AAF71' },
  },
  error: {
    backgroundColor: colors.error,
    color: '#FFFFFF',
    '&:hover': { backgroundColor: '#F28577' },
    '&:active': { backgroundColor: '#E8524C' },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.primary,
    '&:hover': { backgroundColor: colors.surface },
    '&:active': { backgroundColor: colors.divider },
  },
};

const sizeStyles = {
  sm: {
    padding: `${spacing.sm} ${spacing.md}`,
    fontSize: '12px',
    fontWeight: 500,
  },
  md: {
    padding: `${spacing.md} ${spacing.lg}`,
    fontSize: '14px',
    fontWeight: 500,
  },
  lg: {
    padding: `${spacing.lg} ${spacing.xl}`,
    fontSize: '16px',
    fontWeight: 600,
  },
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const style: React.CSSProperties = {
    ...variantStyle,
    ...sizeStyle,
    borderRadius: borderRadius.md,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: `all ${transitions.fast}`,
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transform: 'scale(1)',
    '&:active': {
      transform: 'scale(0.98)',
    },
  } as React.CSSProperties;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={style}
      onMouseDown={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.98)';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
