import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/scholarship-program', label: 'Scholarship Program' },
    { path: '/apply', label: 'Apply Now' },
    { path: '/board-members', label: 'Board Members' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/financial-transparency', label: 'Financial Reports' },
    { path: '/donate', label: 'Donate' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="nav-brand">
            <Link to="/" className="brand-link">
              <img 
                src="/assets/images/logo.png" 
                alt="Minaxi Gajjar Foundation" 
                className="logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <h1 className="brand-name">Minaxi Gajjar Foundation</h1>
            </Link>
          </div>
          
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            {navigation.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {user && (
              <div className="admin-menu">
                <Link 
                  to="/admin/dashboard"
                  className="nav-link admin-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
                <button 
                  className="nav-link logout-btn" 
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;