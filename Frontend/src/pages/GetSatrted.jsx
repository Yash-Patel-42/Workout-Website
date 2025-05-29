import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Landing() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 transition-colors duration-300
      ${isDark 
        ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
        : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
      
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Your Personal Fitness Journey
          </span>
        </h1>
        
        <p className={`text-lg sm:text-xl mb-8 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Get a customized workout plan tailored to your goals, equipment, and fitness level.
          Our AI-powered system creates the perfect routine just for you.
        </p>

        <button
          onClick={() => navigate('/questionnaire')}
          className="relative group inline-block"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
          <div className={`relative px-8 py-4 rounded-lg transition duration-300
            ${isDark 
              ? 'bg-black group-hover:bg-black/95' 
              : 'bg-white group-hover:bg-white/95'}`}>
            <span className="relative text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Get Started →
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Landing; 