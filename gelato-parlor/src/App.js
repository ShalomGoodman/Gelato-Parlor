import React from 'react';
import './App.css';

import Footer from '../src/components/footer'
import Header from './components/header/header';
import FullCard from './components/cards/full-card';
import { ThemeProvider } from '../src/context/themeContext';
import FlavorCarousel from './components/cards/flavors-carousel';

function App() {
  return (
    <ThemeProvider> 
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="App-body">
          <FlavorCarousel />
          <FullCard />
        </div>
        <div className="App-footer">
          <Footer/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
