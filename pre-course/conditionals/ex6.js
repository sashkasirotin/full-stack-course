/*Given the following variables:

const gender = null
let profession = "business"
Copy to clipboardErrorCopied
Write some code that completes the profession to "businessman"
, "businesswoman", or "businessperson" depending on whether gender is "male", "female", or null.

You should use concatenation ;)

Console log the result to test your code

There are other ways to write this code
, different from the solution above - probably different from the solution you wrote
, too; see if you can use ! somewhere in there. */
const gender = null
let profession = "business"

if (gender != null) {

    if (gender == "male") {
        console.log(profession + "men")

    }
    else if (gender == "female") {
        console.log(profession + "woman")

    }
}
else {
    console.log(profession + "person")
}