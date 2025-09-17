const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// Sử dụng destructuring để lấy street và city (city có giá trị mặc định là "Unknown City")
const {
  address: { street, city = "Unknown City" }
} = person;

// In kết quả
console.log("street =", street); // Lalaland 12
console.log("city =", city); // Unknown City