import React from 'react';
import Header from './Header';
import Slider from './Slider';
import SectionTwo from './SectionTwo';
import SectionOne from './SectionOne';
import SectionThree from './SectionThree';

const Home = () => {
    return (
        <div>
            {<Header />}
            {<SectionOne />}
            {<Slider />}
            {<SectionTwo />}
            {<SectionThree />}
        </div>
    )
}

export default Home;