// Alert this is Rock Paper, Scissors
alert("Welcome to Rock Paper Scissors. Lets play a game")

var playAgain = true;
var userWin = 0;
var compWin = 0;
var tie = 0;
var scoreTracker = [userWin, compWin, tie];

// //Have user enter Rock, Paper, or Scissors
var game = function() {
    var userChoice = prompt("Rock (R), Paper (P), or Scissors (S)");
 
    userChoice=userChoice.toUpperCase();
    // //Accept R, P, or S via prompt
    while (userChoice != "R" || userChoice != "P" || userChoice != "S") {
        if (userChoice == "R" || userChoice == "P" || userChoice == "S") {
            break;
        }
        alert("That is not a valid choice. Please try again.");
        userChoice = prompt("Rock (R), Paper (P), or Scissors (S)");
        console.log(userChoice);
    }
    
    //Computer chooses R, P, or S in return
    
    var choices = ["R", "P", "S"];
    
    var compChoice = choices[Math.floor(Math.random()*3)];
    console.log(compChoice);
    
    console.log(compChoice);
    // Decide who wins Option to do via if statements only
    // if (userChoice === compChoice) {
    //     alert("You Tied");
    //     tie++;
    // } else if (userChoice == "R" && compChoice == "P"){
    //     alert("The Computer has won");
    //     compWin++;
    // } else if (userChoice == "R" && compChoice == "S"){
    //     alert("You have won!");
    //     userWin++; 
    // } else if(userChoice == "P" && compChoice == "R"){
    //     alert("You have won!");
    //     userWin++;
    // } else if (userChoice == "P" && compChoice == "S") {
    //     alert("The Computer has won");
    //     compWin++;
    // } else if (userChoice == "S" && compChoice == "R") {
    //     alert("The Computer has won");
    //     compWin++;
    // } else {
    //     alert("You have won!");
    //     userWin++;
    // }

    //option to do with a for loop
    for (let index = 0; index < choices.length; index++) {
        if (userChoice === choices[index] && compChoice === choices[index]) {
            alert("You Tied");
            tie++;
            break;
        } else if (userChoice === choices[index] && (compChoice === choices[index + 1] || compChoice === choices[index-2])){
            alert("The Computer has won");
            compWin++;
            break;
        } else {
            alert("You have won!");
            userWin++;
            break;
        } 
    }

    // if (userChoice === choices[index] && (compChoice === choices[index - 1] || compChoice === choices[index+2]))

    alert(`You have won ${userWin} times.\n The computer has won ${compWin} times.\n You have tied ${tie} times`);
    
    // Computer confirms whether to play again or not
    playAgain = confirm("Do you want to play Again");
    return;
}

game();

while (playAgain) {
    game();
}
alert("Thanks for Playing!");
//Computer saves results from the game 

//Display Total Resutls (wins ties losses)

