// greetings("Bolu")

// Functions
// function greetings(name) {
//     console.log (`Hello ${name}`)
// }



// const greet = function(name) {
//     console.log("Hello " + name)
// }
// // greet("john")

// // arrow function 
// const holla = (name) => console.log(`Hello ${name}`)
// holla("Opeyemi");


// const multiply = (x,y) => {
//     return x * y
// }
// multiply(3,5)
// console.log(multiply(3,5));

const areaOfCircle = (r) => {
    if (r < 5) {
        const pi = 3.142
        let a = pi * r * r
        console.log("I can't calculate the area, the circle is too small")
    }   else {
        console.log (`The area of circle with radius, ${r} is ${a.toFixed(2)}`);
    }

}
areaOfCircle(6);

const perimeterOfCircle = (r) => {
    let p = 2 * pi * r
    console.log(`The perimeter of circle with radius ${r} is ${p.toFixed(3)}`)
}
perimeterOfCircle(5);

// block of code is a group of statements enclosed inside curly braces