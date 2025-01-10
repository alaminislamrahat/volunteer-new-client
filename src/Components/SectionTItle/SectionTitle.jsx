import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center my-16 px-6 sm:px-8 md:px-16">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-[#4E896D] mb-4 relative inline-block">
                {/* Glowing neon text */}
                <span className="text-shadow-neon uppercase">  {title} </span>
                
                {/* Glowing underline animation */}
               
            </h2>

            {/* Subtitle */}
            {subTitle && (
                <p className="text-sm sm:text-lg md:text-xl text-[#e5b546] font-bold max-w-3xl mx-auto mt-4 px-6 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    --{subTitle}-- 
                </p>
            )}

            {/* Cyberpunk-inspired line */}
            <div className="mt-8">
                <div className="w-24 sm:w-32 md:w-40 h-1 bg-[#e5b546] mx-auto rounded-full shadow-lg"></div>
            </div>
        </div>
    );
};

export default SectionTitle;
