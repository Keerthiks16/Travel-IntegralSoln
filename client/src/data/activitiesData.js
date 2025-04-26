import activity1 from "../assets/images/activity1.png";
import activity2 from "../assets/images/activity2.png";
import activity3 from "../assets/images/activity3.png";

const activities = [
  {
    day: 1,
    date: "27/11/2025",
    count: 15,
    items: [
      {
        id: 1,
        name: "Senso-ji Temple & Nakamise Shopping Street",
        time: "9:15 am Morning",
        duration: "2 hours",
        location: "From Hotel",
        image: activity1,
      },
      {
        id: 2,
        name: "Tokyo Sky Tree",
        time: "1:00 pm Afternoon",
        duration: "3 hours",
        location: "Near Iriya-Nebukawa Street",
        image: activity2,
      },
      {
        id: 3,
        name: "Kimono Wearing",
        time: "Anytime before 6:00pm",
        duration: "1.5 hours",
        location: "From Hotel",
        image: activity3,
      },
    ],
  },
  {
    day: 2,
    date: "28/11/2025",
    count: 8,
    items: [],
  },
  {
    day: 3,
    date: "29/11/2025",
    count: 9,
    items: [],
  },
  {
    day: 4,
    date: "30/11/2025",
    count: 12,
    items: [],
  },
  {
    day: 5,
    date: "01/12/2025",
    count: 6,
    items: [],
  },
  {
    day: 6,
    date: "02/12/2025",
    count: 4,
    items: [],
  },
];

export default activities;
