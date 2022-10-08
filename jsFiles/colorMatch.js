const meaningContainer = document.getElementById('meaningContainer');
const textColorContainer = document.getElementById('textColorContainer');
const resultAnimation = document.getElementById('resultAnimation')
const correctAnswerContainer = document.getElementById('correctAnswerContainer')
const wrongAnswerContainer = document.getElementById('wrongAnswerContainer')
let meaningsOfTexts= ["yellow","black","red","blue"]
let colorsOfTexts = ["yellow","black","red","blue"]
let randomMeaning = meaningsOfTexts[Math.floor(Math.random()*meaningsOfTexts.length)]
let randomColor = colorsOfTexts[Math.floor(Math.random()*colorsOfTexts.length)]
meaningContainer.innerHTML =randomMeaning;
textColorContainer.style.color =randomColor;
let colorMatchesMeaning = false; 
let correctAnswerCounter = 0;
let wrongAnswerCounter = 0;
let userGuessedItRight = false;
if (randomMeaning == textColorContainer.style.color) {
    console.log(' the text color matches the meaning ')
    colorMatchesMeaning = true;
}else{
    colorMatchesMeaning = false;
}

resultAnimation.style.display ='none'

function generateNextQuestion() {
    resultAnimation.style.display ='block'

    if(userGuessedItRight){
        resultAnimation.innerHTML = "<strong class='text-success'>correct &#10003 </strong>"
    }else{
        resultAnimation.innerHTML = "<strong class='text-danger'>wrong 	&#10060; </strong>"
    }

    setTimeout(() => {
        resultAnimation.style.display ='none'
    }, 1000);
    clearTimeout();
    randomMeaning = meaningsOfTexts[Math.floor(Math.random()*meaningsOfTexts.length)];
    randomColor = colorsOfTexts[Math.floor(Math.random()*colorsOfTexts.length)];
    meaningContainer.innerHTML =randomMeaning;
    textColorContainer.style.color =randomColor;

    if (randomMeaning == textColorContainer.style.color) {
        // console.log(' the text color matches the meaning ')
        colorMatchesMeaning = true;
    }else{
        colorMatchesMeaning = false;
    }
}



// textColorContainer.style.color =colors[0]
document.addEventListener("keydown", function(event) {

         ////user thinks that colors don't match

        //  while (event.key == "ArrowLeft") {
    
        //     console.log("lol")
        //  }
    if (event.key == "ArrowLeft"){
        // alert("Left key"); //show the message saying Left key"
        if (colorMatchesMeaning) {
            console.log("wrong")
            userGuessedItRight = false;
            wrongAnswerCounter++;
            wrongAnswerContainer.innerHTML = wrongAnswerCounter;
        }else{
            console.log("you're goddamn right")
            correctAnswerCounter++;
            correctAnswerContainer.innerHTML = correctAnswerCounter;
            userGuessedItRight =true;
        }
        generateNextQuestion();
    } 
         ////user thinks that colors match
    else if (event.key == "ArrowRight"){
        // alert("Right key"); //show the message saying Right key"
        if (colorMatchesMeaning) {
            console.log("right")
            correctAnswerCounter++;
            correctAnswerContainer.innerHTML = correctAnswerCounter;
            userGuessedItRight = true
        }else{
            console.log("false")
            userGuessedItRight = false
            wrongAnswerCounter++;
            wrongAnswerContainer.innerHTML = wrongAnswerCounter;
        }
        generateNextQuestion();
    }
});

let setoneminutetime = new Date();
setoneminutetime.setTime(Date.now() + 1 * 60 * 1000); // Add 1 minutes to current timestamp
let countDownDate = new Date(setoneminutetime).getTime();
//set interval for the actual countdown
let x = setInterval(function() {
    let now = new Date().getTime();
    //end time minus the current time
    let distance = countDownDate - now;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //show countdown  in div demo
    document.getElementById("timeLeft").innerHTML = "Time :" + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timeLeft").innerHTML = "EXPIRED";
    //     main.innerHTML = `

    //     <style>
    //     .btn-bfh{
    //         background-color: #F9C301;
    //         padding: 20px;
    //         font-size: xx-large;
    //         border-radius: 20px;

    //     }

    // </style>
    //     <div >

        

    //     <h1 class="display-4  text-success" id="numOfCorrectAnswers">correct answers :${correctAnswer}</h1>
    //     <h1 class="display-4 text-danger" id="numOfWrongAnswers">wrong answers : ${wrongAnswer}</h1>

    //     <button class="btn-bfh"  ><a href="colorMemoryGame.html">Play again ? </a></button>
        
        
    //     </div>
    
        
    //     `
    }
}, 1000);