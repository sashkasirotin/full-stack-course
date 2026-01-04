//Create an object called library that has a books key
//The value of books should be an array of book objects
//Each book should have a title and author key
//Add books to your myList array. You've got this.
let library = {
    books: []


}
let book1 = { title: "akks", auther: "ddd" }
let book2 = { ...book1 }
book2.auther = "mka"
book2.title = "sdf"
let book3 = { ...book2 }

console.log(book1, book2, book3)
library.books.push(book1, book2, book3)
console.log(library.books[0], library.books[1], library.books[2])

let myList = [library]
