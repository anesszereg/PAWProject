import React, { useState } from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles';
import TeacherBackground from '../../assets/images/teacher.jpg';
import StudentBackground from '../../assets/images/Student.jpg';
import student from '../../assets/images/student.png';
import teacher from '../../assets/images/teacher.png';
import { InputAdornment, Input, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";
const useStyles = makeStyles({
    container: {
        display: 'flex',
        color:'#040404',
        height: '100vh',
        gap: '20px',


    }
   
});

function Login() {

    const classes = useStyles();
    const [isStudent, setIsStudent] = useState(true)

    return (

        <Box className={classes.container}>
            

            <Box sx={{
                        backgroundImage: isStudent? `url(${StudentBackground})` : `url(${TeacherBackground})`,
                        height: '100vh',
                        width:'100%',
                        objectFit: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display:'flex',
                        }}>

            </Box>
      
             



            <Box
            sx={{
                marginTop:'100px   ',
                marginLeft: '120px',
                width: '100%',


            }
            }>
                <Box display={'flex'} flexDirection={'row'} gap={'20px'}>

                    <Box>

                    <Box
                    onClick={()=>setIsStudent(true)}
                    sx={{
                        
                        backgroundColor:'#54D62C',
                        backgroundImage: `url(${student})`,
                        filter:isStudent? 'grayscale(0%)' : 'grayscale(100%)',
                        borderRadius:'20px',
                        border:'3px solid #000000',
                        height:'80px',
                        width:'80px',
                        objectFit: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display:'flex',
                        cursor:'pointer',
                        //on hover scale 
                        '&:hover': {
                            transform: 'scale(1.1)',
                            transition: 'transform 0.5s ease-in-out',
                        },
                    }}>

                        </Box>
                        <Typography color={'#000'} variant='subtitle1' textAlign={'center'} >
                            Student
                        </Typography>
                        </Box>
                        <Box>

                        <Box
                        onClick={()=>setIsStudent(false)}
                        sx={{
                            backgroundImage: `url(${teacher})`,
                            display: 'flex',
                            backgroundColor:'#FFBA07',
                            filter:isStudent? 'grayscale(100%)' : 'grayscale(0%)',
                            borderRadius:'20px',
                            border:'3px solid #000000',
                            objectFit: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            
                            height:'80px',
                            width:'80px',
                            cursor:'pointer',
                            '&:hover': {
                                transform: 'scale(1.1)',
                                transition: 'transform 0.5s ease-in-out',
                            },
                        }}
                        
                        >
                            </Box>
                            <Typography color={'#000'} variant='subtitle1' textAlign={'center'} >
                            Teacher
                        </Typography>

                                
                         </Box>
                </Box>



                <Typography variant='h1' textAlign={'start'} sx={{
                    marginTop:'46px',
                    fontWeight:'bold',
                    fontSize:'50px',

                }}>
                    {
                        isStudent? 'Student Platform' : 'Teacher Platform'
                    }
                </Typography>
                <Typography color={'#727171'} fontSize={'24px'} marginTop={'10px'}>
                Login to you account to continue

                    
                </Typography>

                    <Box sx={{
                        marginTop:'59px',
                        display:'flex',
                        flexDirection:'column',
                        gap:'20px',
                        width:'100%',
                        position: 'relative', 
                    }}>
                       
                       <Input
        type='text'
        placeholder='Enter your email'
        style={{
          width: '80%',
          height: '80px',
          borderRadius: '16px',
          border: '4px solid #000000',
          paddingLeft: '20px',
          boxShadow: '4px 4px 0px 0px #000',
          fontSize: '20px',
          outline: 'none',
          color: '#000000',
          paddingRight: '20px',
        }}
        endAdornment={ // Add endAdornment for the icon
          <InputAdornment position='end'>
            <EmailIcon />
          </InputAdornment>
        }
      />

      <Input
        type='password'
        placeholder='Enter your password'
        style={{
          width: '80%',
          height: '80px',
          borderRadius: '16px',
          border: '4px solid #000000',
          paddingLeft: '20px',
          boxShadow: '4px 4px 0px 0px #000',
          fontSize: '20px',
          outline: 'none',
          color: '#000000',
          paddingRight: '20px',
        }}
        endAdornment={ // Add endAdornment for the icon
          <InputAdornment position='end'>
            <LockIcon />
          </InputAdornment>
        }
      />


                        <Typography color={'#463DFF'} fontSize={'20px'} marginTop={'10px'} sx={{cursor:'pointer'}}>
                             I Forgot my  Password?
                        </Typography>
                        <Link to='/StudentDashboard'>
                      

                       
                            <button style={{
                                width: '80%',
                                height: '80px',
                                borderRadius: '16px',
                                border: '4px solid #000000',
                                paddingLeft: '20px',
                                boxShadow: '4px 4px 0px 0px #000',
                                fontSize: '20px',
                                outline: 'none',
                                color: '#000000',
                                backgroundColor: isStudent? '#54D62C' : '#FFBA07',                               
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    transition: 'transform 0.5s ease-in-out',
                                    color: '#fff',
                                },
                            }}>

                                Login
                            </button>
                                </Link>


</Box>

            





            </Box>

        </Box>
    )
}

export default Login
