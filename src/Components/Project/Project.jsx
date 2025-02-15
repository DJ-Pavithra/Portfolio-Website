import './Project.css';
import 'tachyons';
import ProjectCard from './ProjectCard';

const Project = () => {
  // Array of project data
  const projects = [
    {
      title: "Gym Client Tracker",
      progress: "OnProgress",
      color: "#39FF14"
    },
    {
      title: "Portfolio Website",
      progress: "Completed",
      color: "#14FFC0"
    },
    {
      title: "Website Template",
      progress: "Planning",
      color: "#B514FF"
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
          />
        ))}
      </div>
    </div>
  );
};

export default Project;