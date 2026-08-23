import React from 'react';
import { colors, spacing, borderRadius, shadows, transitions } from '../theme/colors';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        animation: `fadeIn ${transitions.normal}`,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: colors.background,
          borderRadius: borderRadius.lg,
          boxShadow: shadows.xl,
          maxWidth: '500px',
          width: '90%',
          maxHeight: '80vh',
          overflow: 'auto',
          animation: `slideUp ${transitions.normal}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div
            style={{
              padding: spacing.lg,
              borderBottom: `1px solid ${colors.border}`,
              fontSize: '18px',
              fontWeight: 600,
              color: colors.textPrimary,
            }}
          >
            {title}
          </div>
        )}
        <div style={{ padding: spacing.lg }}>{children}</div>
        {footer && <div style={{ padding: spacing.lg, borderTop: `1px solid ${colors.border}` }}>{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;