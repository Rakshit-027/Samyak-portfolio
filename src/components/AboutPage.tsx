import React from "react";
import "./AboutPage.css";
import Card from "./Card-2";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="about-intro">
          With over 2 years of experience in data analytics, I specialize in transforming complex data into clear, actionable insights. My expertise spans across various industries, helping organizations make data-driven decisions.
        </p>
      </div>

      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {/* <div className="skill-card">
            <h3>Programming</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div> */}
          <Card skill="Programming" first="Python" second="JavaScript" third="SQL" fourth="R" fifth="Matlab"/>

          {/* <div className="skill-card">
            <h3>Data Management</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Data Warehousing</li>
              <li>ETL Processes</li>
            </ul>
          </div> */}
          <Card skill="Data Management" first="PostgreSQL" second="MongoDB" third="Data Warehousing" fourth="ETL Processes" fifth="ETL Processes"/>

          {/* <div className="skill-card">
            <h3>Visualization</h3>
            <ul>
              <li>Tableau</li>
              <li>Power BI</li>
              <li>D3.js</li>
            </ul>
          </div> */}
          <Card skill="Visualization" first="Tableau" second="Power BI" third="D3.js" fourth="Plotly" fifth="Matplotlib"/>

          {/* <div className="skill-card">
            <h3>Analysis</h3>
            <ul>
              <li>Statistical Analysis</li>
              <li>Predictive Modeling</li>
              <li>A/B Testing</li>
              <li>Machine Learning</li>
            </ul>
          </div> */}
          <Card skill="Analysis" first="Statistical Analysis" second="Predictive Modeling" third="A/B Testing" fourth="Machine Learnings" fifth="Data Mining"/>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;