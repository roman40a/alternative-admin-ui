import React from 'react';
import { NavBar } from './nav-bar.component';
import { Container } from '@material-ui/core';

export const Home: React.FC = () => (
    <div>
        <NavBar />
        <Container maxWidth="sm">Home</Container>
    </div>
);
