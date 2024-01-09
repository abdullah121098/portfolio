import React from 'react'
import { Intro, Skill, About, Edu, Project, Contact, Exp } from '../../screens';

function index() {
    return (
        <div>
            <Intro />
            <Exp />
            <Project />
            <Edu />
            <Skill />
            <About />
            <Contact />
        </div>
    )
}

export default index
