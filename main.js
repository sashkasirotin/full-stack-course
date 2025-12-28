console.log("hellow world")
console.log(((4 + 5) > 10) && !("a" == "b"))//coment line 
/*this is a comment block
for fe lines*/
/*const greet = function () {
    console.log("hello,dont panic")
}*/
const country = "israel"
console.log(country)
let shopingCartItem
console.log(shopingCartItem)//will print undefined
//console.log(ron) //will thow error
let a = 6
let b = a

console.log(a) //prints 6
console.log(b) //prints 6

b = 2

console.log(a) //prints 6
console.log(b) //prints 2/*For now it's enough to understand that whenever we initialize a primitive type variable, 
// JS will create a new space in its memory to remember that variable.*/
console.log(3 < 5) // will output true
console.log(3 > 5) // will output false
console.log(2 >= 2) // will output true
console.log(1 <= -1) // will output  false
console.log("this string" == "that string") // will output false
console.log("this string" == "this string") // will output true

console.log(1 == "1")// prints true
console.log(1 === "1")// prints false //However when we use the triple equals,
//  JavaScript checks for equality in both value and type, without 
// converting anything. Hence 1 does not equal "1"
// , because the former is a number and the latter a string.
console.log("3" > 5)
let startPosition
let newPosition = (startPosition || 0) + 10

console.log(newPosition) //prints 10


