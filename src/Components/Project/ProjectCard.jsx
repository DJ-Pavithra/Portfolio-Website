import PropTypes from 'prop-types';
import 'tachyons';

const ProjectCard = ({ title, progress, color }) => {
  return (
    <div 
      className="ProjectCard br2 pv1 shadow-1 mv-3"
      style={{ '--hover-color': color }} // Set the hover color as a CSS variable
    >
      <div className="ProjectPic flex items-center justify-center br3 shadow-1 mv-3">
        <h3 className="f3">{title}</h3>
      </div>
      <div className="Progress br3 pa3 shadow-1 mv-3">
        <span>{progress}</span>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProjectCard;