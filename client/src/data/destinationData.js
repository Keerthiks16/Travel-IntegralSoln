export const destinations = [
  {
    city: "Paris",
    dates: "10.03.2024 - 16.03.2024",
    duration: "7 Days",
    groupSize: "Couple",
    people: { male: 1, female: 1 },
    flight: { from: "Mumbai, India", to: "Charles de Gaulle, Paris" },
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", // Eiffel Tower
    accommodations: [
      {
        name: "Hotel Le Meurice",
        image: "https://images.unsplash.com/photo-1578898887834-369c4e70c0f0",
        rating: "4.8 Excellent",
        checkIn: "10/03/2024, 2:00 pm",
        checkOut: "13/03/2024, 11:00 am",
        nights: 3,
        status: "Confirmed",
      },
    ],
    activities: [
      {
        name: "Louvre Museum Tour",
        timing: "10:00 am Morning",
        duration: "3 hours",
        pickup: "Hotel Lobby",
      },
      {
        name: "Seine River Cruise",
        timing: "7:00 pm Evening",
        duration: "2 hours",
        pickup: "Pier 3",
      },
    ],
  },
  {
    city: "New York",
    dates: "05.05.2024 - 10.05.2024",
    duration: "6 Days",
    groupSize: "Friends",
    people: { male: 3, female: 2 },
    flight: { from: "Delhi, India", to: "JFK, New York" },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/960px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg", // NYC skyline
    accommodations: [
      {
        name: "Marriott Marquis",
        image: "https://images.unsplash.com/photo-1616529730574-62ff68d57f36",
        rating: "4.5 Very Good",
        checkIn: "05/05/2024, 3:00 pm",
        checkOut: "10/05/2024, 11:00 am",
        nights: 5,
        status: "Confirmed",
      },
    ],
    activities: [
      {
        name: "Statue of Liberty Tour",
        timing: "9:00 am Morning",
        duration: "4 hours",
        pickup: "Hotel Lobby",
      },
      {
        name: "Broadway Musical Night",
        timing: "8:00 pm Evening",
        duration: "3 hours",
        pickup: "Self-arrival",
      },
    ],
  },
  {
    city: "Bali",
    dates: "15.07.2024 - 21.07.2024",
    duration: "7 Days",
    groupSize: "Family",
    people: { male: 2, female: 3 },
    flight: { from: "Chennai, India", to: "Ngurah Rai, Bali" },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945", // Bali landscape
    accommodations: [
      {
        name: "The Mulia Resort",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
        rating: "4.9 Superb",
        checkIn: "15/07/2024, 1:00 pm",
        checkOut: "21/07/2024, 11:30 am",
        nights: 6,
        status: "Confirmed",
      },
    ],
    activities: [
      {
        name: "Ubud Monkey Forest",
        timing: "11:00 am Morning",
        duration: "2 hours",
        pickup: "Hotel Lobby",
      },
      {
        name: "Sunset at Tanah Lot Temple",
        timing: "5:30 pm Evening",
        duration: "3 hours",
        pickup: "Private Cab",
      },
    ],
  },
  {
    city: "London",
    dates: "20.09.2024 - 26.09.2024",
    duration: "7 Days",
    groupSize: "Solo",
    people: { male: 1, female: 0 },
    flight: { from: "Bangalore, India", to: "Heathrow, London" },
    image:
      "https://static.leonardo-hotels.com/image/london-cityguide-do_2e0b957996a4658e2a9e7e15ced9d75c_2048x1049_desktop_2.webp", // Big Ben
    accommodations: [
      {
        name: "The Ritz London",
        image: "https://images.unsplash.com/photo-1582719478185-2197b960aa5f",
        rating: "4.7 Excellent",
        checkIn: "20/09/2024, 2:00 pm",
        checkOut: "26/09/2024, 11:00 am",
        nights: 6,
        status: "Confirmed",
      },
    ],
    activities: [
      {
        name: "Tower of London Tour",
        timing: "10:30 am Morning",
        duration: "3 hours",
        pickup: "Hotel Lobby",
      },
      {
        name: "London Eye Experience",
        timing: "4:00 pm Afternoon",
        duration: "2 hours",
        pickup: "Self-arrival",
      },
    ],
  },
];
