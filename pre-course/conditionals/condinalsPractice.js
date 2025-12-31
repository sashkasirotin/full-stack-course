/*let username

if (username) {
    //let the user in
} else {
    alert("You must enter your username")
}*/
//username undefind and undefined resolves to false
/*let enoughMoneyInBank = false
let hasJob = true

if (enoughMoneyInBank) {
  //buy gift
}
else {
  if (hasJob) {
    console.log("Go work and earn money")
  }
  else {
    console.log("Go find a job... as a developer!")
  } 
} */

function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
//condition ? exprIfTrue : exprIfFalse
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
function example() {
    return condition1 ? value1
        : condition2 ? value2
            : condition3 ? value3
                : value4;
}