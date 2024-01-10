import React from 'react';
import { Box, Typography, Stack, LinearProgress } from '@mui/material';
import { SkillData } from '../../assets/Resume';
import './skill.css';

const Skill = () => {
    const getProgressValue = (leve) => {
        switch (leve) {
            case 'Beginner':
                return 33;
            case 'Intermediate':
                return 66;
            case 'High':
                return 100;
            default:
                return 0;
        }
    };

    const getProgressColor = (leve) => {
        switch (leve) {
            case 'Beginner':
                return '#FFFF00'; // Orange
            case 'Intermediate':
                return '#FFA500'; // Yellow
            case 'High':
                return '#008000'; // Green
            default:
                return '#D3D3D3'; // Light Gray
        }
    };

    return (
        <Stack className="skill-container">
            <Typography variant="h2">Skills</Typography>
            <Box className="skill-page" spacing={2}>
                {SkillData.map(skill => (
                    <Stack key={skill.id} className="skill" spacing={1}>
                        <img
                            src={skill.icon}
                            alt="Loading..."
                            style={{
                                width: 60,
                                height: 70,
                                objectFit: "contain",
                                paddingLeft: 20,
                            }}
                        />
                        <Typography variant="h5">{skill.name}</Typography>
                        <Typography variant="body2">{skill.leve}</Typography>
                        <Box sx={{ width: '100%', paddingTop: 1 }}>
                            <LinearProgress
                                variant="determinate"
                                value={getProgressValue(skill.leve)}
                                sx={{
                                    height: 16,
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: getProgressColor(skill.leve)
                                    }
                                }}
                            />
                        </Box>
                    </Stack>
                ))}
            </Box>
        </Stack>
    );
};

export default Skill;