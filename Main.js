// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnigs/prize
// 7. play again

const prompt = require("prompt-sync")(); // gives us acess to use a function to get user input

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

let balance = deposit() // lets me change the value of the deposit
const numberOflines = getNumberOflines()
const bet = getBet(balance, numberOflines)
