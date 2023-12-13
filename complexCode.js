/* Filename: complexCode.js
   Description: Complex code with advanced logic and functionalities */

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet a person
  greet() {
    console.log(`Hello, ${this.name}!`);
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Creating an instance of the Person class
const john = new Person("John", 30);

john.greet();

console.log(factorial(5));

// Custom method to find the sum of all numbers in an array
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));

// Function to check if a number is prime
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));

// Custom method to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello, world!"));

// Function to generate a random number between a specified range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 100));

// Complex object with various properties and methods
const complexObject = {
  property1: "Hello",
  property2: "World",
  property3: {
    nestedProperty: "This is nested",
    nestedMethod() {
      console.log("This is a nested method call");
    }
  },
  method1() {
    console.log(`${this.property1} ${this.property2}`);
  },
  method2() {
    this.method1();
    this.property3.nestedMethod();
  }
};

complexObject.method2();

// Custom method to check if a string is a palindrome
function checkPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log(checkPalindrome("A man, a plan, a canal - Panama!"));

// ... code continues ...
// Add more complex logic, functions, and objects as desired