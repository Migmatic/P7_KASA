import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>

        <Route path="/about" element={<About/>}>
        </Route>

        <Route path="/*" element={<Error/>}>
        </Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

