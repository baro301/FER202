const double  = (x) => x * 2;
console.log(double(7)); // 14

//Cach viet khac 
// co {} thi phai co return
//ko co {} thi ko can return
const double2 = (x) => { return x * 2; };
console.log(double2(7)); // 14

const isEven = (x) => {return x % 2 === 0;};
console.log(isEven(7)); // should print false