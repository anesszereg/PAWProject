import './HomeDashboard.css';
import CirleInformation from '../../assets/Svgs/dashboardCircle.svg';

const AnalyticsCard = () => {
  return (
    <div className="analyticsCard">
      <div className="info">
        <div className="textes">
          <h2>Classes analytics</h2>
          <h4>This month progress</h4>
          <p>Traffic</p>
        </div>
        <div className="stats">
          <div>
            <span>12</span>
            <p>Classes</p>
          </div>
          <div>
            <span>40%</span>
            <p>Program progress</p>
          </div>
          <div>
            <span>360</span>
            <p>Students</p>
          </div>
          <div>
            <span>780</span>
            <p>Questions</p>
          </div>
        </div>
      </div>
      <div className="circleImage">
        <img src={CirleInformation} />
      </div>
    </div>
  );
};

export default AnalyticsCard;
