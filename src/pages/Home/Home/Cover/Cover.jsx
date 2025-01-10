import React from 'react';
import { Parallax } from 'react-parallax';
import AboutUs from '../../AboutUs/AboutUs';

const Cover = ({ img }) => {
    return (
        <Parallax
            className="mt-20"
            blur={{ min: -30, max: 30 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={500}
        >
            <div className="hero min-h-[300px] md:min-h-[500px] lg:min-h-[600px] relative">
                <div className="hero-overlay bg-opacity-40 absolute top-0 left-0 w-full h-full"></div>
                <div className="hero-content text-neutral-content text-center px-4 py-8 md:px-8 md:py-16">
                    <AboutUs />
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;
