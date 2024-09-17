import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DogGallery from './pages/DogGallery';
import DogBreedSearch from './pages/DogBreedSearch';
import Footer from './components/Footer';
import Navbar from './components/Navbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <div className="container mt-5 pt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<DogGallery />} />
          <Route path="/search" element={<DogBreedSearch />} />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
};

export default App;
