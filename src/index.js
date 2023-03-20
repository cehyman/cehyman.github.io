import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Deck from './components/Deck/Deck';
import Intro from './components/Intro/Intro'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div id="intro">
        <Intro />
      </div>
 
      <div id="deck">
        <Deck />
      </div>
  </React.StrictMode>
);




