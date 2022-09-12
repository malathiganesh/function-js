// Function declaration
function add1(a, b) {        
    console.log(a + b);
}
add1(2, 4);


// Function Expression
const add2 = function(a, b) {
    console.log(a+b);
}
add2(2, 4);


// Single line of code
let add3 = (a, b) => a + b;
console.log(add3(3, 2));

// Multiple line of code

const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
} 
console.log(great(3,5));

//Immediately Invoked Function Expressions
(function () {
    console.log("Welcome");
  })();

  //Hoisting
  greet();
function greet() {
    console.log("Hello world");
}

//Constructor Functions
// var Person = function (name, age) {
//     this.name = name;
//     this.age = age;
// };
// Create first object instance
// const person1 = new Person("aaa", 5);
// Create second object instance
// const person2 = new Person("bbb", 10);

// Print first object's name
// console.log(person1.name+' '+person1.age);
// Print second object's name
// console.log(person2.name);