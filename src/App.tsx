import React, { useState } from 'react';
import { colors } from './theme/colors';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import StudyPage from './pages/StudyPage';
import StatsPage from './pages/StatsPage';
import WordbookPage from './pages/WordbookPage';
import { AppProvider } from './context/AppContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'study':
        return <StudyPage />;
      case 'wordbook':
        return <WordbookPage />;
      case 'stats':
        return <StatsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <AppProvider>
      <div style={{ backgroundColor: colors.background, minHeight: '100vh' }}>
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        {renderPage()}
      </div>
    </AppProvider>
  );
}

export default App;
