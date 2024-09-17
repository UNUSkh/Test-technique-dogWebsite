import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Composant NavLink pour gerer l'etat actif
function NavLink({ to, children }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <li className="nav-item">
      <Link className={`nav-link ${isActive ? 'active' : ''}`} to={to}>
        {children}
      </Link>
    </li>
  );
}

// Composant Navbar
const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Gestion de la fermeture du menu mobile apres selection
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-paw" aria-hidden="true"></i> Barkopedia
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/gallery">Dog Gallery</NavLink>
            <NavLink to="/search">Dog Breed Search</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
