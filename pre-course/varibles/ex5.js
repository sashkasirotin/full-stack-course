/*
Determine whether the following are truthy or falsey:

(5 > 2) && false//true&&false->false

!("knife" === "sword")//true as the are same type but diffrent value and there is a not on top

(1 < 2) || (-1 > -1) || !false//true||false||true-> true

""//->nothing

(31 % 5) == "1"// true 1=="1" flat compare vlaue not type

!!true//!false->true

"5th Avenue" != "5th Avenue" //false

52 !== "52"//true becuase of deep cpm[erison as type assuming ]

(undefined || null)// null

Think first before you test it out in code. Ask if you don't understand why certain results are what they are.*/
console.log((5 > 2) && false)
console.log(!("knife" === "sword"))
console.log((1 < 2) || (-1 > -1) || !false)
console.log("")//nothing is also false if put in if 
console.log((31 % 5) == "1")
console.log(
    (31 % 5) == "1")
console.log(!!true)
console.log("5th Avenue" != "5th Avenue")
console.log(52 !== "52")
console.log((undefined || null))//null
//console.log()





