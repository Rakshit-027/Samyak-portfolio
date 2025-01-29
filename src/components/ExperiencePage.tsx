import React from 'react';
import { Building2, GraduationCap } from 'lucide-react';
import  Loader  from './Loader';
import { useState, useEffect } from 'react';

const ExperiencePage = () => {
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
    <div className="experience">
      <div className="experience-content">
        <h1 className="section-title">Experience</h1>

        <div className="timeline">
          <div className="timeline-item">
            <Building2 size={24} />
            <h3>Senior Data Analyst</h3>
            <h4>Tech Solutions Inc. | 2020 - Present</h4>
            <p>
              Lead data analyst responsible for developing and maintaining
              dashboards, conducting complex analyses, and presenting insights to
              stakeholders.
            </p>
          </div>

          <div className="timeline-item">
            <Building2 size={24} />
            <h3>Data Analyst</h3>
            <h4>Analytics Corp | 2018 - 2020</h4>
            <p>
              Performed statistical analysis, created visualization reports, and
              collaborated with cross-functional teams to drive business decisions.
            </p>
          </div>

          <div className="timeline-item">
            <GraduationCap size={24} />
            <h3>Education</h3>
            <h4>Master's in Data Analytics | University of Technology</h4>
            <p>
              Specialized in advanced statistical methods and machine learning
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;