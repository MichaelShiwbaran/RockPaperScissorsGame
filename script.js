function randomInteger(){
 let temp = Math.floor((Math.random()*3)+1);
 console.log(temp);
 return temp;
}

function checkResult(userChoice){
  let computerChoice = randomInteger();
  //Win
  if(
    (userChoice == 1 && computerChoice == 3) || 
    (userChoice == 2 && computerChoice == 1) || 
    (userChoice == 3 && computerChoice == 2)
    ){
   $(".result").text("You Win!");

  }
  //Lose
  else if(
    (userChoice == 1 && computerChoice == 2) || 
    (userChoice == 2 && computerChoice == 3) || 
    (userChoice == 3 && computerChoice == 1)
    ){
    $(".result").text("You Lose!");
  }
  //Tie
  else{
    $(".result").text("Tie!");
  }
  //display Choices
   displayChoices(userChoice, computerChoice);
}

let imageArray = [];

imageArray[0] = new Image();
imageArray[0].src = 'rock.png';

imageArray[1] = new Image();
imageArray[1].src = 'paper.png';

imageArray[2] = new Image();
imageArray[2].src = 'scissors.png';

function generateRandomInteger(){
 let randomInteger = Math.floor((Math.random()*3)+1);
 return randomInteger;
}

function displayChoices(userChoice,computerChoice){
 $('#userChoice').attr('src',((imageArray[userChoice - 1]).src));

  $('#computerChoice').attr('src',((imageArray[computerChoice - 1]).src));
   displayChoices(userChoice,computerChoice);
}

