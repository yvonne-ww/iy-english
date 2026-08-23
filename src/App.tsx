import React, { useState } from 'react';
import { colors } from './theme/colors';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import StudyPage from './pages/StudyPage';
import EnhancedStatsPage from './pages/EnhancedStatsPage';
import WordbookPage from './pages/WordbookPage';
import { AppProvider } from './context/AppContext';
import AuthComponent from './components/AuthComponent';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('authToken');
    }
    return false;
  });

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'study':
        return <StudyPage />;
      case 'wordbook':
        return <WordbookPage />;
      case 'stats':
        return <EnhancedStatsPage />;
      default:
        return <HomePage />;
    }
  };

  if (!isAuthenticated) {
    return <AuthComponent onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <AppProvider>
      <div style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
        <Navigation
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onLogout={handleLogout}
        />
        {renderPage()}
      </div>
    </AppProvider>
  );
}

export default App;
