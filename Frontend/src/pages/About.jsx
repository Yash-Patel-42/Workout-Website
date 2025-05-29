import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const About = () => {
    const { isDark } = useTheme();

    const features = [
        {
            title: "AI-Powered Workouts",
            description: "Leveraging Google's Gemini AI to create personalized 30-day workout plans tailored to your goals, equipment, and fitness level.",
            icon: "🤖"
        },
        {
            title: "Smart Progression",
            description: "Workouts that adapt to your fitness level, ensuring proper progression from beginner to advanced levels.",
            icon: "📈"
        },
        {
            title: "Equipment Flexible",
            description: "Plans that work with whatever equipment you have, from bodyweight-only to full gym access.",
            icon: "💪"
        },
        {
            title: "Comprehensive Plans",
            description: "Detailed workout instructions including sets, reps, rest periods, and form tips for each exercise.",
            icon: "📋"
        }
    ];

    const technologies = [
        { name: "React", icon: "⚛️", description: "Modern frontend framework for responsive UI" },
        { name: "Gemini AI", icon: "🧠", description: "Advanced AI for workout generation" },
        { name: "TailwindCSS", icon: "🎨", description: "Utility-first CSS framework" },
        { name: "Framer Motion", icon: "✨", description: "Powerful animation library" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className={`relative min-h-screen pt-20 pb-8 px-4 transition-colors duration-300
            ${isDark 
                ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
                : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
            
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl font-bold mb-6"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        Your AI Fitness Partner
                    </span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-lg sm:text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                    FitForge combines artificial intelligence with fitness expertise to create 
                    personalized workout plans that evolve with you.
                </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto mb-16"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
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
                                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Technology Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-6xl mx-auto mb-16"
            >
                <h2 className="text-2xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Powered by Modern Technology
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <div 
                            key={index} 
                            className={`p-6 rounded-xl border transition-colors duration-300 ${
                                isDark 
                                    ? 'bg-gray-900/50 border-indigo-500/20' 
                                    : 'bg-white/50 border-indigo-500/30'
                            }`}
                        >
                            <div className="text-3xl mb-3">{tech.icon}</div>
                            <h3 className={`text-lg font-semibold mb-2 ${
                                isDark ? 'text-gray-200' : 'text-gray-800'
                            }`}>
                                {tech.name}
                            </h3>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {tech.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="max-w-2xl mx-auto text-center"
            >
                <div className={`p-6 rounded-xl border transition-colors duration-300 ${
                    isDark 
                        ? 'bg-gray-900/50 border-indigo-500/20' 
                        : 'bg-white/50 border-indigo-500/30'
                }`}>
                    <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Ready to start your fitness journey?
                    </p>
                    <a 
                        href="/getstarted"
                        className="inline-block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
                    >
                        Create Your Plan →
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default About;