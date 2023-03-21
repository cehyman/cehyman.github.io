import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './components/pages/Intro/Intro';
import TableContents from './components/other/TableContents/TableContents';
// import Education from './components/pages/Education/Education'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Intro />
      <TableContents />
  </React.StrictMode>
);


