//- Determine whether the following are truthy or falsey:

/*(5 > 2) && false//false
!("knife" === "sword")//true
(1 < 2) || (-1 > -1) || !false//true
""//false
(31 % 5) == "1" /true
!!true//true
"5th Avenue" != "5th Avenue"/false
52 !== "52"//true
(undefined || null)*///false

console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log("")
console.log((31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log(52 !== "52")
console.log((undefined || null))


/*- Bit of a mind-twister: what are the values of a, b, and c in the end?

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b*/ ///answer 3

let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a)