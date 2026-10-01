import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.scss';
import App from './app/index.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './contador/index.jsx';
import './contador/index.scss';
import Contador from './contador/index.jsx';
import './textoon/textoon.jsx'; 
import Texto from './textoon/textoon.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/textoon" element={<Texto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

