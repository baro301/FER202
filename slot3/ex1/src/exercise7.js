const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 }
];

// Tạo company0New với start += 1 mà không làm đổi companies[0]
const company0New = { ...companies[0], start: companies[0].start + 1 };

// Viết hàm concatAll(...arrays) trả về mảng gộp của mọi mảng truyền vào
function concatAll(...arrays) {
  return arrays.flat(); // Gộp tất cả các mảng thành một mảng
}

// In kết quả
console.log("companies[0] =", companies[0]); // Không thay đổi
console.log("company0New =", company0New); // start tăng thêm 1

// Kiểm tra hàm concatAll
console.log("concatAll([1,2],[3],[4,5]) =", concatAll([1, 2], [3], [4, 5]));