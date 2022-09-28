var rps = ["R", "P", "S"];
// rps[0], rps[1], rps[2] = R P S
var userInput;
var computerInput;
var wins = 0;
var losses = 0;
var ties = 0;

function computerRandom() {
    var index = Math.floor(Math.random() * rps.length)
    computerInput = rps[index]; 
}

function rockPaperScissors(){
    if (userInput == "R")
    {
        if (computerInput == "R")
        {
            ties++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Tied!");
        }
        else if (computerInput == "P")
        {
            losses++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Lost!");

        }
        else if (computerInput == "S")
        {
            wins++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Won!");

        }
        else 
        {
            console.log("Please choose between R, P, or S");
        }
    }

    if (userInput == "P")
    {
        if (computerInput == "R")
        {
            wins++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Won!");

        }
        else if (computerInput == "P")
        {
            ties++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Tied!");

        }
        else if (computerInput == "S")
        {
            losses++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Lost!");
        }
        else 
        {
            console.log("Please choose between R, P, or S");
        }
    }

    if (userInput == "S")
    {
        if (computerInput == "R")
        {
            losses++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Lost!");
        }
        else if (computerInput == "P")
        {
            wins++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Won!");

        }
        else if (computerInput == "S")
        {
            ties++;
            alert("You played " + userInput + " and the computer played " + computerInput);
            alert("You Tied!");

        }
        else 
        {
            console.log("Please choose between R, P, or S");
        }
    }
}

function alertScore()
{
    alert("Wins: " + wins +"\nLosses: " + losses + "\nTies: " + ties);
}

function playRPS() 
{
    userInput = prompt("Please input one of the follow:\nR, P, or S");
    computerRandom();
    rockPaperScissors();
    alertScore();
    var playAgain = confirm("Would you like to play again");
    if (playAgain == true)
    {
        playRPS();
    }
    else
    {
        alert("Thanks for playing!");
    }
}

// console.log(Math.floor(10.99999)); // 10
// console.log(Math.random());
// 0 -> 0.9999999999999999999999999999999999
// console.log(Math.floor(Math.random()));
// console.log("This is user input: " + userInput);
// console.log("This is computer input: " + computerInput);

playRPS();