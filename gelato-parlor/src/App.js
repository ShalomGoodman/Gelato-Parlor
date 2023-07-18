import React from 'react';
import './App.css';

import Footer from '../src/components/footer'
import Header from './components/header/header';
import FullCard from './components/cards/full-card';
import TableCellCard from './components/cards/table-cell-card';
import { ThemeProvider } from '../src/context/themeContext';
import FlavorCarousel from './components/cards/flavors-carousel';

function App() {
  return (
    <ThemeProvider> 
      <div className="App">
        <Header />
        <FlavorCarousel />
        <FullCard />
        <TableCellCard />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
