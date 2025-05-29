import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Personal = () => {
    const { isDark } = useTheme();
    
    const currentFeatures = [
        {
            title: "AI Plan Generation",
            description: "Generate personalized workout plans using advanced AI",
            status: "Available",
            icon: "🤖"
        },
        {
            title: "Equipment Selection",
            description: "Choose from various equipment options for your workouts",
            status: "Available",
            icon: "💪"
        }
    ];

    const upcomingFeatures = [
        {
            title: "Progress Tracking",
            description: "Track your workout progress and achievements",
            eta: "Coming Soon",
            icon: "📊"
        },
        {
            title: "Workout History",
            description: "View and analyze your past workout sessions",
            eta: "Coming Soon",
            icon: "📅"
        },
        {
            title: "Personal Score",
            description: "Get a personalized fitness score based on your performance",
            eta: "In Development",
            icon: "🎯"
        },
        {
            title: "Exercise Stats",
            description: "Detailed statistics for each exercise and workout",
            eta: "In Development",
            icon: "📈"
        },
        {
            title: "Nutrition Tracking",
            description: "Track your daily nutrition and meal plans",
            eta: "Planned",
            icon: "🥗"
        },
        {
            title: "Community Features",
            description: "Connect with other fitness enthusiasts",
            eta: "Planned",
            icon: "👥"
        }
    ];

    return (
        <div className={`relative min-h-screen pt-20 pb-8 px-4 transition-colors duration-300
            ${isDark 
                ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
                : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
            
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
                >
                    Personal Dashboard
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`text-lg sm:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                    Track your fitness journey and achieve your goals
                </motion.p>
            </div>

            {/* Current Features */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-6xl mx-auto mb-12"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Available Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentFeatures.map((feature, index) => (
                        <div 
                            key={index}
                            className={`p-6 rounded-xl border transition-colors duration-300 ${
                                isDark 
                                    ? 'bg-gray-900/50 border-indigo-500/20' 
                                    : 'bg-white/50 border-indigo-500/30'
                            }`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="text-3xl">{feature.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                        {feature.title}
                                    </h3>
                                    <p className={`mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {feature.description}
                                    </p>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-500">
                                        {feature.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Upcoming Features */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Coming Soon
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {upcomingFeatures.map((feature, index) => (
                        <div 
                            key={index}
                            className={`p-6 rounded-xl border transition-colors duration-300 ${
                                isDark 
                                    ? 'bg-gray-900/30 border-gray-800' 
                                    : 'bg-white/30 border-gray-200'
                            }`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="text-3xl">{feature.icon}</div>
                                <div>
                                    <h3 className={`text-lg font-semibold mb-2 ${
                                        isDark ? 'text-gray-200' : 'text-gray-800'
                                    }`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {feature.description}
                                    </p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                                        feature.eta === 'Coming Soon'
                                            ? 'bg-indigo-500/10 text-indigo-500'
                                            : feature.eta === 'In Development'
                                                ? 'bg-yellow-500/10 text-yellow-500'
                                                : 'bg-gray-500/10 text-gray-500'
                                    }`}>
                                        {feature.eta}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Beta Notice */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl mx-auto mt-12 text-center"
            >
                <div className={`p-4 rounded-lg ${
                    isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'
                }`}>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        🚀 We're constantly adding new features to enhance your fitness journey. 
                        Stay tuned for updates!
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Personal;