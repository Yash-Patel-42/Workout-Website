import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const tips = [
  "Remember to stay hydrated throughout your workout! 💧",
  "A proper warm-up reduces injury risk by 50% 🌟",
  "Music can improve workout performance by up to 15% 🎵",
  "The best time to exercise is when you can do it consistently 🕒",
  "Deep breathing helps reduce workout stress 🫁",
  "It takes 21 days to form a new habit 📅",
  "Rest days are as important as workout days 😴",
  "Small progress is still progress 🌱",
  "Your only competition is yourself 💪",
  "Proper form > Heavy weights 🎯"
];

const miniExercises = [
  {
    name: "Quick Shoulder Rolls",
    instruction: "Roll your shoulders forward 5 times, then backward 5 times",
    duration: "15 seconds",
    emoji: "🔄"
  },
  {
    name: "Desk Push-Ups",
    instruction: "Do 5 push-ups against your desk or wall",
    duration: "20 seconds",
    emoji: "💪"
  },
  {
    name: "Neck Stretches",
    instruction: "Gently tilt your head side to side",
    duration: "15 seconds",
    emoji: "🧘‍♀️"
  },
  {
    name: "Wrist Rotations",
    instruction: "Rotate your wrists 10 times each direction",
    duration: "10 seconds",
    emoji: "🔄"
  },
  {
    name: "Ankle Circles",
    instruction: "Draw circles with your toes, 5 each foot",
    duration: "15 seconds",
    emoji: "⭕"
  }
];

const funFacts = [
  "The word 'gymnasium' comes from the Greek word 'gymnós' meaning naked 🏛️",
  "Laughing for 10-15 minutes burns about 40 calories 😂",
  "Your heart beats about 100,000 times a day ❤️",
  "Muscles make up about 40% of your body weight 💪",
  "The strongest muscle in your body is your tongue 👅",
  "You use 200 muscles to take a single step 🚶",
  "Your body has about 650 muscles 🏃‍♀️",
  "The average person walks about 110,000 miles in their lifetime 👣",
  "Your bones are 4 times stronger than concrete 🦴",
  "Exercise improves brain performance by 5-10% 🧠"
];

const LoadingScreen = () => {
  const { isDark } = useTheme();
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [section, setSection] = useState('tip');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sectionInterval = setInterval(() => {
      setSection(prev => {
        switch(prev) {
          case 'tip': return 'exercise';
          case 'exercise': return 'fact';
          default: return 'tip';
        }
      });
    }, 8000);

    const contentInterval = setInterval(() => {
      setCurrentTipIndex(prev => (prev + 1) % tips.length);
      setCurrentExerciseIndex(prev => (prev + 1) % miniExercises.length);
      setCurrentFactIndex(prev => (prev + 1) % funFacts.length);
    }, 4000);

    // Adjust progress to complete in 2 minutes (120 seconds)
    const TOTAL_TIME = 120; // 2 minutes in seconds
    const UPDATE_INTERVAL = 500; // Update every 0.5 seconds
    const INCREMENT = (100 / (TOTAL_TIME * 1000)) * UPDATE_INTERVAL;

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return Math.min(100, prev + INCREMENT);
      });
    }, UPDATE_INTERVAL);

    return () => {
      clearInterval(sectionInterval);
      clearInterval(contentInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 transition-colors duration-300
      ${isDark 
        ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
        : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
      <div className="relative max-w-md w-full">
        {/* Animated border with gradient */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 animate-pulse" />
        
        <div className={`relative rounded-2xl p-8 transition-colors duration-300 ${
          isDark ? 'bg-black' : 'bg-white'
        }`}>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Creating Your Perfect Workout Plan
              </span>
            </h2>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              This will take 2-3 minutes. While you wait, why not try...
            </p>
          </div>

          {/* Progress Bar with gradient */}
          <div className="relative w-full h-2.5 mb-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Content Section with animations */}
          <AnimatePresence mode="wait">
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[200px] flex flex-col items-center justify-center"
            >
              {section === 'tip' && (
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Quick Tip
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tips[currentTipIndex]}
                  </p>
                </div>
              )}

              {section === 'exercise' && (
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Try This Quick Exercise {miniExercises[currentExerciseIndex].emoji}
                  </h3>
                  <p className={`text-xl font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {miniExercises[currentExerciseIndex].name}
                  </p>
                  <p className={`mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {miniExercises[currentExerciseIndex].instruction}
                  </p>
                  <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Takes only {miniExercises[currentExerciseIndex].duration}
                  </p>
                </div>
              )}

              {section === 'fact' && (
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Fun Fitness Fact
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {funFacts[currentFactIndex]}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Loading Spinner with gradient */}
          <div className="mt-8 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur opacity-75" />
              <motion.div
                className={`relative w-12 h-12 rounded-full border-4 border-t-transparent ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 