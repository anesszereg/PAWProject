import React from 'react'
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FaHome } from "react-icons/fa";
import Button from '@mui/material/Button';


function SideBar() {
    return (


        <Box sx={
            {
                width: '20%',
                height: '100%',
                backgroundColor: '#fff',
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                color: "#000",
                padding: '40px 20px',
                display: "flex",
                flexDirection: 'column',

                alignItems: 'center'


            }
        }>

            <Box>
                LOGO
            </Box>
            <Box marginTop={'40px'}
                width={'100%'}>


                    <Button>
                        helllo

                    </Button>


            </Box>


        </Box>


    )
}

export default SideBar


// Nous avons montré que
