import React from 'react';
import { Intro, Skill, About, Edu, Project, Contact, Exp } from '../../screens';
// import Navbar from '../../screens/Navbar';
// import { BrowserRouter as router,Link,Route } from 'react-router-dom';
function MainScreen() {
    return (
        <router>
            {/* <Navbar /> */}
            <Intro />
            <Exp />
            <Project />
            <Edu />
            <Skill />
            <About />
            <Contact />
        </router>
    )
}

export default MainScreen
