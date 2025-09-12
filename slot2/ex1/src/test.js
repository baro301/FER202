const result = (a, b) => a + b;
console.log(result(2, 3)); 

let square = num => num * num;
console.log(square(5));  

let greet = (name, timeOfDay) => {
    console.log(`Good ${timeOfDay}, ${name}!`);
};
// Gọi hàm greet với tham số 'Alice' và 'morning'
greet('Alice', 'morning');
// Gọi hàm greet với tham số 'Bob' và 'evening'
greet('Bob', 'evening');

let sayHello = () => {
    console.log("Hello there!");
};

sayHello();

let person = {
    name: "John",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

person.greet();