import { Container } from '@mui/material';
import React from 'react';
import Header from '../../Header/Header';
import HomeBanner from '../HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <HomeBanner></HomeBanner>
            </Container>

        </div>
    );
};

export default Home;