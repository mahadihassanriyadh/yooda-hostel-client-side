import { Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';

const Foods = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Typography variant="h1" gutterBottom component="div">
                    Food Coming ...............
                </Typography>
            </Container>
        </div>
    );
};

export default Foods;