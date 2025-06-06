import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './FrontEnd/Page/Home/Home';
import CollectionPage from './FrontEnd/Page/Collection/Collection';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
