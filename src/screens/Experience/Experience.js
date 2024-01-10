// Experience.jsx
import React from 'react';
import { ExpData } from '../../assets/Resume';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience-container">
            <h1>Experience</h1>
            {ExpData.map((exp, index) => (
                <Card className="experience-card" key={index}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
                        <CardHeader
                            avatar={<WorkIcon />}
                            title={exp.company}
                            subheader={exp.role}
                        />
                        <Typography variant='subtitle2' color="text.primary" sx={{ margin: 5 }}>
                            Duration: {exp.duration}
                        </Typography>
                        <Typography variant='subtitle2' color="text.secondary" sx={{ margin: 5 }}>
                            {exp.desc}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Experience;
