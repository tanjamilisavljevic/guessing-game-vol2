document.getElementById("guessButton").addEventListener("click", function () {

    const peopleInOurGroup = 15;
    let computerChoice = Math.floor(Math.random() * peopleInOurGroup + 1);
    console.log(computerChoice);

    const userChoice = (document.getElementById("theGuess")).value;

    if (computerChoice === parseInt(userChoice)) {
        alert("you win")
    } else {
        alert("you lose")
    }
})


