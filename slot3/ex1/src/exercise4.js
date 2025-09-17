const ages = [33, 12, 20, 16];

// Sử dụng destructuring để lấy first, bỏ qua phần tử thứ 2, lấy third (mặc định 0 nếu không tồn tại), và restAges
const [first, , third = 0, ...restAges] = ages;

// In kết quả
console.log("first =", first); // 33
console.log("third =", third); // 20
console.log("restAges =", restAges); // [16]