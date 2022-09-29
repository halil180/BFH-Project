////////////////////////////////////////////////////////////////////////////
// >>>>>>>>>>>>>>     INITIALIZATION PHASE  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// four corners
const topLeftCorner = document.getElementById("top-left-corner");
const topRightCorner = document.getElementById("top-right-corner");
const bottomLeftCorner = document.getElementById("bottom-left-corner");
const bottomRightCorner = document.getElementById("bottom-right-corner");
const userInput = document.getElementById("userInput"); ///gets the input field 
let userAnswer = "";/// variable to save the user's input
let blocks = [topLeftCorner,topRightCorner,bottomLeftCorner,bottomRightCorner];  // an array of random blocks
///create  following variables to save user's performance => let right =0; let wrong = 0;
let rightAnswerCounter = 0;
let wrongAnswerCounter = 0;
///create a level variable to determine the level
let level = 1;
///choose a random number between  [-9,-,8,-7,-6,-5,-6....,10]     -9  to  10
let numbers = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
///create an array of random blocks( this array should contain ${level} elements)
let randomBlocks = []; ////   =>   {  block : <div>a useless block</div> ,number:9    }
for (let index = 0; index < level; index++) {
  //create an array of objects with block and number, values
  ////   =>   {  block : <div>a useless block</div> ,number:9    }
    randomBlocks.push({
    block: blocks[Math.floor(Math.random() * blocks.length)],
    number: numbers[Math.floor(Math.random() * numbers.length)],
});
}
/**
 *
 * Select a  Random block and add all numbers that appears in that block
 *
 */
////selected block is the block we ask the user at the end every section
let selectedBlock =
  randomBlocks[Math.floor(Math.random() * randomBlocks.length)].block;
// console.log(randomBlocks, "random");
///summary of selected blocks   example //// bottomRightCorner ==> -12
let sumOfSelected = randomBlocks
    .filter((x) => x.block == selectedBlock)
    .reduce((partialSum, a) => partialSum + a.number, 0);

// >>>>>>>>>>>>>>>>>>>>>>. INITIALIZATION ENDS HERE<<<<<<<<<<<<<<<<<<<<<<<<<<
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



// >>>>>>>>>>>>>>>>>FUNCTIONS And EVENTS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//// create a next level with new values when user clicks enter
const generateNextLevel = () => {
    selectedBlock.innerHTML = "";
  // selectedBlock = blocks[Math.floor(Math.random()*blocks.length)]
    level++;
    randomBlocks = [];
    for (let index = 0; index < level; index++) {
    randomBlocks.push({block: blocks[Math.floor(Math.random() * blocks.length)],number: numbers[Math.floor(Math.random() * numbers.length)]});
    }
    selectedBlock =
    randomBlocks[Math.floor(Math.random() * randomBlocks.length)].block;
  sumOfSelected = randomBlocks
    .filter((x) => x.block == selectedBlock)
    .reduce((partialSum, a) => partialSum + a.number, 0);
  console.log(selectedBlock, "selected");
  console.log(`Correct Answer :  ${sumOfSelected}`);
//   console.log(randomBlocks, "RANDOM");
};
////////
const showNumbers = (pBlock) => {
  //// show the number inside the block
  if (pBlock.number > 0) {
    ////put + to
    document.getElementById(pBlock.block.id).innerText = "+" + pBlock.number;
  } else {
    //// show numbers between -9 and 0
    document.getElementById(pBlock.block.id).innerText = pBlock.number;
  }
  setTimeout(() => {
    // stops showing the number after 800 milliseconds
    document.getElementById(pBlock.block.id.toString()).innerText = "";
  }, 800); //Time before execution
};
////iterates through randomBlocks  =>>>>> {  block : <div>a useless block</div> ,number:9    }
///shows the calculation pattern (shows each second one block-number pair)
const showPattern = () => {
  function* iterateOverArray(arr) {
    var i = 0;
    while (i < arr.length) {
      yield arr[i++];
    }
  }
  var generator = iterateOverArray(randomBlocks);
  var interval = setInterval(function () {
    var nxt = generator.next();
    if (!nxt || nxt.done) {
      clearTimeout(interval);
      selectedBlock.innerHTML = "?";
    } else {
      showNumbers(nxt.value);
    //   console.log(nxt.value, "next.value");
    }
  }, 1000);
};

////show pattern to start the game
showPattern();
///////
///listen for the userinput
userInput.addEventListener("input", (e) => {
        userAnswer = e.target.value;
  // console.log(userAnswer,"userAnswer")
});
const submitAnswer =(e)=> {
  if (13 == e.keyCode) {
    if (userAnswer == sumOfSelected) {
        userInput.value = "" ////clears the input field so that the users don't need to delete numbers again and again and again....
      rightAnswerCounter++;
      console.log("yeah it's correct");
      generateNextLevel();
      showPattern();
    } else {
        userInput.value = "" ////clears the input field so that the users don't need to delete numbers again and again and again....
      wrongAnswerCounter++;
      console.log("wrong answer :((("); 
      generateNextLevel();
      showPattern();
    }
  }
}
userInput.addEventListener("keydown", submitAnswer);
console.log(`Correct Answer :  ${sumOfSelected}`);
// console.log(randomBlocks, "RANDOM");
let setoneminutetime = new Date();
setoneminutetime.setTime(Date.now() + 1 * 60 * 1000); // Add 1 minutes to current timestamp
let countDownDate = new Date(setoneminutetime).getTime();
//set interval for the actual countdown
let x = setInterval(function () {
    let now = new Date().getTime();
     //end time minus the current time
    let distance = countDownDate - now;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //show countdown  in div demo
    document.getElementById("timeLeft").innerHTML =
    "Time left :" + minutes + "m " + seconds + "s ";
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("timeLeft").innerHTML = "EXPIRED";
    document.getElementById("gameBoard").innerHTML = `
        <style>
        .btn-bfh{
            background-color: #F9C301;
            padding: 20px;
            font-size: xx-large;
            border-radius: 20px;
        }
            a,
            a:link,
            a:visited,
            a:hover,
            a:active{
                text-decoration: none;
            }
        </style>
        <div class="container">
        <h1 class="display-4  text-success" id="numOfCorrectAnswers">correct answers : ${rightAnswerCounter} </h1>
        <h1 class="display-4 text-danger" id="numOfWrongAnswers">wrong answers :${wrongAnswerCounter}</h1>
        <button class="btn-bfh"  ><a href="calculateFast.html">Play again ? </a></button>
        </div>
        `;
    }
}, 1000);
////////////////////////////////////////////////////////////////////////////