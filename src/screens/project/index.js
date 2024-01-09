import React from 'react';
import { ProjectData } from '../../assets/Resume';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { PROJECT_COLUMNS } from '../../constants/Table/projectTable';
import './project.css';

const Project = () => {
    return (
        <TableContainer component={Paper} className="project-container">
            <Typography variant='h6' className="project-text" >Project</Typography>
            <Table>
                <TableHead className="project-page">
                    <TableRow>
                        {PROJECT_COLUMNS.map((column) => (
                            <TableCell className="project-text">{column.headerName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ProjectData.map((row) => (
                        <TableRow>
                            {PROJECT_COLUMNS.map((column) => (
                                <TableCell>{row[column.field]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Project;