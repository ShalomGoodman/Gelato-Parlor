import React from 'react';
import './App.css';

import Footer from '../src/components/footer'
import Header from './components/header/header';
import FullCard from './components/cards/full-card';
import { ThemeProvider } from '../src/context/themeContext';

function App() {
  return (
    <ThemeProvider> 
      <div className="App">
        <Header />
        <FullCard />
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
