let options = ['paper', 'rock', 'scissors'];
let paper = options[0];
let rock = options[1];
let scissors = options[2];
let container_options_div = document.getElementById('container_options_div');
let btn_play_again = document.getElementById('btn_play_again');
btn_play_again.addEventListener("click", playAgain);


var isRunning = false;

for (let index = 0; index < options.length; index++) {
    let button = document.createElement("button");
    button.textContent = options[index];
    button.className = 'option_btn';
    button.id = index
    button.addEventListener("click", doChoice);

    container_options_div.appendChild(button);


    button.style.marginLeft = "10px";

    button.style.borderRadius = "5px";
    button.style.height = "30px";
    button.style.width = "80px";
    button.style.backgroundColor = "rgb(161, 171, 224)";




}
function playAgain() {
    location.reload();
}

function doChoice(e) {
    if (isRunning) {
        alert('please click play again')
        return
    }

    isRunning = true;

    //get computer choice
    var computerChoice = getComputerChoise();
    var playerChoice = options[e.target.id];


    let sectionPlayer = document.getElementById('sectionPlayer');
    let sectionComputer = document.getElementById('sectionComputer');
    let sectionResult = document.getElementById('sectionResult');


    let playerChoiceParph = document.createElement("p");
    playerChoiceParph.textContent = playerChoice
    playerChoiceParph.style.color="rgb(59, 110, 17)"
    playerChoiceParph.style.fontSize="25px"
    playerChoiceParph.style.textShadow=" 1px 1px 5px #fcf6f6,0px 1px 10px #d6d6dd"
    playerChoiceParph.style.fontWeight="700"
     
    let computerChoiceParph = document.createElement("p");
    computerChoiceParph.textContent = computerChoice
    computerChoiceParph.style.color="rgb(59, 110, 17)"
    computerChoiceParph.style.fontSize="25px"
    computerChoiceParph.style.textShadow=" 1px 1px 5px #fcf6f6,0px 1px 10px #d6d6dd"
    computerChoiceParph.style.fontWeight="700"

    let resultParph = document.createElement("p");
    resultParph.textContent = decideTheWinner(playerChoice, computerChoice)
    resultParph.style.color="red"
    resultParph.style.fontSize="25px"
    resultParph.style.textShadow=" 1px 1px 5px #fcf6f6,0px 1px 10px #d6d6dd"
    resultParph.style.fontWeight="700"
    resultParph.style.maxWidth="300px"


    sectionPlayer.appendChild(playerChoiceParph);
    sectionComputer.appendChild(computerChoiceParph);
    sectionResult.appendChild(resultParph);




}



function decideTheWinner(playerChoice, computerChoice) {

    var result = 'No one wins';
    

    if (playerChoice == computerChoice) return 'No one';

    if (playerChoice == rock) {
        if (computerChoice == paper) {
            
            return "Computer  wins :  " + paper + "   player : " + rock;
        } else {
            return "Player  wins : " + rock + "   computer : " + scissors
        }
    }

    if (playerChoice == paper) {
        if (computerChoice == rock) {
            return "player  win :  " + paper + "   computer lose: " + rock;
        } else {
            return "computer  wins : " + scissors + "   player : " + paper
        }
    }


    if (playerChoice == scissors) {
        if (computerChoice == paper) {
            return "player  wins : " + scissors + "   computer : " + paper;
        } else {
            return "computer  wins :  " + rock + "   player : " + scissors
        }
    }
    return result;
}



function getComputerChoise() {
    //get randomly string from the array of choices
    //0,1,2
    var max = options.length - 1;
    var result = Math.round(Math.random() * (max - 0) + 0);
    // console.log(options[result]);
    return options[result];

}