

const peopleInOurGroup = 15;
document.getElementById("guessLabel").innerHTML=`Guess a number from 1 to ${peopleInOurGroup}`;


document.getElementById("guessButton").addEventListener("click", function () {
    let computerChoice = Math.floor(Math.random() * peopleInOurGroup + 1);
    console.log(computerChoice);
    const userChoice = (document.getElementById("theGuess")).value;

    if (computerChoice === parseInt(userChoice)) {
        alert("You win")
    } else {
        alert("You lose")
    }
})


