import React from 'react';

const About = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black via-black/98 to-black/95 pt-20 pb-8 px-4 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Coming Soon
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-15">
                    We're working on something awesome for you!
                </p>
                <div className="w-24 h-24 mx-auto mb-8"> 
                    <div className="animate-spin rounded-full border-t-4 border-indigo-500 border-opacity-50"></div>
                </div>
            </div>
        </div>
    );
};

export default About;