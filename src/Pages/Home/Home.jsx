import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../../Components/Doctors/Doctors';
import Services from '../../Components/ProvideServices/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Doctors></Doctors>
            <Services></Services>
        </>

    );
};

export default Home;