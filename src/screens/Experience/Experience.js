// Experience.jsx
import React from 'react';
import { ExpData } from '../../assets/Resume';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience-container">
            <h1>Experience</h1>
            {ExpData.map((exp, index) => (
                <Card className="experience-card" key={index}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'row', }}>
                        <Box sx={{ flex: 1 }}>
                            <CardHeader avatar={<WorkIcon />} sx={{ marginLeft: 10 }} />
                            <Typography variant='subtitle2' color="text.primary" sx={{ marginLeft: 5 }}>
                                {exp.company}
                            </Typography>
                            <Typography variant='subtitle2' color="text.primary" sx={{ marginLeft: 5 }}>
                                {exp.role}
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant='subtitle2' color="text.primary" sx={{ marginLeft: 5 }}>
                                {exp.duration}
                            </Typography>
                            <Typography variant='subtitle2' color="text.secondary" sx={{ marginLeft: 5 }}>
                                {exp.desc}
                            </Typography>
                        </Box>

                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Experience;
