import React from 'react';
import ReactDOM from 'react-dom/client';
import "../src/CSS/style.css";
import Header from "./Layout/Header"
import Footer from './Layout/Footer';
import MainBody from './MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
  <React.StrictMode>
    <Header />
    <MainBody />
    <Footer />
  </React.StrictMode>
  </div>
);