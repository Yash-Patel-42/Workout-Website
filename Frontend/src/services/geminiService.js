import axios from 'axios';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MAX_RETRIES = 5; // Increased from 3
const BASE_DELAY = 1000; // 1 second base delay
const MAX_DELAY = 10000; // 10 seconds maximum delay

// Add request throttling
const throttleRequests = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second between requests
};

const cleanupJsonString = (str) => {
  if (!str) {
    console.error('Received empty response from API');
    return null;
  }

  console.log('Raw string to clean:', str);

  try {
    // Remove any markdown code block syntax and extra whitespace
    str = str.replace(/```json\s*/g, '')
      .replace(/```\s*/g, '')
      .trim();
    
    // Ensure the string starts with [ and ends with ]
    if (!str.startsWith('[') || !str.endsWith(']')) {
      console.error('Response is not a valid JSON array');
      return null;
    }
    
    let jsonStr = str;

    // Enhanced pre-cleanup
    jsonStr = jsonStr
      .replace(/[\u2018\u2019\u201C\u201D]/g, '"') // Smart quotes
      .replace(/[\u2013\u2014]/g, '-')             // Em/en dashes
      .replace(/[\u2026]/g, '...')                 // Ellipsis
      .replace(/[^\x20-\x7E\s\[\]{}:,."']/g, '')  // Remove non-printable chars
      .replace(/,\s*([}\]])/g, '$1')              // Remove trailing commas
      .replace(/([{,])\s*}/g, '$1}')              // Fix empty objects
      .replace(/\[\s*\]/g, '[]')                  // Fix empty arrays
      .replace(/"\s*"/g, '" "')                   // Fix empty strings
      .replace(/undefined/g, '""')                // Replace undefined with empty string
      .replace(/null/g, '""');                    // Replace null with empty string

    // Fix property names and values
    const propertyNames = ['day', 'exercises', 'name', 'sets', 'reps', 'weight', 'notes', 'focus', 'difficulty', 'restPeriod'];
    propertyNames.forEach(prop => {
      // Ensure property names are quoted
      jsonStr = jsonStr
        .replace(new RegExp(`([\[{,]\\s*)${prop}:`, 'g'), `$1"${prop}":`)
        .replace(new RegExp(`([\[{,]\\s*)"${prop}"\\s*:`, 'g'), `$1"${prop}":`);
    });

    // Fix string values
    const stringProps = ['day', 'name', 'reps', 'weight', 'notes', 'focus', 'difficulty'];
    stringProps.forEach(prop => {
      jsonStr = jsonStr
        .replace(new RegExp(`"${prop}":\\s*([^",}{\\]]+)([,}\\]])`, 'g'), `"${prop}": "$1"$2`)
        .replace(new RegExp(`"${prop}":\\s*"\\s*([^"]+)\\s*"`, 'g'), `"${prop}": "$1"`);
    });

    // Fix numeric values
    const numericProps = ['sets', 'restPeriod'];
    numericProps.forEach(prop => {
      jsonStr = jsonStr
        .replace(new RegExp(`"${prop}":\\s*"(\\d+)"`, 'g'), `"${prop}": $1`)
        .replace(new RegExp(`"${prop}":(\\d+)`, 'g'), `"${prop}": $1`);
    });

    try {
      const parsed = JSON.parse(jsonStr);
      
      if (!Array.isArray(parsed)) {
        console.error('Parsed data is not an array');
        return null;
      }

      // Transform and validate each day
      const cleanedData = parsed.map((day, index) => {
        // Validate required fields
        if (!day.day || !day.exercises) {
          console.error(`Day ${index + 1} is missing required fields`);
          throw new Error(`Invalid day structure at index ${index}`);
        }

        // Validate exercises array
        if (!Array.isArray(day.exercises) || day.exercises.length === 0) {
          console.error(`Day ${index + 1} has invalid exercises`);
          throw new Error(`Invalid exercises array at day ${index + 1}`);
        }

        return {
          day: String(day.day).replace(/^Day\s+/i, 'Day '),
          exercises: day.exercises.map((exercise, exIndex) => {
            if (!exercise.name) {
              console.error(`Exercise ${exIndex + 1} in day ${index + 1} is missing name`);
              throw new Error(`Invalid exercise at day ${index + 1}, exercise ${exIndex + 1}`);
            }

            return {
              name: String(exercise.name).trim(),
              sets: Math.max(1, Number(exercise.sets) || 3),
              reps: String(exercise.reps || '10-12'),
              weight: String(exercise.weight || 'bodyweight').toLowerCase(),
              notes: String(exercise.notes || '').trim()
            };
          }),
          focus: String(day.focus || 'Full Body').trim(),
          difficulty: String(day.difficulty || 'Beginner').trim(),
          restPeriod: Math.max(30, Number(day.restPeriod) || 60)
        };
      });

      return JSON.stringify(cleanedData, null, 2);
    } catch (error) {
      console.error('JSON validation failed:', error);
      
      if (error instanceof SyntaxError) {
        const position = error.message.match(/position (\d+)/)?.[1];
        if (position) {
          const pos = parseInt(position);
          const context = 200;
          const start = Math.max(0, pos - context);
          const end = Math.min(jsonStr.length, pos + context);
          
          console.error('Error context:', {
            position: pos,
            before: jsonStr.slice(start, pos),
            errorPoint: jsonStr[pos],
            after: jsonStr.slice(pos + 1, end),
            nearbyStructure: jsonStr.slice(Math.max(0, pos - 30), pos + 30)
          });
        }
      }
      
      return null;
    }
  } catch (error) {
    console.error('Error in cleanup process:', error);
    return null;
  }
};

