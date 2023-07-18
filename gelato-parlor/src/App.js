import React from 'react';
import './App.css';

import Footer from '../src/components/footer'
import Header from './components/header/header';
import FullCard from './components/cards/full-card';
import TableCellCard from './components/cards/table-cell-card';
import { ThemeProvider } from '../src/context/themeContext';
import FlavorCarousel from './components/cards/flavors-carousel';
// import SplitCard from './components/cards/split-card';
import SplitCardContainer from './components/cards/splitCardContainer';

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
        <TableCellCard />
        <SplitCardContainer />
        <div className="App-footer">
          <Footer/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
