// Write a function that takes in 2 parameters
//  and returns the addition of the 2 parameters.
//  Hint:addNumbers(5,1)
const addNumbers = (a,b) => {
    return a + b;
}
console.log(addNumbers(5,4));

// Write a function that takes in 2 parameters
//  and returns the substraction of the 2 parameters.
//  Hint:asubstractNumbers(5,1)
const substractNumber = (x, y) => {
    return x-y;
}
console.log(substractNumber(8,20));

// Write a function; when you enter any number,
//  it returns either odd number or even number
//  Hint:checkNumber(7)
// 7 is an odd number
const checkNumber = (number) => {
    if (number % 2 === 0) {
        return`${number} is an even number`
    } else{
        return`${number} is an odd number`
    }
}
console.log(checkNumber(964));

// Write a function that when you pass in 2 numbers in the parameter,
// it should return the larger number
// Hint: findLargest(20,5)
// 20 is larger than 5
const findLargest = (y,z) => {
    if (y > z) {
        return `${y} is larger than ${z}`;
    } else if (z > y) {
        return `${z} is larger than ${y}`;
    } else {
        return "Both numbers are equal"
    }
}
console.log(findLargest(50, 50))

// Read on Closure in JavaScript

// closure happens when an inner function remembers and can access variables
//  from its outer function, even after the outer function has finished executing.
function counter() {
    let count = 0;

    return function() {
        count +=2;
        return count;
        console.log(count)
    }
}
const myCount = counter();
console.log(myCount());

