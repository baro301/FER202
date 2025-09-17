const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 22 },
  { name: "Cathy", age: 15 },
  { name: "David", age: 12 },
  { name: "Eva", age: 13 }
];

// Lọc những người tuổi từ 13 đến 19 và map sang chuỗi "Name (Age)"
const teens = people
  .filter(person => person.age >= 13 && person.age <= 19) // Lọc người tuổi teen
  .map(person => `${person.name} (${person.age})`); // Map sang chuỗi "Name (Age)"

// In ra từng dòng
teens.forEach(teen => console.log(teen));