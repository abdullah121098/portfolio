// About.jsx
import React from 'react';
import { IntroData } from '../../assets/Resume';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './about.css';

const About = () => {
  return (
    <Box className="about-container">
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Box className="about-page">
        <Card
          sx={{
            display: 'flex',
            width: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {IntroData.map((data, index) => (
            <CardContent key={index}
              style={{ display: 'flex', flexDirection: 'row', flex: 0.8, justifyContent: 'center' }}>
              <CardMedia
                component="img"
                alt="Profile"
                sx={{
                  borderWidth: 1,
                  borderRadius: 20,
                  flex: 1,
                  width: 60,
                  height: '120px',
                }}
                image={data.img}
              />
              <CardContent sx={{ flex: 0.5 }}>
                <Typography variant="body1" color="text.primary">
                  {data.self}
                </Typography>
              </CardContent>
            </CardContent>
          ))}
        </Card>
      </Box>
    </Box>
  );
};

export default About;
