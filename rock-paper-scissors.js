let userPick = 'bomb';// Pick 'paper', 'rock' or 'scissors' ('bomb' is a cheat)


//------------------DO NOT CHANGE-------------------------------------
const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
  return userInput;
  } else {
  console.log('Error, check if you have entered Paper, Rock or Scissors');};
};//This function is to assure the correct input

function getComputerChoice () {
  randomNumber = Math.floor(Math.random()*3)
  switch (randomNumber){
    case 0: return 'rock';
      break;
    case 1: return 'scissors';
      break;
    case 2: return 'paper';
    break;
    default:''
       };
};//This function generates a random number and set the variable accordingly 
function determineWinner (userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'Computer chose the same, game was a tie';
  };
  if (userChoice === 'rock') { 
    if (computerChoice === 'paper') {
    return 'Computer chose paper, you lose';
  } else {return 'You won! Computer chose scissors'};
  };
 if (userChoice === 'paper') {
   if (computerChoice === 'scissors') {
    return 'Computer chose scissors, you lose';
  } else {return 'You won! Computer chose rock'};
 };
 if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
    return 'Computer chose rock, you lose'
  } else {return 'You won! Computer chose paper'}; 
  };
  if (userChoice === 'bomb') {
    return 'You won, little cheater'
  };
};//This function compare inputs and determine a winner, including the cheat


function playGame () {
  let userChoice = getUserChoice(userPick);
  let computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}.`);
  console.log(determineWinner (userChoice, computerChoice));
  
};
playGame();
//----------------------------------------------------------------

