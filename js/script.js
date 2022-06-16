// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//============
// FUNCTIONS
//============

// Function that generates the random numbers
function genRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Function that push the randomNumbers in the randomNumbersArray
const randomNumbersArray = [];
for (let i = 0; i < 5; i++) {
    const randomNumber = genRandomNumber(1, 50);

    // Push the randomNumber in the randomNumbersArray - if not already present
    if (!randomNumbersArray.includes(randomNumber)) {
        randomNumbersArray.push(randomNumber);
    }
}
console.log("array dei numeri generati dal software", randomNumbersArray);


// Function that generates the prompts that ask the user a number 
function promptNumber() {
    // Create the array that will get all the valid userNumbers
    const userNumbersArray = [];

    // Stop the prompt when the userNumbersArray contains 5 valid numbers
    while (userNumbersArray.length < 5) {
        userNumber = parseInt(prompt("Digita uno dei numeri del precedente alert"));
        console.log(userNumber);

        // If the userNumber is not already present and is a valid number
        // Push it in the userNumbersArray
        if (!userNumbersArray.includes(userNumber) && !isNaN(userNumber)) {
            userNumbersArray.push(userNumber);
        }
    }
    console.log("array dei numeri inseriti da utente", userNumbersArray);
}

//================
// LOGIC PROCESS
//================

// Message at the start of the game
const startMessage = `I numeri da tenere a mente sono i seguenti: ${randomNumbersArray}`;
alert(startMessage);

// After 30 seconds ask the user the numbers of the previous alert
let userNumber;
const gameTimer = setTimeout(promptNumber, 3000);
