import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Deck from './components/Deck/Deck';
import Intro from './components/Intro/Intro'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Intro />
      <Deck />
  </React.StrictMode>
); 




