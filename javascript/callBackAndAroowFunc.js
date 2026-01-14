let users = []

/*(const getData = function () {
    users = [{ name: "Rick" }, { name: "Morty" }]
    console.log("Got users")
}*/

const displayData = function () {
    console.log("Going to display users")
    for (user of users) {
        console.log(user.name)
    }
}

//getData()
displayData()
const getData = function () {
    setTimeout(function () {
        users = [{ name: "Rick" }, { name: "Morty" }]
        console.log("Got users")
    }, 3000)
}

getData()

//squer(4)

let squer = num => num * num
console.log(squer(4))
/**const add = (x, y) => {
  return x + y
}

const sum = add(1, 2) 
console.log(sum) //prints 3 
// 

const add = (x, y) => x + y

const sum = add(1, 2) 
console.log(sum) //prints 3

const getHypotenuse = (a, b) => {
  const aSquared = a * a
  const bSquared = b * b
  const cSquared = aSquared + bSquared
  return Math.sqrt(cSquared)
}

const hypoteneuese = getHypotenuse(3, 4) 
console.log(hypoteneuese ) //prints 5



*/



/**Exercise 1 - Callbacks
 * 
Write a function pushPull that takes one argument - a function - and invokes that function:
*/
const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}
function pushPull(func) { func() }
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


/**Exercise 2 - Callbacks
You can get the current date/time in Javascript by writing: const time = new Date().

Create a function called getTime that takes one parameter - a function - then calls it with an argument.

Copy to clipboardErrorCopied
Note that returnTime receives a parameter! So when we call it from getTime, make sure to pass the argument.
 */

const time = new Date();
const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

function getTime(returnTime) {

    returnTime(arguments[1]);
}

getTime(returnTime, time)

/*Exercise 3 - Callbacks
Given the following code, what error do you get? Write the missing part to make the code work:

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party")
Copy to clipboardErrorCopied
Note: do not change any of the code above. You only need to add something to make this work. Remember, console.error is a built-in function in JS.
*/
const logData = console.log
const displayDatar = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data)
};

displayDatar(console.error, logData, "I like to party")

/*Exercise 4 - Arrow Functions
Create an arrow function that receives three parameters and returns their sum - it should be one line.*/
const a = (a, b) => a + b
console.log(a(1, 2))

/*Exercise 5 - Arrow Functions
Create an arrow function called capitalize that receives any string, and returns it with proper capitalization:

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia
Copy to clipboardErrorCopied
It can be one line ;)*/

let str = 'kjA'
let capitalize = (str) => (str.toLowerCase()).replace((str).charAt(0), (str).charAt(0).toUpperCase())

console.log(capitalize(str))


/*

Exercise 6 - Arrow functions
Given the following:

const determineWeather = temp => {
  if(temp > 25){
    return "hot"
  }
  return "cold"
}
Copy to clipboardErrorCopied
Create a one-line arrow function called commentOnWeather that takes one parameter, temp.
 It should call determineWeather and return the concatenation of "It's " and determineWeather's output:

commentOnWeather(30) //returns "It's hot"
commentOnWeather(22) //returns "It's cold"
Copy to clipboardErrorCopied
const done = ( ) => true
We'll see more uses for arrow functions in future lessons (though it's great practice to start implementing 
them now where you can), and callbacks will become very important pretty soon. So nice job on getting here!*/
const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}
let commentOnWeather = temp => "it is " + determineWeather(temp)

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"