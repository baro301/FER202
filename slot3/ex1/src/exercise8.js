const ages = [33, 12, 20, 16, 15, 19, 25, 13, 18, 22];

// Sử dụng reduce để tính tổng, min, max và đếm theo nhóm
const stats = ages.reduce(
  (acc, age) => {
    // Tính tổng
    acc.total += age;

    // Tìm min
    acc.min = Math.min(acc.min, age);

    // Tìm max
    acc.max = Math.max(acc.max, age);

    // Phân loại vào buckets
    if (age >= 13 && age <= 19) {
      acc.buckets.teen += 1; // Tuổi teen (13–19)
    } else if (age >= 20) {
      acc.buckets.adult += 1; // Tuổi adult (>=20)
    }

    return acc;
  },
  {
    total: 0,
    min: Infinity,
    max: -Infinity,
    buckets: { teen: 0, adult: 0 }
  }
);

// In kết quả
console.log(`Total: ${stats.total}, Min: ${stats.min}, Max: ${stats.max}`);
console.log(`Buckets: { teen: ${stats.buckets.teen}, adult: ${stats.buckets.adult} }`);