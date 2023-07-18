import React from 'react';
import './App.css';

import Footer from '../src/components/footer'
import Header from './components/header/header';
import FullCard from './components/cards/full-card';
import { ThemeProvider } from '../src/context/themeContext';
import FlavorCarousel from './components/cards/flavors-carousel';
import SplitCard from './components/cards/split-card';
import SplitCardContainer from './components/cards/splitCardContainer';

function App() {
  return (
    <ThemeProvider> 
      <div className="App">
        <Header />
        <FlavorCarousel />
        <FullCard />
        <SplitCardContainer />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
