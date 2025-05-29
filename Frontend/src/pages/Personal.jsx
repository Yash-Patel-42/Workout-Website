import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Personal = () => {
    const { isDark } = useTheme();
    
    return (
        <div className={`relative min-h-screen pt-20 pb-8 px-4 transition-colors duration-300
            ${isDark 
                ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
                : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Personal Training
                </h1>
                <p className={`text-lg sm:text-xl mb-15 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    Personalized workout plans coming soon!
                </p>
                <div className="w-24 h-24 mx-auto mb-8">
                    <div className="animate-spin rounded-full border-t-4 border-indigo-500 border-opacity-50"></div>
                </div>
                <p className={`text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Get ready for customized workout routines tailored to your fitness goals
                </p>
                <div className="mt-8 space-y-4">
                    <div className={`p-4 rounded-lg border transition-colors duration-300
                        ${isDark 
                            ? 'bg-black/30 border-indigo-500/20' 
                            : 'bg-white/30 border-indigo-500/30'}`}>
                        <h2 className="text-xl font-semibold text-indigo-500 mb-2">Features Coming Soon</h2>
                        <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <li>• Personalized Workout Plans</li>
                            <li>• Progress Tracking</li>
                            <li>• One-on-One Coaching</li>
                            <li>• Nutrition Guidance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;