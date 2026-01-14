/*Exercises

Exercise 6
An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because 153 = 1³ + 5³ + 3³ (1 + 125 + 27 = 153).

Print all 3-digit Armstrong numbers.*/


//Exercise 1
//Write a function called isEven that accepts a number as a parameter and checks if the
//  number is even or not. Return true if it is even or false if it is odd. 
// Don't Google this one ;) Use modulo %

//ex1

function isEven(number) { return number % 2 === 0 }
console.log(isEven(3))
//ex2
/*Exercise 2
Write a function that takes in an array of numbers.

The function should loop through the numbers and (using the function from Exercise 1) print out the odd numbers.
*/
let arr = [1, 2, 3, 4, 5, 6, 7]
function checkOdd(arr) {
    for (const num of arr) {
        if (!isEven(num)) {
            console.log(num)
        }
    }
}

checkOdd(arr)



/**Exercise 3
Write a JavaScript function that accepts two parameters: one being an array of integers,
 and the other being a number. The function should return true or false depending on whether the number exists in the array.

Hint: You should loop through the array, and for each item in the array, 
check if it equals the number that was passed.

checkExists([1, 2, 3], 2) - should return true

checkExists([1, 2, 3], 5) - should return false */
let num = 15
function checkExists(arr, num) {
    if (arr.includes(num)) {
        return true;
    }
    return false;
}
console.log(checkExists(arr, num))


/*Exercise 4
Create an object called calculator.

It should have two methods: add and subtract

Both methods take two parameters, and should return the sum/difference of both numbers.

Use this to test your code:

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42
Copy to clipboardErrorCopied*/

const adds = function add(n1, n2) {
    return n1 + n2
}
const subs = function subtract(n1, n2) {
    return n1 - n2
}
const calculator = { adds, subs }
console.log(calculator.adds(calculator.adds(2, 5), calculator.subs(10, 5)))
/*
Exercise 5
Complete the following code:

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
Copy to clipboardErrorCopied
To complete the above you will need to create both the increaseByNameLength and makeRegal functions.

You should be able to write the body of both functions in one line; there's no trick here - it's just practice.*/

//let nameOfKing = "bobo kobo";

function increaseByNameLength(money, name) { return money * name.length }

function makeRegal(name) { return name.toUpperCase() }

const turnToKing = function (name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100)

/*
Exercise 6
An Armstrong number is a number that is the sum of its own digits each raised to the power of
 the number of digits. For example, 153 is an Armstrong number because 153 = 1³ + 5³ + 3³ (1 + 125 + 27 = 153).

Print all 3-digit Armstrong numbers.*/



function isArmNumb(armNumb) {
    let sum = 0
    let temp1 = armNumb
    let f = false

    while (f !== true) {
        let temp = temp1 % 10
        temp1 = temp1 / 10
        sum += temp * temp * temp
        if (temp1 === 0.1)
            f = true
    }
    return sum === armNumb
}

function armStrongNum() {

    for (let i = 152; i <= 999; i++) {
        if (isArmNumb(i)) {
            console.log(i)
        }
    }


}




armStrongNum()