import React from 'react';
import './App.css';
import Header from './components/header/header'; // Assuming Header.js is in the same directory
import FullCard from './components/cards/full-card';

function App() {
  return (
    <div className="App">
      <Header />
      <FullCard />
    </div>
  );
}

export default App;
