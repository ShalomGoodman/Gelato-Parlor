import React from 'react';
import './App.css';
import Header from './components/header/header';
import FullCard from './components/cards/full-card';
import { ThemeProvider } from '../src/context/themeContext';

function App() {
  return (
    <ThemeProvider> 
      <div className="App">
        <Header />
        <FullCard />
      </div>
    </ThemeProvider>
  );
}

export default App;
