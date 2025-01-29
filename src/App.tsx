import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BarChart2, Home, User, Briefcase, Mail, FolderKanban, Menu, X } from 'lucide-react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-header">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
              <BarChart2 size={24} /> Samyak Mendhe
            </Link>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              <Home size={16} /> Home
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              <User size={16} /> About
            </Link>
            <Link to="/projects" className="nav-link" onClick={closeMenu}>
              <FolderKanban size={16} /> Projects
            </Link>
            <Link to="/experience" className="nav-link" onClick={closeMenu}>
              <Briefcase size={16} /> Experience
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              <Mail size={16} /> Contact
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;