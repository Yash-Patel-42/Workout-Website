import React from 'react';

const Personal = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-black via-black/98 to-black/95 pt-20 pb-8 px-4 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Personal Training
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-15">
                    Personalized workout plans coming soon!
                </p>
                <div className="w-24 h-24 mx-auto mb-8">
                    <div className="animate-spin rounded-full border-t-4 border-indigo-500 border-opacity-50"></div>
                </div>
                <p className="text-base sm:text-lg text-gray-400">
                    Get ready for customized workout routines tailored to your fitness goals
                </p>
                <div className="mt-8 space-y-4">
                    <div className="p-4 bg-black/30 rounded-lg border border-indigo-500/20">
                        <h2 className="text-xl font-semibold text-indigo-400 mb-2">Features Coming Soon</h2>
                        <ul className="text-gray-300 space-y-2">
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