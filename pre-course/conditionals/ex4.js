/*
Write some code that determines whether someone can enter the club or not.

The conditions to enter the club are either to be a VIP, or to have more than 300 in cash.

If the person can enter the club, welcome them with a nice greeting. Otherwise, make a snide remark in the console. 
*/
const isVIP = true
let cash = 500

if (isVIP) {
    console.log("enjoy clubbing mate");
} else if (cash > 300) {
    console.log("welcome to the monney")
} else {
    console.log("buy buy looser")
}