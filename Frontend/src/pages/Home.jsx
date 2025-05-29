import { workouts } from '../data/workouts';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { isDark, isDynamicLayout } = useTheme();
  
  // Generate random layout pattern on component mount
  const getRandomLayout = (index) => {
    if (!isDynamicLayout) return ''; // Return default size if dynamic layout is disabled
    
    // Use a combination of index and random number for variety
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

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cardWidth = card.offsetWidth || 0;
    const cardHeight = card.offsetHeight || 0;
    const SCALE_X = 7;
    const SCALE_Y = 12;

    // Update the gradient position based on mouse movement
    const gradientX = (x / cardWidth) * 100;
    const gradientY = (y / cardHeight) * 100;
    card.style.setProperty('--gradient-x', `${gradientX}%`);
    card.style.setProperty('--gradient-y', `${gradientY}%`);

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

  return (
    <div className={`relative min-h-screen pt-20 pb-8 px-4 transition-colors duration-300
      ${isDark 
        ? 'bg-gradient-to-b from-black via-black/98 to-black/95 text-white' 
        : 'bg-gradient-to-b from-white via-gray-50/98 to-gray-100/95 text-gray-900'}`}>
      {/* Top Gradient Buttons */}
      <div className="relative z-10 mb-12 flex flex-wrap gap-3 sm:gap-4 justify-center">
        {[
          {
            text: "20:HIIT",
            link: "https://youtu.be/HIsNcr1-TeY",
            gradient: "from-indigo-400 via-purple-400 to-pink-400",
          },
          {
            text: "Warmup",
            link: "https://youtu.be/h-YdfZ-dK-o",
            gradient: "from-purple-400 via-pink-400 to-rose-400",
          },
          {
            text: "Cooldown",
            link: "https://youtu.be/Gs9xWnKI4JU",
            gradient: "from-blue-400 via-indigo-400 to-purple-400",
          },
          {
            text: "30:HIIT",
            link: "https://youtu.be/F3VuRqrGAlU",
            gradient: "from-rose-400 via-pink-400 to-purple-400",
          },
        ].map(({ text, link, gradient }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            {/* Gradient Border Container */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300`} />
            
            {/* Button Content */}
            <div className={`relative px-5 sm:px-6 py-2.5 rounded-full transition duration-300
              ${isDark 
                ? 'bg-black group-hover:bg-black/95' 
                : 'bg-white group-hover:bg-white/95'}`}>
              <span className="relative text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                {text}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Workout Cards with animated borders */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {workouts.map((workout, index) => (
          <div
            key={index}
            className={`relative rounded-2xl animated-border p-[2px] ${getRandomLayout(index)}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget.querySelector('.card-inner'))}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget.querySelector('.card-inner'))}
          >
            <div className="card-inner rounded-2xl h-full">
              <div className="p-4 sm:p-6 h-full">
                <div className="card-content h-full flex flex-col">
                  <h2 className={`font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 ${
                    getRandomLayout(index).includes('col-span-2') ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
                  }`}>
                    {workout.day}
                  </h2>
                  <ul className={`space-y-2 flex-grow ${
                    getRandomLayout(index).includes('col-span-2') ? 'sm:space-y-4' : ''
                  }`}>
                    {workout.videos.map((vid, i) => (
                      <li key={i} className={`${
                        getRandomLayout(index).includes('col-span-2') ? 'sm:text-lg' : ''
                      }`}>
                        <a
                          href={vid.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors flex items-center gap-2 group
                            ${isDark 
                              ? 'text-gray-300 hover:text-indigo-400' 
                              : 'text-gray-600 hover:text-indigo-600'}`}
                        >
                          <span className="text-indigo-500 transform group-hover:scale-110 transition-transform">▶</span>
                          <span className="hover:underline line-clamp-1">{vid.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  {getRandomLayout(index).includes('col-span-2') && (
                    <div className={`mt-4 pt-4 border-t transition-colors duration-300
                      ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {getRandomLayout(index).includes('row-span-2') ? 'Featured Workout Day' : 'Recommended'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-12 text-sm text-center max-w-2xl mx-auto px-4">
        <p className="mb-2">
          Original Source:{" "}
          <a
            className="text-indigo-500 hover:text-indigo-400 hover:underline"
            href="https://www.midasmvmt.com/workouts/gogeta" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Gogeta | MIDASMVMT
          </a>
        </p>
        <p className={`mb-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
          This site is for ease of use. No data theft intended.
        </p>
        <p className={isDark ? 'text-gray-500' : 'text-gray-600'}>
          Built by{" "}
          <span className="text-indigo-500">Yash Patel</span> | Contact:{" "}
          <a href="mailto:yashpatel040205@gmail.com" className="text-indigo-500 hover:underline">
            yashpatel040205@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Home;