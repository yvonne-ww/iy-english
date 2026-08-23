import React, { useState, useRef, useEffect } from 'react';
import { colors, spacing } from '../theme/colors';
import { Input, Button, Card } from '../components';

interface User {
  id: string;
  email: string;
  username: string;
  token: string;
}

export const AuthComponent: React.FC<{ onAuthSuccess: (user: User) => void }> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // 模擬認證請求
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 模擬成功登入
      const mockUser: User = {
        id: '123',
        email,
        username: username || email.split('@')[0],
        token: `token_${Date.now()}`,
      };

      localStorage.setItem('user', JSON.stringify(mockUser));
      localStorage.setItem('authToken', mockUser.token);
      onAuthSuccess(mockUser);
    } catch (err) {
      setError('認證失敗，請重試');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: colors.surface,
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: spacing.xl,
        }}
      >
        <h1
          style={{
            color: colors.primary,
            marginBottom: spacing.lg,
            textAlign: 'center',
          }}
        >
          iY English
        </h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div style={{ marginBottom: spacing.md }}>
              <label style={{ color: colors.textSecondary, fontSize: '12px', display: 'block', marginBottom: spacing.sm }}>
                用戶名
              </label>
              <Input
                placeholder="輸入用戶名"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth
              />
            </div>
          )}

          <div style={{ marginBottom: spacing.md }}>
            <label style={{ color: colors.textSecondary, fontSize: '12px', display: 'block', marginBottom: spacing.sm }}>
              電子郵箱
            </label>
            <Input
              type="email"
              placeholder="輸入電子郵箱"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
          </div>

          <div style={{ marginBottom: spacing.lg }}>
            <label style={{ color: colors.textSecondary, fontSize: '12px', display: 'block', marginBottom: spacing.sm }}>
              密碼
            </label>
            <Input
              type="password"
              placeholder="輸入密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
          </div>

          {error && (
            <div
              style={{
                color: colors.error,
                marginBottom: spacing.md,
                fontSize: '12px',
              }}
            >
              {error}
            </div>
          )}

          <Button variant="primary" type="submit" fullWidth disabled={isLoading} style={{ marginBottom: spacing.md }}>
            {isLoading ? '處理中...' : isLogin ? '登入' : '註冊'}
          </Button>
        </form>

        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setError('');
          }}
          style={{
            background: 'none',
            border: 'none',
            color: colors.primary,
            cursor: 'pointer',
            fontSize: '14px',
            width: '100%',
          }}
        >
          {isLogin ? '還沒有帳戶？點擊註冊' : '已有帳戶？點擊登入'}
        </button>
      </Card>
    </div>
  );
};

export default AuthComponent;
