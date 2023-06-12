// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnigs/prize
// 7. play again

const prompt = require("prompt-sync")(); // gives us acess to use a function to get user input

const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}// Objects allows me to have keys mapped with different values EX. "A" will give me the value of 2

const SYMBOL_VALUE = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}// whatever line you get will be multiplied by its value, also called entries 







const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ")
    const numberDepositAmount = parseFloat(depositAmount) // takes a string and convert it into a float value(floats are numbers)
    
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount, try again.")
    } // if its not a number or if its a negative number it will be an invalid deposit
    else {
        return numberDepositAmount // this will break the while loop
    }
  }
}  // this is how to write a function

const getNumberOflines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOflines = parseFloat(lines) 
        
        if (isNaN(numberOflines) || numberOflines <= 0 || numberOflines > 3){ // if any one is true it will try again
            console.log("Invalid number of lines, try again.")
        } else {
            return numberOflines
        }
    }
}

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet) 
        
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){ // if any one is true it will try again
            console.log("Invalid bet, try again.")
        } else {
            return numberBet
        }
    }
} // this detremine what the maximum bet is

const spin = () => {
    const symbols = []
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){ // this gonna look through all the entires in SYMBOL_COUNT then gonna give us what the key value is
        for (let i = 0; i < count; i++){
            symbols.push(symbol);// this is gonna add how many symbols we have into the symbols array
        }

    }
    const reels = [[], [],[]] // these are nested arrays(an array inside an array) each array will represent a column in our slot machine
    for (let i = 0; i <  COLS; i++) { // this is gonna be for each reel
        const reelSymbols = [...symbols]//its gonna copy the symbols we have aviable to choose for each reel into anothor array
        for (let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random() * reelSymbols.length) // will generate a random number between 0 and the length of reel minus 1
        const selectedSymbol = reelSymbols[randomIndex]
        reels[i].push(selectedSymbol)
        reelSymbols.splice(randomIndex, 1)
        }
    }
    return reels
}

const reels = spin()
console.log(reels)
let balance = deposit() // lets me change the value of the deposit
const numberOflines = getNumberOflines()
const bet = getBet(balance, numberOflines)
