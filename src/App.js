import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import DogGallery from './pages/DogGallery';
import DogBreedSearch from './pages/DogBreedSearch';

// Custom hook to get the current path
function NavLink({ to, children }) {
  const location = useLocation();
  
  // Add the 'active' class if the current route matches the link's 'to' value
  const isActive = location.pathname === to;
  
  return (
    <li className="nav-item">
      <Link className={`nav-link ${isActive ? 'active' : ''}`} to={to}>
        {children}
      </Link>
    </li>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"><i class="fa fa-paw" aria-hidden="true"></i>  Dog CEO</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/gallery">Dog Gallery</NavLink>
                <NavLink to="/search">Dog Breed Search</NavLink>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5 pt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<DogGallery />} />
            <Route path="/search" element={<DogBreedSearch />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
