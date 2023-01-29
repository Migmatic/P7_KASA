import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './assets/scss/styles.scss'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div class={"globalWrapper"}>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}>
            </Route>

            <Route path="/about" element={<About/>}>
            </Route>

            <Route path="/*" element={<Error/>}>
            </Route>

          </Routes>
        </div>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

