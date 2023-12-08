import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@mui/styles';

import LoginBackground from '../../assets/images/Login.png'

const useStyles = makeStyles({
    boxWithBackground: {
        backgroundImage: `url(${LoginBackground})`,
        objectFit: 'cover',
        backgroundSize: 'cover', // You can adjust this property based on your needs
        width: '100vw', // Set the width of the box
        height: '100vh', // Set the height of the box
        display: 'flex'
    }
});

function Login() {

    const classes = useStyles();

    return (

        <Box className={
            classes.boxWithBackground
        }>
            <Typography>
                Hello
            </Typography>


        </Box>
    )
}

export default Login
