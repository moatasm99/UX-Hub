
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LearningHub from './components/LearningHub';
import './i18n';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LearningHub />
    </ThemeProvider>
  );
};

export default App;
