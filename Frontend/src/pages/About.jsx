import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
    const { isDark } = useTheme();
    
    return (
        <div className={`relative min-h-screen pt-20 pb-8 px-4 transition-colors duration-300
            ${isDark 
                ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
                : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Coming Soon
                </h1>
                <p className={`text-lg sm:text-xl mb-15 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
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