import PropTypes from 'prop-types';
import 'tachyons';
import { ExternalLink, Github } from 'lucide-react';
const ProjectCard = ({ title, progress, color, link, github }) => {
 
  return (
    <div 
      className="ProjectCard br2 pv1 shadow-1 mv-3"
      style={{ '--hover-color': color }} 
    >
    
      <div className="ProjectPic flex items-center justify-center br3 shadow-1 mv-3">
    
        <h3 className="f3">{title}</h3>
      </div>
     
      <div className="Progress br3 pa3 shadow-1 mv-3">
        <span>{progress}</span>
      </div>
      
        <div className="pl5 pr5 pt1 pb4 flex items-center justify-between ">
        <a href={link} target="_blank"><ExternalLink size={30} /></a>
        <a href={github} target="_blank"><Github size={30} /></a>
        </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string,
  github: PropTypes.string,
  description: PropTypes.string
};

export default ProjectCard;