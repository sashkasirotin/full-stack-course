/*Create an array called myList with two objects inside.
 Use whatever key-values you like.

Then add some code to modify one of the values in the first object, 
and remove the second object from the array entirely.

Console log everything along the way to make sure it's all working.*/
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





