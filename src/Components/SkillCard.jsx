import PropTypes from 'prop-types';
import './SkillCard.css';

const SkillCard = ({ name, imageUrl, hoverColor }) => {
  return (
    <div className="card-wrapper" style={{ '--hover-color': hoverColor }}>
      <div className="card">
        <div className="indicator">
          <div className="circle">
            {imageUrl && <img src={imageUrl} alt={name} />}
          </div>
        </div>
        <div className="content">
          <div className="name">{name}</div>
        </div>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
};

export default SkillCard;