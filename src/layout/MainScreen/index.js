import React from 'react'
import { Intro, Skill, About, Edu, Project, Contact } from '../../screens';

function index() {
    return (
        <div>
            <Intro />
            <Project />
            <Edu />
            <Skill />
            <About />
            <Contact />
        </div>
    )
}

export default index
