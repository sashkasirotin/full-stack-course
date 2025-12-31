/*Spot check: Using your myStuff array, add the last item to the beginning, and the first item to the end.

If your array was ["a", "b", "c"], then now it should be ["c", "a", "b", "c", "a"]*/
let lettersArray = ["a", "b", "c"];
let allLettersArray = ["a", "b", "g"];
lettersArray.push(allLettersArray);//spread syntax
lettersArray.unshift("c")
lettersArray.push("a")
lettersArray.push("a", "b", "c")//add sevral items
console.log(lettersArray)
//companies.splice(1, 1)
let fridge = ["Milk", "Eggplant", "Truffle", "Edible shoe"]
let removedItem = fridge.splice(2, 2)//how much to remove at what index

console.log(removedItem) // prints ["Edible shoe"]

console.log(fridge) // prints ["Milk", "Eggplant", "Truffle"] 

let badHabbits = ["Pizza", "Sugars", "White bread"]
let removedHabbits = badHabbits.splice(1)

console.log(removedHabbits) // prints ["Sugars", "White bread"]
console.log(badHabbits)// prints ["Pizza"]... can't get rid of that

let habbits = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
habbits = habbits.slice(8)
console.log(habbits)

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];//splice sentex https://www.w3schools.com/jsref/jsref_splice.asp

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)
// Create an Array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 2 items
fruits.splice(2, 2);
// Create an Array
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
fruits.splice(2, 1, "Lemon", "Kiwi");
/*
Note on const vs. let with arrays: You can still push, splice, and update certain indexes in arrays no matter the identifier - but if it's a const you cannot reassign the value of the array entirely. In other words:

const people = ["Fred", "George", "Ron"]

people = ["Roger", "Alan", "Hewitt"] // this will throw an error
people[0] = "Alex" // allowed
people.push("Bellinda") // allowed
people.splice(2, 1) // allowed
*/
