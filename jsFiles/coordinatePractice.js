const coordinateOneThree = document.getElementById('coordinate-one-three');
const coordinateTwoThree = document.getElementById('coordinate-two-three');
const coordinateThreeThree= document.getElementById('coordinate-three-three');
const coordinateOneTwo= document.getElementById('coordinate-one-two');
const coordinateTwoTwo= document.getElementById('coordinate-two-two');
const coordinateThreeTwo= document.getElementById('coordinate-three-two');
const coordinateOneOne= document.getElementById('coordinate-one-one');
const coordinateTwoOne= document.getElementById('coordinate-two-one');
const coordinateThreeOne= document.getElementById('coordinate-three-one');
const numOfCorrectAnswers = document.getElementById('numOfCorrectAnswers');
const numOfWrongAnswers = document.getElementById('numOfWrongAnswers');
const main = document.getElementById('main');
let userAnswer = '';
let correctAnswer = 0;
let wrongAnswer = 0;
var setoneminutetime = new Date();
setoneminutetime.setTime(Date.now() + 1 * 60 * 1000); // Add 1 minutes to current timestamp
var countDownDate = new Date(setoneminutetime).getTime();
//set interval for the actual countdown
var x = setInterval(function() {
    var now = new Date().getTime();
    //end time minus the current time
    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //show countdown  in div demo
    document.getElementById("demo").innerHTML = "Time left :" + minutes + "m " + seconds + "s ";
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";


        main.innerHTML = `

        <style>
        main{
            background:#37556E;
        }
        .btn-bfh{
            background-color: #F9C301;
            padding: 20px;
            font-size: xx-large;
            border-radius: 20px;

        }
        a{
            text-decoration: none;
            color:#37556E;
        }

    </style>
    <a href="index.html"><i class="fa-solid fa-left-long fa-2xl text-light"></i> </a>
        <div class="d-flex justify-content-center flex-column">

        

        <h1 class="display-2  text-success" id="numOfCorrectAnswers">correct answers : ${correctAnswer}</h1>
        <h1 class="display-2 text-danger" id="numOfWrongAnswers">wrong answers : ${wrongAnswer}</h1>

        <button class="btn-bfh"  ><a href="colorMemoryGame.html">Play again ? </a></button>
        
        
        </div>
    
        
        `
    }
}, 1000);
const userInput = document.getElementById('userInput');
let coordinates = [ 
    {
        coordinateItem:    coordinateOneThree,
        coordinateNumber:    13,
    },
    {
        coordinateItem:    coordinateTwoThree,
        coordinateNumber:    23,
    },
    {
        coordinateItem:    coordinateThreeThree,
        coordinateNumber:    33,
    },
    {
        coordinateItem:    coordinateOneTwo,
        coordinateNumber:    12,
    },
    {
        coordinateItem:    coordinateTwoTwo,
        coordinateNumber:    22,
    },
    {
        coordinateItem:    coordinateThreeTwo,
        coordinateNumber:    32,
    },
    {
        coordinateItem:    coordinateOneOne,
        coordinateNumber:    11,
    },
    {
        coordinateItem:    coordinateTwoOne,
        coordinateNumber:    21,
    },
    {
        coordinateItem:    coordinateThreeOne,
        coordinateNumber:    31,
    },
]
//  coordinateOneThree.style.background ="red";
//  coordinateTwoThree.style.background ="red";
//  coordinateThreeThree.style.background ="red";
//  coordinateOneTwo.style.background ="red";
//  coordinateTwoTwo.style.background ="red";
//  coordinateThreeTwo.style.background ="red";
//  coordinateOneOne.style.background ="red";
//  coordinateTwoOne.style.background ="red";
//  coordinateThreeOne.style.background ="red";
///select a random coordinate from the array of coordinates
let randomItem = coordinates[Math.floor(Math.random()*coordinates.length)];
randomItem.coordinateItem.style.background = 'red';
function getRandomCoordinate() {
    randomItem = coordinates[Math.floor(Math.random()*coordinates.length)];
    console.log(randomItem)
    randomItem.coordinateItem.style.background = 'red';
}
console.log(randomItem)
// randomItem.style.background ="red";
userInput.addEventListener('input', updateValue);
userInput.addEventListener('keydown', submitAnswer);
function submitAnswer(e) {
    if (13 == e.keyCode) {
        if (userAnswer == randomItem.coordinateNumber) {
            userInput.value =''
            console.log('correct answer')
            randomItem.coordinateItem.style.background = '#37556E';
            ++correctAnswer
            numOfCorrectAnswers.innerHTML =`correct : ${correctAnswer}` 
            getRandomCoordinate()

        }else{
            userInput.value =''
            randomItem.coordinateItem.style.background = '#37556E';
            getRandomCoordinate();
            ++wrongAnswer
            numOfWrongAnswers.innerHTML = `wrong : ${wrongAnswer}` 
        }
        console.log('answer ', userAnswer)
    }
}
function updateValue(e) {
    userAnswer = e.target.value;
    console.log(e.target.value);
}