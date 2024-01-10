import React from 'react';
import { Box, Toolbar, Typography, IconButton, } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    {/* <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Resume Builder
                    </Typography>
                    <Button color="inherit" component={RouterLink} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/skills">
                        Skills
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/education">
                        Education
                    </Button>
                    <Button color="inherit" component={RouterLink} to="/experience">
                        Experience
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;