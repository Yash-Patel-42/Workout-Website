import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateWorkoutPlan } from '../services/geminiService';
import LoadingScreen from '../components/LoadingScreen';
import { useTheme } from '../context/ThemeContext';

const WorkoutPlan = () => {
  const [plan, setPlan] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, isDynamicLayout } = useTheme();

  useEffect(() => {
    const generatePlan = async () => {
      try {
        // Check if we have form data
        if (!location.state?.formData) {
          console.log('No form data found, redirecting to questionnaire');
          navigate('/questionnaire', { replace: true });
          return;
        }

        const workoutPlan = await generateWorkoutPlan(location.state.formData);
        setPlan(workoutPlan);
      } catch (err) {
        console.error('Error generating plan:', err);
        setError(err.message || 'Failed to generate workout plan');
      } finally {
        setIsLoading(false);
      }
    };

    generatePlan();
  }, [location.state, navigate]);

  // Get random layout pattern for cards (same as Home.jsx)
  const getRandomLayout = (index) => {
    if (!isDynamicLayout) return '';
    
    const random = Math.floor(Math.random() * 100);
    const pattern = (random + index) % 4;
    
    switch(pattern) {
      case 0: // Large square (2x2)
        return 'sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2';
      case 1: // Wide rectangle (2x1)
        return 'sm:col-span-2 lg:col-span-2';
      case 2: // Tall rectangle (1x2)
        return 'sm:row-span-2 lg:row-span-2';
      default: // Normal square (1x1)
        return '';
    }
  };

  // Card hover animation handlers (same as Home.jsx)
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cardWidth = card.offsetWidth || 0;
    const cardHeight = card.offsetHeight || 0;
    const SCALE_X = 7;
    const SCALE_Y = 12;

    card.style.setProperty('--gradient-x', `${(x / cardWidth) * 100}%`);
    card.style.setProperty('--gradient-y', `${(y / cardHeight) * 100}%`);

    requestAnimationFrame(() => {
      card.style.transform = `perspective(1000px) rotateX(${
        (y / cardHeight) * -(SCALE_Y * 2) + SCALE_Y
      }deg) rotateY(${
        (x / cardWidth) * (SCALE_X * 2) - SCALE_X
      }deg) translateZ(10px)`;
    });
  };

  const handleMouseLeave = (card) => {
    requestAnimationFrame(() => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300
        ${isDark 
          ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
          : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
        <div className="relative max-w-md w-full">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur opacity-75 animate-pulse" />
          <div className={`relative rounded-2xl p-8 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Oops! Something went wrong
            </h2>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{error}</p>
            <button
              onClick={() => navigate('/questionnaire')}
              className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!plan) {
    return null;
  }

  return (
    <div className={`min-h-screen pt-20 pb-8 px-4 transition-colors duration-300
      ${isDark 
        ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
        : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
      
      {/* Header Section */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Your 30-Day Workout Plan
          </span>
        </h1>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Personalized workouts designed for your fitness goals
        </p>
      </div>

      {/* Workout Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {plan.days.map((day, index) => (
          <div
            key={index}
            className={`relative rounded-2xl animated-border p-[2px] ${getRandomLayout(index)}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget.querySelector('.card-inner'))}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget.querySelector('.card-inner'))}
          >
            <div className="card-inner rounded-2xl h-full">
              <div className="p-4 sm:p-6 h-full">
                <div className="card-content h-full flex flex-col">
                  {/* Day Header */}
                  <h2 className={`font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 ${
                    getRandomLayout(index).includes('col-span-2') ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                  }`}>
                    {day.day}
                  </h2>

                  {/* Focus Area & Difficulty */}
                  <div className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-sm">
                      {day.focus}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{day.difficulty}</span>
                  </div>

                  {/* Exercises List */}
                  <ul className={`space-y-3 flex-grow ${
                    getRandomLayout(index).includes('col-span-2') ? 'sm:space-y-4' : ''
                  }`}>
                    {day.exercises.map((exercise, i) => (
                      <li key={i} className={`${
                        getRandomLayout(index).includes('col-span-2') ? 'sm:text-lg' : ''
                      }`}>
                        <div className={`transition-colors ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          <div className="font-medium mb-1">{exercise.name}</div>
                          <div className="text-sm">
                            {exercise.sets} sets × {exercise.reps}
                            {exercise.weight !== 'bodyweight' && ` • ${exercise.weight}`}
                          </div>
                          {exercise.notes && (
                            <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              {exercise.notes}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Footer with Rest Period */}
                  <div className={`mt-4 pt-4 border-t transition-colors duration-300 ${
                    isDark ? 'border-gray-800' : 'border-gray-200'
                  }`}>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Rest between sets: {day.restPeriod}s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlan; 