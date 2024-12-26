import React from 'react';

const SectionTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center my-16 px-6 sm:px-8 md:px-16">
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 mb-4 relative inline-block">
                {/* Glowing neon text */}
                <span className="text-shadow-neon uppercase">  {title} </span>
                
                {/* Glowing underline animation */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-400 to-pink-500 transform scale-x-0 origin-left transition-all duration-500 ease-out group-hover:scale-x-100"></span>
            </h2>

            {/* Subtitle */}
            {subTitle && (
                <p className="text-sm sm:text-lg md:text-xl text-red-500 font-bold max-w-3xl mx-auto mt-4 px-6 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    --{subTitle}-- 
                </p>
            )}

            {/* Cyberpunk-inspired line */}
            <div className="mt-8">
                <div className="w-24 sm:w-32 md:w-40 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto rounded-full shadow-lg"></div>
            </div>
        </div>
    );
};

export default SectionTitle;
