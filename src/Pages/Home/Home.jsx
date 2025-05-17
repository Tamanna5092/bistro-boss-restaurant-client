import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import ChefService from '../../components/ChefService/ChefService';
import Featured from '../../components/Featured/Featured';
import Menu from '../../components/Menu/Menu';
import CallUs from '../../components/CallUs/CallUs';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Category></Category>
             <ChefService></ChefService>
             <Menu></Menu>
             <CallUs></CallUs>
             <Featured></Featured>
        </div>
    );
};

export default Home;