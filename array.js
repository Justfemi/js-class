let age = 10;
let name = "Ope"; 
let hasMarried = false; 

let boluData = ['Bolu', 40, true, false]
// console.log(typeof(boluData))

// console.log(boluData[2])
// console.log(boluData.length)
// console.log(Array.isArray(hasMarried))


// ARRAY MUTATION
let fruits =["Apple", "Mango", "Banana","Orange"]
// push: to add an item at the end of the array
fruits.push("Watermelon")
console.log(fruits)
// pop: to remove the last item in an array
fruits.pop()
console.log(fruits)
fruits.pop()
console.log(fruits)
// unshift: to add item at the beginning of an array
fruits.unshift("Pineapple")
console.log(fruits)
// Shift: to remove the first item in an array
fruits.shift()
console.log(fruits)
// reverse: to reverse an array
fruits.reverse()
console.log(fruits)

// ARRAY ITERATION
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i} ${fruits[i]}`)
}

// for..of (used for only array)
for (let item of fruits) {
    console.log(item)
}

// forEach
fruits.forEach((fruit) => {
    console.log(fruit)
})

// splice
// array.splice (start, delete, itemstoadd)

let fruitss = ["Banana", "Apple", "Mango", "Orange"]
// removing
fruitss.splice(1,2)
console.log(fruitss)

// adding elements
fruitss.splice(1,0, "Pineapple")
// console.log(fruitss)

// replacing elements
// banana, pineapple, orange
fruitss.splice(1,1, "Watermelon")
// console.log(fruitss)

// slice
// array.slice(start,end)
let food = ["Rice", "Beans", "Yam", "Porridge", "Pap"]
let newFood = food.slice(1,3)
// console.log(newFood)

// toSpliced: create a new Array without modifying the original Array.
// map: map is an array method that goes through every element in an array. 
// it does something to each elements and return a new array containing the results.
let numbers = [2, 4, 6, 8]
let double = numbers.map(function (i) {
    return i *2
})
// console.log(double)

// Format Prices: Given [9.5, 20, 4.75, 100], 
// return a new array of strings formatted as "$9.50", "$20.00", "$4.75", "$100.00"
let prices = [9.5, 20, 4.75, 100];
let formatPrice = prices.map(price => {
    return (`N${price.toFixed(2)}`)
})
console.log(formatPrice)

// let numbers = [10, 20, 30, 40]
// add 5 to each of the numbers
let numberss = [10,20,30,40];
let add = numberss.map(number => {
    return number + 5
})
console.log(add)

// let numbers = [2, 3, 4, 5];
// Expected output:
// [4, 9, 16, 25]
// Get the square of the numbers
let values = [ 2, 3, 4, 5]
let squareValues = values.map(value => {
    return value ** 2
})
console.log(squareValues)

// let names = ["john", "james", "mary", "peter"];
// Expected output:
// ["JOHN", "JAMES", "MARY", "PETER"]
let names = ["john", "james", "mary", "peter"]
let uppercase = names.map(name => {
    return name.toUpperCase()
})
console.log(uppercase)

// let names = ["John", "Mary", "Peter"];
// Expected output:
// ["Hello John", "Hello Mary", "Hello Peter"]
let greets = ["John", "Mary", "Peter"]
let greetings = greets.map(greet => {
    return `Hello ${greet}`
})
console.log(greetings)

// Exercise 6: Calculate ages next year
// Add 1 to everyone's age.
// let ages = [15, 20, 25, 30, 35];
// Expected output:
// [16, 21, 26, 31, 36
let ages = [ 15, 20, 25, 30, 35]
let nextyear = ages.map(age => {
    return age + 1
})
console.log(nextyear)

// Exercise 7: Convert prices to dollars
// Assume the exchange rate is $1 = ₦1,500.
// Convert the following prices from naira to dollars.
// let prices = [1500, 3000, 4500, 6000];
// Expected output:
// [1, 2, 3, 4]
let pricess = [1500, 3000, 4500, 6000]
let dollar = pricess.map(price => {
    return price / 1500
})
console.log(dollar) 

// Exercise 8: Get the length of each name
// Use .map() to return the number of characters in each name.
// let names = ["John", "Elizabeth", "Paul", "Christopher"];
// Expected output:
// [4, 9, 4, 11]
let students = ["John", "Elizabeth", "Paul", "Christopher"]
let studentsName  = students.map(student => {
    return student.length;
})
console.log(studentsName)


// Exercise 9: Add a percentage
// Increase every number by 10%.
// let prices = [100, 200, 300, 400];
// Expected output:
// [110, 220, 330, 440]
let products = [100, 200, 300, 400]
let numberIncrease = products.map(product => {
    return product + (product * 0.10)
})
console.log(numberIncrease)

// Exercise 10: Extract the first letter
// Return only the first letter of every name.
// let youths = ["Daniel", "Peter", "James", "Sarah"];
// Expected output:
// ["D", "P", "J", "S"]
let youths = ["Daniel", "Peter", "James", "Sarah"]
let firstLetter = youths.map(youth => {
    return youth[0]
})
console.log(firstLetter)