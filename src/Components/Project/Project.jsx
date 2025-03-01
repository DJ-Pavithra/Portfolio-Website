import './Project.css';
import 'tachyons';
import ProjectCard from './ProjectCard';

const Project = () => {
  // Array of project data
  const projects = [
    {
      title: "AIC-PEC website",
      progress: "Completed",
      color: "#39FF14",
      link: "https://aic-project.netlify.app/",
      github:"https://github.com/VJNAVEEN2005/atal-project.git",
      
    
    },
    {
      title: "Portfolio Website",
      progress: "Completed",
      color: "#14FFC0",
      link:"https://djpavithra.netlify.app/",
      github:"https://github.com/DJ-Pavithra/Portfolio-Website.git",
    
    },
    {
      title:"Quiz App",
      progress: "OnProgress",
      color: "#B51490",
      link:"",
      github:"https://github.com/DJ-Pavithra/Quiz-app.git",
     
    },
    {
      title: "Nexus",
      progress: "OnProgress",
      color: "#B514FF",
      link:"",
      github:"https://github.com/DJ-Pavithra/Nexus.git",
    
    }
    // Add more projects as needed
  ];

  return (
    <div className="project-container">
      <h1 className='tc mb3'>My Works</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            progress={project.progress}
            color={project.color}
            link={project.link}
            github={project.github}
        
          />
        ))}
      </div>
    </div>
  );
};

export default Project;