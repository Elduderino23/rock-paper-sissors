var rps = ["R", "P", "S"];
// rps[0], rps[1], rps[2] = R P S
var userInput;
var computerInput;
var wins = 0;
var losses = 0;
var ties = 0;

function rockPaperScissors(){
    if (userInput == "R")
    {
        if (computerInput == "R")
        {
            ties++;
        }
        else if (computerInput == "P")
        {
            losses++;
        }
        else if (computerInput == "S")
        {
            wins++;
        }
        else 
        {
            console.log("You're stupid");
        }
    }

    if (userInput == "P")
    {
        if (computerInput == "R")
        {
            wins++;
        }
        else if (computerInput == "P")
        {
            ties++;
        }
        else if (computerInput == "S")
        {
            losses++;
        }
        else 
        {
            console.log("You're stupid");
        }
    }
    if (userInput == "S")
    {
        if (computerInput == "R")
        {
            losses++;
        }
        else if (computerInput == "P")
        {
            wins++;
        }
        else if (computerInput == "S")
        {
            ties++;
        }
        else 
        {
            console.log("You're stupid");
        }
    }
}