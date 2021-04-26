import React from 'react';
import { HomePageContainer } from './homepage.styles';
import Directory from '../components/diretory/directory-components';

const HomePage = () => (
    <HomePageContainer>
        <div className="directory-menu">
            <Directory />
        </div>
    </HomePageContainer>
);

export default HomePage;