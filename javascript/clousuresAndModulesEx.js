


/**Exercise 1
Create a StringFormatter module. It should have two functions:

capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
toSkewerCase - receives a string and replaces any spaces with a dash
const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box
 */

const StringFormatter = function () {
    capitalizeFirst = function (word) {
        word = word.toLowerCase()
        word.replace(word.charAt(0), (word.charAt(0)).toUpperCase())
        return word;


    };
    toSkewerCase = function (word) {
        return word.replaceAll(" ", "_")
    };
    return { capitalizeFirst, toSkewerCase }

}
const formatter = StringFormatter()
console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box"))//should return blue-box

/*Exercise 2
Create a Bank module. It should have a variable and two functions:

A private money variable which starts off at 500
A depositCash function which takes a cash parameter and uses it to increase money
A checkBalance function which logs the money
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
Copy to clipboardErrorCopied
The above is not a mistake. The names are purposefully different from the instructions. Understand why? */

const Bank = function () {
    let _money = 500
    depositCash = function (cash) {
        _money += cash
    }
    checkBalance = function () {
        console.log(_money)
    }
    return { deposit: depositCash, showBalance: checkBalance }

}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

/*

Exercise 3
Do you ever get tired of going to YouTube for a song, typing the name in, finding the right video, then selecting it? Ugh.

Let's make a simple SongsManager. Here is the desired result:

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
Copy to clipboardErrorCopied
Effectively, you will be creating a hyper-specific, YouTube Song Manager object.

Did you notice that each URL starts the same way?

Inside of SongsManager there should be a songs object, but, instead of saving songs like this:

const songs = {
  "sax": "https://www.youtube.com/watch?v=3JZ4pnNtyxQ",
  "how long": "https://www.youtube.com/watch?v=CwfoyVa980U"
}
Copy to clipboardErrorCopied
The addSong function in SongsManager will make sure that we only save the identifiers, like this:

const songs = {
  "sax": "3JZ4pnNtyxQ",
  "how long": "CwfoyVa980U"
}
Imagine how much space we'd be saving if we actually had to store this in a database!

Of course, when we call getSong - it should give us the full URL!

Go ahead, create SongsManager - it should not be a very long function ~

Take a crack at this for a good 20-30 minutes. If you're still struggling, ask someone for help. Then, if you're still stuck, here is a guided hint:

  Click here to reveal the hint.

If you've been working on this for more than 50 minutes, check out this solution (it uses arrow functions)*/

const SongsManager = function () {
    const _youTubeBaseURL = "https://www.youtube.com/watch?v="
    const _songs = {

    }
    addSong = function (name, songURL) {
        _songs[name] = songURL.slice(_youTubeBaseURL.length, songURL.length)

    }
    getSong = function (songName) {

        console.log(_youTubeBaseURL + _songs[songName])
    }
    return { getSong, addSong }

}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