const generateWorkoutChunk = async (formData, startDay, endDay, retryCount = 0) => {
  try {
    await throttleRequests();

    const prompt = `Generate a workout plan for days ${startDay} to ${endDay} based on these preferences:

Goals: ${formData.goals.join(', ')}
Age: ${formData.age}
Available Equipment: ${formData.equipment.join(', ')}
Current Weight: ${formData.weight} kg
Fitness Level: ${formData.fitnessLevel}
Preferred Exercise Types: ${formData.exerciseTypes.join(', ')}
Can Perform Basic Exercises: ${formData.basicExercises.join(', ')}

Return ONLY a JSON array. Format MUST be EXACTLY as shown:
[
  {
    "day": "Day ${startDay}",
    "exercises": [
      {
        "name": "Push-ups",
        "sets": 3,
        "reps": "10-12",
        "weight": "bodyweight",
        "notes": "Keep core tight"
      }
    ],
    "focus": "Upper Body",
    "difficulty": "Beginner",
    "restPeriod": 60
  }
]

CRITICAL FORMATTING RULES:
1. ALL property names must be in "quotes"
2. ALL string values must be in "quotes"
3. numbers (sets, restPeriod) must NOT be in quotes
4. NO comments or extra text
5. EXACT property names as shown
6. Each exercise MUST have ALL properties
7. Focus must match exercise types
8. Difficulty must match fitness level
9. Exercise names must be realistic and match available equipment`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      },
      {
        timeout: 30000, // 30 second timeout
      }
    );

    if (!response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Invalid response structure from Gemini API');
    }

    const generatedText = response.data.candidates[0].content.parts[0].text;
    console.log(`Raw response for days ${startDay}-${endDay}:`, generatedText);

    const cleanJson = cleanupJsonString(generatedText);
    if (!cleanJson) {
      throw new Error(`Failed to extract valid JSON for days ${startDay}-${endDay}`);
    }

    const parsedData = JSON.parse(cleanJson);
    
    if (!Array.isArray(parsedData) || parsedData.length === 0) {
      throw new Error('Response is not a valid array or is empty');
    }

    // Validate each day's data
    parsedData.forEach((day, index) => {
      if (!day.day || !day.exercises || !Array.isArray(day.exercises) || day.exercises.length === 0) {
        throw new Error(`Invalid day structure at index ${index}`);
      }
    });

    return parsedData;
  } catch (error) {
    console.error(`Error generating chunk for days ${startDay}-${endDay} (Attempt ${retryCount + 1}):`, error);

    if (retryCount < MAX_RETRIES) {
      const delay = Math.min(BASE_DELAY * Math.pow(2, retryCount), MAX_DELAY);
      console.log(`Retrying in ${delay/1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      return generateWorkoutChunk(formData, startDay, endDay, retryCount + 1);
    }

    throw error;
  }
};

const generateWorkoutPlan = async (formData) => {
  try {
    const CHUNK_SIZE = 2;
    const totalDays = 30;
    let workoutPlan = { days: [] };
    let failedChunks = [];

    // First pass: try to generate all chunks
    for (let startDay = 1; startDay <= totalDays; startDay += CHUNK_SIZE) {
      const endDay = Math.min(startDay + CHUNK_SIZE - 1, totalDays);
      
      try {
        console.log(`Generating days ${startDay}-${endDay}...`);
        const chunk = await generateWorkoutChunk(formData, startDay, endDay);
        workoutPlan.days.push(...chunk);
      } catch (error) {
        console.error(`Failed to generate chunk ${startDay}-${endDay}, will retry later:`, error);
        failedChunks.push({ startDay, endDay });
      }

      // Add delay between chunks
      if (endDay < totalDays) {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    }

    // Second pass: retry failed chunks with increased timeouts
    for (const chunk of failedChunks) {
      try {
        console.log(`Retrying chunk ${chunk.startDay}-${chunk.endDay}...`);
        const retryChunk = await generateWorkoutChunk(formData, chunk.startDay, chunk.endDay);
        
        // Find the correct position to insert the chunk
        const insertIndex = workoutPlan.days.findIndex(day => 
          parseInt(day.day.match(/\d+/)[0]) > chunk.startDay
        );
        
        if (insertIndex === -1) {
          workoutPlan.days.push(...retryChunk);
        } else {
          workoutPlan.days.splice(insertIndex, 0, ...retryChunk);
        }
      } catch (error) {
        console.error(`Final retry failed for chunk ${chunk.startDay}-${chunk.endDay}:`, error);
        throw new Error(`Failed to generate complete workout plan. Please try again.`);
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Validate and sort the final plan
    workoutPlan.days.sort((a, b) => {
      const dayA = parseInt(a.day.match(/\d+/)[0]);
      const dayB = parseInt(b.day.match(/\d+/)[0]);
      return dayA - dayB;
    });

    if (workoutPlan.days.length !== totalDays) {
      throw new Error(`Generated plan is incomplete. Expected ${totalDays} days, got ${workoutPlan.days.length}`);
    }

    return workoutPlan;
  } catch (error) {
    console.error('Error generating complete workout plan:', error);
    throw error;
  }
};

export { generateWorkoutPlan }; 