import Student from '../../assets/Svgs/bestStudent.svg';
import './HomeDashboard.css'

const BestStudent = () => {
  return (
    <div className="BestStudent">
      <h4>Highest Ranked Student</h4>
      <h2>18.5/20</h2>
      <h2 style={{ marginTop: '2px' }}>Student Name</h2>
      <span>2 AS3</span>
      <img src={Student} />
    </div>
  );
};

export default BestStudent;
