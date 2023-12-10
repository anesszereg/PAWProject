import { useState } from 'react';

import { Box } from '@mui/material';
import HomeDashboard from '../../Components/HomeDashboard/HomeDashboard';
import Sidebar from '../../Components/nav/Sidebar';

const TeacherDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('Home'); // Initialize with 'Home'

  // Define a function to change the selected component
  const handleComponentChange = (componentName) => {
    setSelectedComponent(componentName);
  };


  return (
    <>
      <Sidebar onSelectComponent={handleComponentChange} />
      <Box marginTop={'64px'}>
      <HomeDashboard />
       
      </Box>
    </>
  );
};

export default TeacherDashboard;
