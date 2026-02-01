
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ResourceHub from './components/ResourceHub';
import './i18n';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ResourceHub />
    </ThemeProvider>
  );
};

export default App;
