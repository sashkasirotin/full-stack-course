let person = {
    name: "Mariah",
    occupation: "Gangster"
}//Keys don't have to have quotes around them (unless you have special characters)
console.log(person.occupation) // prints "Gangster"
console.log(person.name + " is a " + person.occupation)
const bag = {
    weight: 10,
    owner: "Larissa",
    items: ["Pen", "Bottle", "Book"]
}
console.log(bag.items) // prints ["Pen", "Bottle", "Book"]
console.log(bag.items[1]) // "Bottle"
//color - string
//numWheels - number
//isFancy - boolean
//And give it some values.

let car = {
    color: "black",
    numWheels: 4,
    isFancy: true,
    techniacl: {
        motor: "v8",
        maxSpeed: 420
    }


}
if (car.isFancy) {
    console.log(`The brown car has four wheels. It is fancy color ${car.color}`)
} else {
    console.log(`The brown car has four wheels. It is not fancy color ${car.color}`)

}

//item - string
//toBeginning - boolean
//items - array
//If toBeginning is true, insert
// item to the beginning of items, otherwise, insert it at the end.
let cartObject = {
    item: "bag",
    toBeginning: true,
    items: ["ccumber", "tomato", "apple"]
}

if (cartObject.toBeginning) {
    cartObject.items.unshift(cartObject.item)
} else {
    cartObject.items.push(cartObject.item)

}
console.log(cartObject.items)

const animalCounts = {
    lion: 2,
    zebra: 11,
    ostrich: 1,
    tortoise: 4
}

//Suddenly the zoo acquired two dozen eagles

animalCounts.eagle = 24
//or
animalCounts["eagle"] = 24

const human = {
    age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"
human[babyNameKey] = babyNameValue;
console.log(human)
human[babyNameKey] = babyNameValue
console.log(human) //prints {age: 0, name: "Goojibear"}

//In this case, dot notation would be simpler, but this is just an example:
human.name = "Goojibear"

let instructor = {
    age: 27
}
//Copy to clipboardErrorCopied
//If we wanted to change age's value to 28 we could do any of the following:

instructor.age += 1
instructor["age"] += 1
instructor.age++
instructor["age"]++
instructor.age = 28
instructor["age"] = 28
console.log(instructor
)
let apple = {
    color: "red",
    name: "apple"
}

let cheese = {
    color: "yellow",
    name: "cheese"
}

let foods = [apple, cheese]

console.log(foods[0].name) // apple
console.log(foods[1].color) // yellow
//Since foods[0] is the exact same as apple

//Then foods[0].name is the exact same as apple.name

const bags = {
    weight: 10,
    owner: "Larissa",
    items: [                   // an array with objects in it!
        { item: "Pen", count: 2 },
        { item: "Bottle", count: 1 },
        { item: "Book", count: 3 }
    ]
}
console.log(bags.items[2].count) // prints 3
bag.items // the whole items array://[{item: "Pen", count: 2}, {...}, {...}]

bag.items[2] // the item at index #2://{item: "Book", count: 3}//remember we access arrays with indexes!

bag.items[2].count // the count of the item at index #2
console.log(bags.items[0].item) // prints 3
bags.items[0].item

let numbers = [1, 2, 3]
let nums = numbers

nums[0] = 50
let persona = {
    firstName: "Dopple",
    lastName: "Ganger"
}

let p = persona
p.firstName = "Chappy"

console.log(p)
console.log(persona)
