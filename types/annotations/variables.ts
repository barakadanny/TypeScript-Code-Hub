let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = false;

// Array
let colors: string[] = ["red", "green", "yellow"];
let myNumbers: number[] = [1, 3, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// this function take a number and return nothing
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use anotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line
// and initialize it later.
let words = ["red", "green", "blue"];
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWords = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
