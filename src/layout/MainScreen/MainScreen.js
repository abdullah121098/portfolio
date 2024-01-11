import React from 'react'
import { Header, Intro, Skill, About, Edu, Project, Contact, Experience } from '../../screens';

const MainScreen = () => {
    return (
        <div>
            <Experience />
            <Skill />
            <Edu />
            <Project />
            <About />
            <Contact />
        </div>
    )
}

export default MainScreen
