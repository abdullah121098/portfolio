import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Header, Intro, Skill, About, Edu, Project, Contact, Experience } from '../../screens';
import { Element } from 'react-scroll';
import Main from './MainScreen';
const MainScreen = () => {
    const scrollTo = (element) => {
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Router>
            <Box>
                <Header />
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/skills" element={<Skill />} />
                    <Route path="/education" element={<Edu />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Box>

            {/* Navigation Links */}
            <Box sx={{ textAlign: 'center', marginTop: 2 }}>
                <Button component={Link} to="/" onClick={() => scrollTo(document.getElementById('intro'))}>
                    Home
                </Button>
                <Button component={Link} to="/skills" onClick={() => scrollTo(document.getElementById('skills'))}>
                    Skills
                </Button>
                <Button component={Link} to="/education" onClick={() => scrollTo(document.getElementById('education'))}>
                    Education
                </Button>
                <Button component={Link} to="/experience" onClick={() => scrollTo(document.getElementById('experience'))}>
                    Experience
                </Button>
                <Button component={Link} to="/project" onClick={() => scrollTo(document.getElementById('project'))}>
                    Project
                </Button>
                <Button component={Link} to="/about" onClick={() => scrollTo(document.getElementById('about'))}>
                    About
                </Button>
                <Button component={Link} to="/contact" onClick={() => scrollTo(document.getElementById('contact'))}>
                    Contact
                </Button>
            </Box>
            {/* <Main /> */}
        </Router>
    );
};

export default MainScreen;
