function Home() {
  // Function to generate dates for the current month
  const generateCurrentMonthDates = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const date = new Date(year, month, day);
      return date.toLocaleDateString('en-GB').split('/').join('/');
    });
  };

  const currentMonthDates = generateCurrentMonthDates();

  const workouts = [
    {
      day: `Day-1 (${currentMonthDates[0]})`,
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI&feature=youtu.be",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ&feature=youtu.be",
        },
      ],
    },
    {
      day: `Day-2 (${currentMonthDates[1]})`,
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=xBUBXAwaavg",
        },
        {
          title: "Biceps & Forearms",
          url: "https://www.youtube.com/watch?v=JyV7mUFSpXs",
        },
      ],
    },
    {
      day: `Day-3 (${currentMonthDates[2]})`,
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=QVaijMZ2mp8",
        },
      ],
    },
    {
      day: `Day-4 (${currentMonthDates[3]})`,
      videos: [
        {
          title: "Abs Workout 1",
          url: "https://www.youtube.com/watch?v=3SUtOSaOn1M",
        },
        {
          title: "Abs Workout 2",
          url: "https://www.youtube.com/watch?v=Wt2nS5WWg5s",
        },
      ],
    },
    {
      day: `Day-5 (${currentMonthDates[4]})`,
      videos: [
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=PxlmMzPqi_4",
        },
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=zxQpfu7fIfc",
        },
      ],
    },
    {
      day: `Day-6 (${currentMonthDates[5]})`,
      videos: [
        {
          title: "Arms",
          url: "https://youtube.com/watch?v=bQ7GJlJ9d_E",
        },
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Sa0sBKUiOvU",
        },
      ],
    },
    {
      day: `Day-7 (${currentMonthDates[6]})`,
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
        {
          title: "Abs",
          url: "https://www.youtube.com/watch?v=3SUtOSaOn1M",
        },
      ],
    },
    {
      day: `Day-8 (${currentMonthDates[7]})`,
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI",
        },
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Sa0sBKUiOvU",
        },
      ],
    },
    {
      day: `Day-9 (${currentMonthDates[8]})`,
      videos: [
        {
          title: "Arms",
          url: "https://www.youtube.com/watch?v=bQ7GJlJ9d_E",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=QVaijMZ2mp8",
        },
      ],
    },
    {
      day: `Day-10 (${currentMonthDates[9]})`,
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
        {
          title: "Legs (Repeat)",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
      ],
    },
    {
      day: `Day-11 (${currentMonthDates[10]})`,
      videos: [
        {
          title: "Abs Workout 1",
          url: "https://www.youtube.com/watch?v=3SUtOSaOn1M",
        },
        {
          title: "Abs Workout 2",
          url: "https://www.youtube.com/watch?v=Wt2nS5WWg5s",
        },
      ],
    },
    {
      day: `Day-12 (${currentMonthDates[11]})`,
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=xBUBXAwaavg",
        },
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=zxQpfu7fIfc",
        },
      ],
    },
    {
      day: `Day-13 (${currentMonthDates[12]})`,
      videos: [
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
        {
          title: "Biceps & Forearms",
          url: "https://www.youtube.com/watch?v=JyV7mUFSpXs",
        },
      ],
    },
    {
      day: `Day-14 (${currentMonthDates[13]})`,
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=QVaijMZ2mp8",
        },
      ],
    },
    {
      day: `Day-15 (${currentMonthDates[14]})`,
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=xBUBXAwaavg",
        },
        {
          title: "Back (Repeat)",
          url: "https://www.youtube.com/watch?v=Sa0sBKUiOvU",
        },
      ],
    },
    {
      day: `Day-16 (${currentMonthDates[15]})`,
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI",
        },
        {
          title: "Chest (Repeat)",
          url: "https://www.youtube.com/watch?v=zxQpfu7fIfc",
        },
      ],
    },
    {
      day: `Day-17 (${currentMonthDates[16]})`,
      videos: [
        {
          title: "Arms",
          url: "https://www.youtube.com/watch?v=bQ7GJlJ9d_E",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=QVaijMZ2mp8",
        },
      ],
    },
    {
      day: `Day-18 (${currentMonthDates[17]})`,
      videos: [
        {
          title: "Abs Workout 1",
          url: "https://www.youtube.com/watch?v=3SUtOSaOn1M",
        },
        {
          title: "Abs Workout 2",
          url: "https://www.youtube.com/watch?v=Wt2nS5WWg5s",
        },
      ],
    },
    {
      day: `Day-19 (${currentMonthDates[18]})`,
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
        {
          title: "Legs (Repeat)",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
      ],
    },
    {
      day: `Day-20 (${currentMonthDates[19]})`,
      videos: [
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=PxlmMzPqi_4",
        },
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Sa0sBKUiOvU",
        },
      ],
    },
    {
      day: `Day-21 (${currentMonthDates[20]})`,
      videos: [
        {
          title: "Arms",
          url: "https://www.youtube.com/watch?v=bQ7GJlJ9d_E",
        },
        {
          title: "Abs",
          url: "https://www.youtube.com/watch?v=3SUtOSaOn1M",
        },
      ],
    },
    {
      day: `Day-22 (${currentMonthDates[21]})`,
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=QVaijMZ2mp8",
        },
      ],
    },
    {
      day: `Day-23 (${currentMonthDates[22]})`,
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=xBUBXAwaavg",
        },
        {
          title: "Biceps & Forearms",
          url: "https://www.youtube.com/watch?v=JyV7mUFSpXs",
        },
      ],
    },
    {
      day: `Day-24 (${currentMonthDates[23]})`,
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
      ],
    },
    {
      day: `Day-25 (${currentMonthDates[24]})`,
      videos: [
        {
          title: "Abs Workout 1",
          url: "https://www.youtube.com/watch?v=3SUtOSaOn1M",
        },
        {
          title: "Abs Workout 2",
          url: "https://www.youtube.com/watch?v=Wt2nS5WWg5s",
        },
      ],
    },
    {
      day: `Day-26 (${currentMonthDates[25]})`,
      videos: [
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=PxlmMzPqi_4",
        },
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Sa0sBKUiOvU",
        },
      ],
    },
    {
      day: `Day-27 (${currentMonthDates[26]})`,
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=zxQpfu7fIfc",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
      ],
    },
    {
      day: `Day-28 (${currentMonthDates[27]})`,
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
        {
          title: "Legs (Repeat)",
          url: "https://www.youtube.com/watch?v=WA23NHfNq-s",
        },
      ],
    },
    {
      day: `Day-29 (${currentMonthDates[28]})`,
      videos: [
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=QVaijMZ2mp8",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
        {
          title: "Biceps & Forearms",
          url: "https://www.youtube.com/watch?v=JyV7mUFSpXs",
        },
      ],
    },
    {
      day: `Day-30 (${currentMonthDates[29]})`,
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI",
        },
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=xBUBXAwaavg",
        },
      ],
    },
  ]

  // Generate random layout pattern on component mount
  const getRandomLayout = (index) => {
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
    <div className="relative min-h-screen bg-gradient-to-b from-black via-black/98 to-black/95 pt-20 pb-8 px-4 text-white">
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
            className="relative group"
          >
            {/* Gradient Border Container */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300`} />
            
            {/* Button Content */}
            <div className="relative px-5 sm:px-6 py-2.5 bg-black rounded-full group-hover:bg-black/95 transition duration-300">
              <span className="relative text-sm sm:text-base text-white">
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
            className={`relative rounded-2xl animated-gradient-border ${getRandomLayout(index)}`}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
          >
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
                        className="text-gray-300 hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                      >
                        <span className="text-indigo-500 transform group-hover:scale-110 transition-transform">▶</span>
                        <span className="hover:underline line-clamp-1">{vid.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
                {getRandomLayout(index).includes('col-span-2') && (
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-sm text-gray-400">
                      {getRandomLayout(index).includes('row-span-2') ? 'Featured Workout Day' : 'Recommended'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-12 text-sm text-center text-gray-400 max-w-2xl mx-auto px-4">
        <p className="mb-2">
          Original Source:{" "}
          <a
            className="text-indigo-400 hover:text-indigo-300 hover:underline"
            href="https://www.midasmvmt.com/workouts/gogeta"
          >
            Gogeta | MIDASMVMT
          </a>
        </p>
        <p className="mb-2 text-gray-500">This site is for ease of use. No data theft intended.</p>
        <p className="text-gray-500">
          Built by{" "}
          <span className="text-indigo-400">Yash Patel</span> | Contact:{" "}
          <a href="mailto:yashpatel040205@gmail.com" className="text-indigo-400 hover:underline">
            yashpatel040205@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Home

