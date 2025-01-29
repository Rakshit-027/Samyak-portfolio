import react from 'react';
import { BarChart2, TrendingUp, Database,Code } from 'lucide-react';
import './Home.css'
import ShinyText from './ShinyText/ShinyText';
import TrueFocus from './TrueFocus/TrueFocus';
import Card from './Card';
import Button from './Button';

const HomePage = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="section-title">
            <TrueFocus sentence="Hi, I'm"/> <span className="highlight"><ShinyText text= "Samyak Mendhe"/></span>
          </h1>
          <h2 className='Section--subtitle'>Data Analyst & Visualization Expert</h2>
          <p className='section-description'>
            Transforming complex data into actionable insights through advanced
            analytics and compelling visualizations.
          </p>
        
            <button className="cta-button"><Button title="Hire Me"/></button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
          alt="Data Analytics Dashboard"
          className="hero-image"
        />
      </div>

      <div className="skills-grid">
        {/* <ShinyText className="skill-card">
          <BarChart2 size={24} />
          <h3>Data Visualization</h3>
          <p></p>
        </ShinyText> */}
        <Card title = "Data Visualization" icon = {<BarChart2 size={29}/>} content ="Creating impactful visual stories from complex datasets to drive informed decision-making" /> 
        {/* <div className="skill-card">
          <TrendingUp size={24} />
          <h3>Statistical Analysis</h3>
          <p>Advanced statistical modeling and hypothesis testing</p>
        </div> */}
        <Card title = "Statistical Analysis" icon = {<TrendingUp size={29}/>} content ="Advanced statistical modeling and hypothesis testing" /> 
        {/* <div className="skill-card">
          <Database size={24} />
          <h3>Data Management</h3>
          <p>Efficient handling of large-scale databases and data warehouses</p>
        </div> */}
        <Card title = "Data Management" icon = {<Database size={29}/>} content ="Efficient handling of large-scale databases and data warehouses" /> 
        {/* <div className="skill-card">
          <Code size={24} />
          <h3>Programming</h3>
          <p>Proficient in Python, R, and SQL for data analysis and automation</p>
        </div> */}
        <Card title = "Programming" icon = {<Code size={29}/>} content ="Proficient in Python, R, and SQL for data analysis and automation" /> 
      </div>
    </div>
  );
};

export default HomePage;