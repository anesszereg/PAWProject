import React, { useState } from 'react';
import { Box } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import InputBase from '@mui/material/InputBase';
import {BsSearch} from 'react-icons/bs';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BiHomeAlt, BiBookAlt, BiMessage } from 'react-icons/bi';
import { BsClipboard, BsPerson } from 'react-icons/bs';
import { RiGroupLine } from 'react-icons/ri';
import { FiSettings, FiMoon } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import logo from '../../assets/Svgs/logo.svg'
import { Link } from 'react-router-dom';

const drawerWidth = 260;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const menuItems = [
  {
    type:'teacher',
    text: 'Home',
    icon: (
      <BiHomeAlt
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    key: 'home',
    path:'/'
  },
  {
    type:'Student',
    text: 'recourses',
    path:'/TeacherDashboard/classes',
    icon: (
      <BsClipboard
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    key: 'classes',
  },
  {
    type:'Student',
    text: 'new recourses',
    path:'/TeacherDashboard/classes',
    icon: (
      <BsClipboard
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    key: 'classes',
  },
  {
    type:'teacher',
    text: 'Course',
    icon: (
      <BiBookAlt
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    key: 'course',
    path:'/TeacherDashboard/course'
  },
  {
    type:'teacher',
    text: 'Chat',
    icon: (
      <BiMessage
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    path:'/chat'
  },
  {
    type:'teacher',
    text: 'Students',
    icon: (
      <RiGroupLine
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    path:'/Student'
  },
  {
    type:'teacher',
    text: 'Settings',
    icon: (
      <FiSettings
        style={{
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'black',
        }}
      />
    ),
    path:'/Settings'
  },
];

function Sidebar({ onSelectComponent }) {
  const [selectedItem, setSelectedItem] = useState('home');

  console.log(selectedItem);
  const [User, setUser] = useState('teacher')

  const handleItemClick = (key) => {
    setSelectedItem(key);
    onSelectComponent(key);
  };



  const filteredMenuItems = menuItems.filter((item) => item.type === User);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: 'transparent',
          boxShadow:' 0px 0px 4px 0px rgba(0, 0, 0, 0.25)'
        }}>
        <Toolbar style={{ backgroundColor: 'white' }}>
          <Search
            style={{
              borderColor: 'grey',
              border: 'solid 1px rgba(114, 113, 113, 0.15) ',
            }}>
            <SearchIconWrapper style={{ borderColor: 'grey' }}>
              <BsSearch color='grey' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ color: 'grey', borderColor: 'grey' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <FiMoon
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                color: 'black',
                marginInline: '10px',
                cursor: 'pointer',
              }}
            />
            <IoMdNotificationsOutline
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                color: 'black',
                marginInline: '10px',
                cursor: 'pointer',
              }}
            />
            <BsPerson
              style={{
                fontSize: '25px',
                fontWeight: 'bold',
                color: 'black',
                marginInline: '10px',
                cursor: 'pointer',
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">
        <Toolbar>
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100%'} marginTop='20px' marginBottom={'40px'}>

          <img src={logo} alt="" />
          </Box>
        </Toolbar>
        <List>
          {filteredMenuItems.map((item, index) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => handleItemClick(item.key || index)}
              style={{
                color: selectedItem === item.key ? 'white' : 'black',
                backgroundColor:
                  selectedItem === item.key ? '#463DFF' : 'transparent',
                width: '75%',
                marginInline: 'auto',
                marginBottom: '26px',
                borderRadius: '12px',
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {React.cloneElement(item.icon, {
                    style: { color: selectedItem === item.key ? 'white' : 'black', height: '24px', width: '24px' },
                  })}
                </ListItemIcon>
                <Link to={item.path} style={{ textDecoration: 'none', color: selectedItem === item.key ? 'white' : 'black' }}>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      style: { fontWeight: 'bold', fontSize: '20px' },
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}


export default Sidebar;
