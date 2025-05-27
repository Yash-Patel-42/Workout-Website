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

export const workouts = [
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
]; 