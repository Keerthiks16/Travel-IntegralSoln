import accommodation1 from "../assets/images/accommodation1.png";
import accommodation2 from "../assets/images/accommodation2.png";

const accommodations = [
  {
    id: 1,
    name: "Shinagawa Prince Hotel",
    checkIn: "26/11/2025, 1:15 pm",
    checkOut: "28/11/2025, 11:30 am",
    nights: 2,
    price: "$341.89",
    image: accommodation1,
    confirmed: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Mercure Tokyo Hotel",
    checkIn: "28/11/2025, 1:00 pm",
    checkOut: "30/11/2025, 10:00 am",
    nights: 2,
    price: "$298.21",
    image: accommodation2,
    confirmed: false,
    rating: 4.2,
  },
];

export default accommodations;
