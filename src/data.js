/* the data model for filters to manage the state 
   of the selected filters and the
   conditional rendering of the hotels. */
export var filterOptions = [
  { display: "Free Cancellation", key: "hasFreeCancellation" },
  { display: "Breakfast Included", key: "includesBreakfast" },
  { display: "Bestsellers", key: "isBestSeller" },
  { display: "Parking", key: "hasParking" },
  { display: "Pets Allowed", key: "allowsPets" },
  { display: "Room Service", key: "hasRoomService" },
  { display: "Fitness Centre", key: "hasFitnessCenter" }
];

export var hotels = [
  {
    id: 123,
    name: "Holiday Inn Express",
    rating: 8.3,
    reviewCount: 2393,
    pricePerNight: 308.34,
    imageSrc:
      "https://q-ak.bstatic.com/xdata/images/hotel/square600/50830720.webp?k=09768b0ae87f4fa875c8e8893d1c0cc75c98b62fc9fd1242d4a6b7970a9ace06&o=",
    roomsRemaining: 9,
    hasFreeCancellation: true,
    includesBreakfast: true,
    isBestSeller: false,
    hasParking: false,
    allowsPets: false,
    hasRoomService: false,
    hasFitnessCenter: false
  },
  {
    id: 124,
    name: "Hotel Pennsylvania",
    rating: 5.6,
    reviewCount: 40642,
    pricePerNight: 240.0,
    imageSrc:
      "https://q-ak.bstatic.com/xdata/images/hotel/square600/57772519.webp?k=99aea26a10d4489129aedf4fca8dd6f6e444cf8511c36ce96de1e9bf980d3e0e&o=",
    roomsRemaining: 22,
    hasFreeCancellation: false,
    includesBreakfast: true,
    isBestSeller: true,
    hasParking: true,
    allowsPets: false,
    hasRoomService: true,
    hasFitnessCenter: true
  },
  {
    id: 125,
    name: "RIU Plaza New York Times Square",
    rating: 8.7,
    reviewCount: 5301,
    pricePerNight: 314,
    imageSrc:
      "https://q-ak.bstatic.com/xdata/images/hotel/square600/178773353.webp?k=9bd0190ff5a25ce00dac63185dbcb92565380b03e40711f2a243c33cff6ffd87&o=",
    roomsRemaining: 2,
    hasFreeCancellation: false,
    includesBreakfast: false,
    isBestSeller: true,
    hasParking: true,
    allowsPets: false,
    hasRoomService: false,
    hasFitnessCenter: true
  },
  {
    id: 126,
    name: "Dream Downtown",
    rating: 7.7,
    reviewCount: 1519,
    pricePerNight: 427,
    imageSrc:
      "https://q-ak.bstatic.com/xdata/images/hotel/square600/43860055.webp?k=5cb29412068e05723ee6b1c204685c6d3a8fab1c625f741fdc559ee67236674c&o=",
    roomsRemaining: 14,
    hasFreeCancellation: true,
    includesBreakfast: false,
    isBestSeller: false,
    hasParking: false,
    allowsPets: true,
    hasRoomService: false,
    hasFitnessCenter: true
  },
  {
    id: 127,
    name: "Aliz Hotel Times Square",
    rating: 8.5,
    reviewCount: 1271,
    pricePerNight: 289,
    imageSrc:
      "https://r-ak.bstatic.com/xdata/images/hotel/square600/165926262.webp?k=2a08ad467a809bf1a8ebd2f1e2013b6c9693575b9a4cafc9a8cf8d4ee857c398&o=",
    roomsRemaining: 8,
    hasFreeCancellation: true,
    includesBreakfast: false,
    isBestSeller: false,
    hasParking: true,
    allowsPets: false,
    hasRoomService: true,
    hasFitnessCenter: false
  }
];
