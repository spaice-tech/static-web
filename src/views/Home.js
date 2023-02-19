import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Values from '../components/sections/Values';
import FeaturesSplit from '../components/sections/ProductsSplit';
import BusinessTechVision from '../components/sections/BusinessTechVision';
import Cta from '../components/sections/Cta';

const Home = () => {
    //<Hero invertMobile topDivider imageFill className="illustration-section-01/>"
    return (
        <>
            <Hero invertMobile topDivider imageFill  /> 
            <FeaturesTiles topDivider/>
            <BusinessTechVision topDivider />
            <FeaturesSplit invertMobile topDivider imageFill />
            <Values invertMobile topDivider imageFill />
            <Cta split />
        </>
    );
}

export default Home;