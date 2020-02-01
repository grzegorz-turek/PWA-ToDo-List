import React from 'react';
import List from '../../features/List/ListContainer';
import NavBar from '../../features/NavBar/NavBarContainer';
import './MainLayout.scss';

const MainLayout = () => (
    <div className='main-layout'>
        <NavBar />
        <List />
    </div>
);

export default MainLayout;