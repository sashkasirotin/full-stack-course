/*Exercise 3
Create another array with two objects, 
and add it to myList from Exercise 2 - remember the spread syntax?*/

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
const myList = [p1, p2]
console.log(myList)
console.log(myList[0], myList[1])
myList[0].age = 67
console.log(myList[0], myList[1]


)
console.log(myList.length)

console.log(myList.splice(0, 1))
console.log(myList[1])//undefined
console.log(myList[0])
console.log(myList.length)//1

let p3 = { ...p1 }
let p4 = { ...p2 }
console.log(p3.age)

const myLists = [...myList, p3, p4]
myLists[3].age == 99;
myLists[2].age == 89;
console.log(myLists[3])

//console.log(p)
console.log(myLists[0], myLists[1], myLists[2], myLists[3])

