/*

Exercise 2
Create an object called library that has a books key
The value of books should be an array of book objects
Each book should have a title and author key
Create 5 different books
Exercise 3
You have this setup code:

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = //'Bob' or 'Ted';
Run the code once with const name = 'Bob'; and then with const name = 'Ted';

The above code is a reservation system where people can claim their reservations when they arrive.

If the reservation exists and is unclaimed, welcome the user (console log)
If the reservation exists and is already claimed, inform the user about the situation
If there is no reservation, tell the user there is nothing under their name
Use 'Bob' and 'Ted' to test your code:

When you test Bob, it should say "Welcome, Bob"
When you test Ted, it should say "Hmm, someone already claimed this reservation"
If you try a different name, it should say "You have no reservation"
Exercise 3.1
It so happens that our restaurant has a bunch of open tables.

Therefore, if someone doesn't have a reservation, add it to the reservations object and set "claimed" to true for that person.

Exercise 3.2
As of now, 'Ted' and 'ted' are two different names in our system. Change your code so that 'ted' and 'Ted' or even 'TeD' is all the same.



/*Exercise 1
Create two 'people' objects, p1 and p2. Each should have the following properties:

name
age
city
Write some code with the following logic:

If the people are the same age
If the people live in the same city
Print "Jill wanted to date Robert"
If they're not in the same city
Print "Jill wanted to date Robert, but couldn't"
Note that the only data should be in the objects - in your if conditions, make sure to use the objects' properties (keys). */

let p1 = {
    name: "Jill",
    age: 22,
    city: "Beer Sheva"

}
let p2 = {
    name: "Robert",
    age: 45,
    city: "Dimona"
}

if (p1.age == p2.age && p1.city == p2.city) {
    console.log("Jill wanted to date Robert")
}
else {
    console.log("Jill wanted to date Robert,but couldnt")

}

//ex2
/*xercise 2
Create an object called library that has a books key
The value of books should be an array of book objects
Each book should have a title and author key
Create 5 different books*/
const book1 = {
    title: "baba",
    author: "saba"
}
const book2 = {
    title: "nana",
    author: "saba"
}
const book3 = {
    title: "sddf",
    author: "saba"
}
const book4 = {
    title: "bagggba",
    author: "saba"
}
const book5 = {
    title: "babdfda",
    author: "saba"
}
const library = { books: [book1, book2, book3, book4, book5] }
console.log(library.books)




/*Exercise 3
You have this setup code:

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = //'Bob' or 'Ted';
Run the code once with const name = 'Bob'; and then with const name = 'Ted';

The above code is a reservation system where people can claim their reservations when they arrive.

If the reservation exists and is unclaimed, welcome the user (console log)
If the reservation exists and is already claimed, inform the user about the situation
If there is no reservation, tell the user there is nothing under their name
Use 'Bob' and 'Ted' to test your code:

When you test Bob, it should say "Welcome, Bob"
When you test Ted, it should say "Hmm, someone already claimed this reservation"
If you try a different name, it should say "You have no reservation" 

Exercise 3.1
It so happens that our restaurant has a bunch of open tables.

Therefore, if someone doesn't have a reservation, add it to the reservations object and set "claimed" to true for that person.

Exercise 3.2
As of now, 'Ted' and 'ted' are two different names in our system. Change your code so that 'ted' and 'Ted' or even 'TeD' is all the same.

*/

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

let reservationsName = "teda";
if (reservationsName.toLowerCase() == "Bob".toLowerCase()) {
    if (!reservations.Bob.claimed) {
        console.log("Welcome, Bob");
    }

}
else if (reservationsName.toLowerCase() == "Ted".toLowerCase()) {
    if (reservations.Ted.claimed) {
        console.log("Hmm, someone already claimed this reservation");
    } else {
        reservations.Ted.claimed = false;
        console.log("we found you a table ted ");
        reservations.Ted.claimed = true;
    }

} else {
    console.log("there is no reservations");
    if (!(reservationsName in reservations)) {
        console.log("but we found you a table mr " + reservationsName)
        reservations[reservationsName] = { claimed: true }
        console.log(reservations)
    }

}

//ex4 Exercise 4/*
/*Given these two variables:



You're going to console log these four options conditionally, based on the values you selected for hasOven and works:

hasOven: true and works: true
Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.
hasOven: false and works: true
Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.
hasOven: true and works: false
Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.
hasOven: false and works: false
Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.
Note that the expired 1 day ago should be calculated based off the date variable and expiryDate property.

Also, she'll have to pay 250 to fix the fridge should be calculated based off the price property in fridge - it should be half the price.

Make sure to only use information from the variables you've been given.

Do not write out "radish". Instead, use kitchen.fridge.items...

Hint: Use helper variables to make your life easier. For instance:

const hasOven = kitchen.hasOven


if(hasOven){
  //...//this will be cleaner than doing: //if(kitchen.hasOven){...
Copy to clipboardErrorCopied
need to fix and followup
*/
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

let isovenPresent = kitchen.hasOven
let fridgeWorks = kitchen.fridge.works
let itemsInFridge = kitchen.fridge.items

if (hasOven && fridgeWorks) {
    if (itemsInFridge.expiryDate < date)
        console.log("Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in"
        )
}
else if (!hasOven && fridgeWorks) {
    console.log("Geraldine's radish expired 1 day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in")
} else if (hasOven && !fridgeWorks) {
    console.log("Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.")
} else if (!hasOven && !fridgeWorks) {
    console.log("Geraldine's radish expired 1 day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay 250 to fix the fridge.")

}