function Home() {
  const workouts = [
    {
      day: "Day-1 (01/04/2024)",
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
      day: "Day-2 (02/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Cx1j1L0I-7I&feature=youtu.be",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=NY1P6AbBtEw&feature=youtu.be",
        },
      ],
    },
    {
      day: "Day-3 (03/04/2024)",
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=shzF_vz3nVg&feature=youtu.be",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=Z6e3ORt64V0&feature=youtu.be",
        },
      ],
    },
    {
      day: "Day-4 (04/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=wT4va1ZrFWY&feature=youtu.be",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=EUj1zW5cWbk&feature=youtu.be",
        },
      ],
    },
    {
      day: "Day-5 (05/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=thfLz5ymNEw&feature=youtu.be",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=RHJxRzqvPZ4&feature=youtu.be",
        },
      ],
    },
    {
      day: "Day-6 (06/04/2024)",
      videos: [
        {
          title: "30:HIIT",
          url: "https://www.youtube.com/watch?v=F3VuRqrGAlU",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=NY1P6AbBtEw",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
      ],
    },
    {
      day: "Day-7 (07/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=wT4va1ZrFWY",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=EUj1zW5cWbk",
        },
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=thfLz5ymNEw",
        },
      ],
    },
    {
      day: "Day-8 (08/04/2024)",
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=shzF_vz3nVg",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=Z6e3ORt64V0",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=RHJxRzqvPZ4",
        },
      ],
    },
    {
      day: "Day-9 (09/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=wT4va1ZrFWY",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=EUj1zW5cWbk",
        },
      ],
    },
    {
      day: "Day-10 (10/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=thfLz5ymNEw",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=RHJxRzqvPZ4",
        },
      ],
    },
    {
      day: "Day-11 (11/04/2024)",
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=shzF_vz3nVg",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=Z6e3ORt64V0",
        },
      ],
    },
    {
      day: "Day-12 (12/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
      ],
    },
    {
      day: "Day-13 (13/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Cx1j1L0I-7I",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=NY1P6AbBtEw",
        },
      ],
    },
    {
      day: "Day-14 (14/04/2024)",
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=shzF_vz3nVg",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=Z6e3ORt64V0",
        },
      ],
    },
    {
      day: "Day-15 (15/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
      ],
    },
    {
      day: "Day-16 (16/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=thfLz5ymNEw",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=RHJxRzqvPZ4",
        },
      ],
    },
    {
      day: "Day-17 (17/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=wT4va1ZrFWY",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=EUj1zW5cWbk",
        },
      ],
    },
    {
      day: "Day-18 (18/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Cx1j1L0I-7I",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=NY1P6AbBtEw",
        },
      ],
    },
    {
      day: "Day-19 (19/04/2024)",
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=shzF_vz3nVg",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=Z6e3ORt64V0",
        },
      ],
    },
    {
      day: "Day-20 (20/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
      ],
    },
    {
      day: "Day-21 (21/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=thfLz5ymNEw",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=RHJxRzqvPZ4",
        },
      ],
    },
    {
      day: "Day-22 (22/04/2024)",
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=shzF_vz3nVg",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=Z6e3ORt64V0",
        },
      ],
    },
    {
      day: "Day-23 (23/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=wT4va1ZrFWY",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=EUj1zW5cWbk",
        },
      ],
    },
    {
      day: "Day-24 (24/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Cx1j1L0I-7I",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=NY1P6AbBtEw",
        },
      ],
    },
    {
      day: "Day-25 (25/04/2024)",
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=shzF_vz3nVg",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=Z6e3ORt64V0",
        },
      ],
    },
    {
      day: "Day-26 (26/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=xXC8mbDr9zI",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=JfSee0Q-vRQ",
        },
      ],
    },
    {
      day: "Day-27 (27/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=thfLz5ymNEw",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=RHJxRzqvPZ4",
        },
      ],
    },
    {
      day: "Day-28 (28/04/2024)",
      videos: [
        {
          title: "Chest",
          url: "https://www.youtube.com/watch?v=wT4va1ZrFWY",
        },
        {
          title: "Triceps",
          url: "https://www.youtube.com/watch?v=EUj1zW5cWbk",
        },
      ],
    },
    {
      day: "Day-29 (29/04/2024)",
      videos: [
        {
          title: "Legs",
          url: "https://www.youtube.com/watch?v=shzF_vz3nVg",
        },
        {
          title: "Shoulders",
          url: "https://www.youtube.com/watch?v=Z6e3ORt64V0",
        },
      ],
    },
    {
      day: "Day-30 (30/04/2024)",
      videos: [
        {
          title: "Back",
          url: "https://www.youtube.com/watch?v=Cx1j1L0I-7I",
        },
        {
          title: "Biceps",
          url: "https://www.youtube.com/watch?v=NY1P6AbBtEw",
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
