import { getTop3Services } from './utilis.js';

const services = [
  { name: "Tutoring", rating: 4.6 },
  { name: "Food Delivery", rating: 4.9 },
  { name: "Tech Support", rating: 4.3 },
  { name: "Child Care", rating: 4.8 }
];

console.log(getTop3Services(services));
