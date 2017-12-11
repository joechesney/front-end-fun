"use strict";

// Data interaction stuff
const carData = [
  {
    image: "rogue.jpg",
    purchased: false,
    description:
      "This is an immaculate 2006 Nissan Rogue with only 25000 miles on it. Leather seats, power everything.",
    make: "Nissan",
    model: "Rogue",
    year: "2006",
    price: "8,999",
    color: "FireBrick"
  },
  {
    image: "gremlin.jpg",
    description:
      "Be your own Wayne or Garth in this POS that's unsafe at any speed. Engine boasts two working cylinders and a chipmunk nest. Loaded with an 8-track player that hasn't worked since ABBA released their greatest hits.",
    purchased: false,
    make: "AMC",
    model: "Gremlin",
    year: "1976",
    price: "12,898",
    color: "Sienna"
  },
  {
    image: "unicycle.jpg",
    description:
      "Perfect for your commute to clown college. New tire, leather seat, low miles.",
    purchased: true,
    make: "Acme",
    model: "Solo",
    year: "1989",
    price: "50",
    color: "Silver"
  }
];

const getInventory = () => carData;
const addInventory = carObj => {
  carData.push(carObj);
};

module.exports = {getInventory, addInventory};
