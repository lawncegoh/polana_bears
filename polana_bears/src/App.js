import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React/*, { useState, useEffect }*/ from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//views
import Rarity from "./views/Rarity";
import LandingPage from "./views/LandingPage";



function App() {

  return (
    <>
      <meta property="og:title" content="Polana Bears" />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/rarity" element={<Rarity />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
