import React from 'react';
import { colors, spacing } from '../theme/colors';
import { Button } from '../components';

export const Navigation: React.FC<{
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}> = ({ currentPage, onNavigate, onLogout }) => {
  return (
    <nav
      style={{
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
        padding: `${spacing.md} ${spacing.xl}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '24px', fontWeight: 700, color: colors.primary }}>iY English</div>

      <div style={{ display: 'flex', gap: spacing.lg }}>
        {[
          { label: '首頁', id: 'home' },
          { label: '學習', id: 'study' },
          { label: '詞本', id: 'wordbook' },
          { label: '統計', id: 'stats' },
        ].map((nav) => (
          <button
            key={nav.id}
            onClick={() => onNavigate(nav.id)}
            style={{
              background: 'none',
              border: 'none',
              color: currentPage === nav.id ? colors.primary : colors.textSecondary,
              fontWeight: currentPage === nav.id ? 600 : 400,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'color 150ms ease-in-out',
              borderBottom: currentPage === nav.id ? `2px solid ${colors.primary}` : 'none',
              paddingBottom: spacing.sm,
            }}
          >
            {nav.label}
          </button>
        ))}
      </div>

      <Button variant="ghost" size="sm" onClick={onLogout}>
        登出
      </Button>
    </nav>
  );
};

export default Navigation;
