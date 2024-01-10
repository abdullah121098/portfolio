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
                return '#FFA500'; // Orange
            case 'Intermediate':
                return '#FFFF00'; // Yellow
            case 'High':
                return '#008000'; // Green
            default:
                return '#D3D3D3'; // Light Gray
        }
    };

    return (
        <Stack className='skill-container'>
            <Box className='skill-page'>
                <Typography variant="h4" align="center">Skills</Typography>
                <Stack direction={{ xs: 'column', sm: 'row', }} className='skill' spacing={2}>
                    {SkillData.map(skill => (
                        <Stack key={skill.id} spacing={1} sx={{ margin: 5, padding: 5 }}>
                            <img
                                src={skill.icon}
                                alt="Loading..."
                                style={{
                                    width: 60,
                                    height: 70,
                                    objectFit: "contain",
                                }}
                            />
                            <Typography variant="h5">{skill.name}</Typography>
                            <Box sx={{ width: '100%', paddingTop: 1 }}>
                                <LinearProgress
                                    variant="determinate"
                                    value={getProgressValue(skill.leve)}
                                    sx={{
                                        '& .MuiLinearProgress-bar': {
                                            backgroundColor: getProgressColor(skill.leve)
                                        }
                                    }}
                                />
                            </Box>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};

export default Skill;