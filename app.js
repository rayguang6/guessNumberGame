let guesses = [];
let correctNumber = getRandomNumber();
//console.log(correctNumber);

window.onload = function() {
    document.getElementById('number-submit').addEventListener("click",playGame);
    document.getElementById('restart-game').addEventListener("click",initGame);

    var input = document.getElementById("number-guess");
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("number-submit").click();
        }
    });
}


function playGame() {

    let numberGuess = document.getElementById('number-guess').value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory(guesses);

}

function initGame() {

    correctNumber = getRandomNumber();
    document.getElementById('result').innerHTML = "";
    guesses = [];
    displayHistory();

}

function getRandomNumber() {
    let randomNumber = Math.random();
    let wholeNumber =Math.floor(randomNumber*100)+1;
    return wholeNumber;
}

function displayResult(numberGuess) {
    if(numberGuess>correctNumber){
        showNumberAbove();
    }else if(numberGuess< correctNumber){
        showNumberBelow();
    }else{
        showYouWon();
    }
}

function getDialog(dialogType, text) {
    let dialog;
    switch(dialogType){
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert' >";
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert' >";
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon() {
    const text = "Awesome, You Got It !";

    let dialog = getDialog('won', text);
    document.getElementById('result').innerHTML= dialog;
}

function showNumberAbove() {
    const text = "Your Guess is too high ";

    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML= dialog;
}

function showNumberBelow() {
    const text = "Your Guess is too low ";

    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML= dialog;
}

function saveGuessHistory(guess) {
    
    guesses.push(guess);
    console.log(guesses);

}

function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>";

    while(index >=0){
        list+= "<li class='list-group-item'>"+ "You Guessed "+ guesses[index] +"</li>";
        index--;
    }

    list +='</ul>';
    document.getElementById('history').innerHTML = list;
}


function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       alert("Enter key is pressed");
       return true;
    } else {
       return false;
    }
 }
