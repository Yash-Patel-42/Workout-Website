import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { generateWorkoutPlan } from '../services/geminiService';

const fitnessGoals = [
  "Weight Loss",
  "Muscle Gain",
  "Strength",
  "Endurance",
  "Flexibility",
  "General Fitness",
  "Athletic Performance"
];

const equipmentOptions = [
  "None (Bodyweight Only)",
  "Dumbbells",
  "Resistance Bands",
  "Pull-up Bar",
  "Bench",
  "Full Gym Access"
];

const exerciseTypes = [
  "Cardio",
  "Weight Training",
  "Calisthenics",
  "HIIT",
  "Yoga",
  "Pilates"
];

const basicExercises = [
  "Push-ups",
  "Pull-ups",
  "Squats",
  "Lunges",
  "Planks",
  "Burpees"
];

const fitnessLevels = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Elite"
];

function Questionnaire() {
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goals: [],
    age: '',
    equipment: [],
    weight: '',
    fitnessLevel: '',
    exerciseTypes: [],
    basicExercises: []
  });

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSingleSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = async () => {
    if (step < 7) {
      setStep(prev => prev + 1);
    } else {
      try {
        // Navigate to workout plan page with form data
        navigate('/workout-plan', { state: { formData } });
      } catch (error) {
        console.error('Error navigating to workout plan:', error);
        // Show error message to user
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">What are your fitness goals?</h2>
            <div className="grid grid-cols-2 gap-4">
              {fitnessGoals.map(goal => (
                <button
                  key={goal}
                  onClick={() => handleMultiSelect('goals', goal)}
                  className={`p-4 rounded-lg transition-all duration-200 ${
                    formData.goals.includes(goal)
                      ? 'bg-indigo-500 text-white'
                      : isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">What's your age?</h2>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange('age', e.target.value)}
              className={`w-full p-4 rounded-lg ${
                isDark 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}
              placeholder="Enter your age"
              min="1"
              max="120"
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">What equipment do you have access to?</h2>
            <div className="grid grid-cols-2 gap-4">
              {equipmentOptions.map(equipment => (
                <button
                  key={equipment}
                  onClick={() => handleMultiSelect('equipment', equipment)}
                  className={`p-4 rounded-lg transition-all duration-200 ${
                    formData.equipment.includes(equipment)
                      ? 'bg-indigo-500 text-white'
                      : isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {equipment}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">What's your current weight? (in kg)</h2>
            <input
              type="number"
              value={formData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              className={`w-full p-4 rounded-lg ${
                isDark 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}
              placeholder="Enter your weight in kg"
              min="1"
              max="300"
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">What's your current fitness level?</h2>
            <div className="grid grid-cols-2 gap-4">
              {fitnessLevels.map(level => (
                <button
                  key={level}
                  onClick={() => handleSingleSelect('fitnessLevel', level)}
                  className={`p-4 rounded-lg transition-all duration-200 ${
                    formData.fitnessLevel === level
                      ? 'bg-indigo-500 text-white'
                      : isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">What types of exercise would you like to include?</h2>
            <div className="grid grid-cols-2 gap-4">
              {exerciseTypes.map(type => (
                <button
                  key={type}
                  onClick={() => handleMultiSelect('exerciseTypes', type)}
                  className={`p-4 rounded-lg transition-all duration-200 ${
                    formData.exerciseTypes.includes(type)
                      ? 'bg-indigo-500 text-white'
                      : isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Which of these exercises can you perform?</h2>
            <div className="grid grid-cols-2 gap-4">
              {basicExercises.map(exercise => (
                <button
                  key={exercise}
                  onClick={() => handleMultiSelect('basicExercises', exercise)}
                  className={`p-4 rounded-lg transition-all duration-200 ${
                    formData.basicExercises.includes(exercise)
                      ? 'bg-indigo-500 text-white'
                      : isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {exercise}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen pt-20 px-4 transition-colors duration-300
      ${isDark 
        ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
        : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="h-2 w-full bg-gray-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${(step / 7) * 100}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-500">Step {step} of 7</div>
        </div>

        {/* Question content */}
        {renderStep()}

        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={handleBack}
            className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
              step === 1
                ? 'opacity-50 cursor-not-allowed'
                : isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            disabled={step === 1}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:opacity-90 transition-opacity duration-200"
          >
            {step === 7 ? 'Generate Plan' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questionnaire; 