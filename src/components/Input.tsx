import React from 'react';
import { colors, spacing, borderRadius, transitions } from '../theme/colors';

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  fullWidth = false,
  className = '',
  onFocus,
  onBlur,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={className}
      onFocus={() => {
        setIsFocused(true);
        onFocus?.();
      }}
      onBlur={() => {
        setIsFocused(false);
        onBlur?.();
      }}
      style={{
        width: fullWidth ? '100%' : 'auto',
        padding: spacing.md,
        borderRadius: borderRadius.md,
        border: `2px solid ${isFocused ? colors.primary : colors.border}`,
        backgroundColor: colors.background,
        color: colors.textPrimary,
        fontSize: '14px',
        transition: `border-color ${transitions.fast}`,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'text',
      }}
    />
  );
};

export default Input;