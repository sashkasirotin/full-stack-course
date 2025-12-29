
//What will be the values of a, b, c, and d in the end? Think through this (write it out) before you test with code:

const a = 3
let b = 2
let c = 0 || 12
let d

b = c//b=0||12//aperentlly it takes the higher number
b++//1||13
if (d) {//false
    b = a
}
console.log(b)
console.log(c)
console.log(d = a + (b * c))//3+(1*0||12)  3+(13*0||12)
d++//160
b += 2//15
