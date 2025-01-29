import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import Loader from './Loader';

const ProjectsPage = () =>  {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="loader-1"><Loader /></div>;
  }
  return (
    <div className="projects">
      <div className="projects-content">
        <h1 className="section-title">Featured Projects</h1>
        
        <div className="projects-grid">
          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
              alt="Sales Dashboard Project"
              className="project-image"
            />
            <div className="project-info">
              <h3>Sales Analytics Dashboard</h3>
              <p>Interactive dashboard built with Python and D3.js, analyzing sales patterns across multiple regions.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>D3.js</span>
                <span>SQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <ExternalLink size={20} /> Live Demo
                </a>
                <a href="#" className="project-link">
                  <Github size={20} /> Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
              alt="Market Analysis Project"
              className="project-image"
            />
            <div className="project-info">
              <h3>Market Trend Predictor</h3>
              <p>Machine learning model predicting market trends using historical data and sentiment analysis.</p>
              <div className="project-tech">
                <span>R</span>
                <span>TensorFlow</span>
                <span>NLP</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <ExternalLink size={20} /> Live Demo
                </a>
                <a href="#" className="project-link">
                  <Github size={20} /> Code
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img 
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000" 
              alt="Customer Analytics Project"
              className="project-image"
            />
            <div className="project-info">
              <h3>Customer Behavior Analysis</h3>
              <p>Comprehensive analysis of customer behavior patterns using advanced clustering algorithms.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>Tableau</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <ExternalLink size={20} /> Live Demo
                </a>
                <a href="#" className="project-link">
                  <Github size={20} /> Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;