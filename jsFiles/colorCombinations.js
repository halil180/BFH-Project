const btn = document.getElementById('btn')
const circleOne = document.getElementById('circleOne');
const circleTwo = document.getElementById('circleTwo');
const circleThree = document.getElementById('circleThree');
const circleFour = document.getElementById('circleFour');
const circleFive = document.getElementById('circleFive');
const circleSix = document.getElementById('circleSix');
const circleSeven = document.getElementById('circleSeven');
const circleEight = document.getElementById('circleEight');
const correctAnswerCountContainer = document.getElementById('correctAnswerCountContainer');
const wrongAnswerCountContainer = document.getElementById('wrongAnswerCountContainer');
let circleOneClickCounter=0;
let circleTwoClickCounter=0;
let circleThreeClickCounter=0;
let circleFourClickCounter=0;  
let circleFiveClickCounter=0;
let circleSixClickCounter=0;
let circleSevenClickCounter=0;
let circleEightClickCounter=0;
let wrongAnswerCounter= 0;
let correctAnswerCounter= 0;
// Initialisation
/////////
let circles = [circleOne,circleTwo,circleThree,circleFour,circleFive,circleSix,circleSeven,circleEight]
let colors=['red','blue','black']
let  randomPattern =[] 
// for (let index = 0; index < 7; index++) {
//     randomPattern = [{circle:circles[Math.floor(Math.random() * circles.length)],color:colors[Math.floor(Math.random()*colors.length)]}]
// }
for (let index = 0; index < circles.length; index++) {
    randomPattern.push({circle:circles[index],color:colors[Math.floor(Math.random()*colors.length)]})
}
function showPattern() {
    circleOne.disabled=true
    circleTwo.disabled=true
    circleThree.disabled=true
    circleFour.disabled=true
    circleFive.disabled=true
    circleSix.disabled=true
    circleSeven.disabled=true
    circleEight.disabled=true
    circleOne.style.backgroundColor = randomPattern[0].color;
    circleTwo.style.backgroundColor = randomPattern[1].color;
    circleThree.style.backgroundColor = randomPattern[2].color;
    circleFour.style.backgroundColor = randomPattern[3].color;
    circleFive.style.backgroundColor = randomPattern[4].color;
    circleSix.style.backgroundColor = randomPattern[5].color;
    circleSeven.style.backgroundColor = randomPattern[6].color;
    circleEight.style.backgroundColor = randomPattern[7].color;
setTimeout(function(){
    circleOne.disabled=false
    circleTwo.disabled=false
    circleThree.disabled=false
    circleFour.disabled=false
    circleFive.disabled=false
    circleSix.disabled=false
    circleSeven.disabled=false
    circleEight.disabled=false
    circleOne.style.backgroundColor = "white";
    circleTwo.style.backgroundColor = "white";
    circleThree.style.backgroundColor = "white";
    circleFour.style.backgroundColor = "white";
    circleFive.style.backgroundColor = "white";
    circleSix.style.backgroundColor = "white";
    circleSeven.style.backgroundColor = "white";
    circleEight.style.backgroundColor = "white";
}, 5000); //Time before execution
}

showPattern()
console.log(randomPattern)


const handleClick = (pCircle,pCircleClickCounter) => {
    if (pCircleClickCounter == 1) {
        document.getElementById(pCircle.id).style.background ="red"; 
    }else if(pCircleClickCounter == 2){
        document.getElementById(pCircle.id).style.background ="blue"; 
    }else if(pCircleClickCounter == 3){
        document.getElementById(pCircle.id).style.background ="black"; 
    }
    console.log(document.getElementById(pCircle.id).style.backgroundColor ,"previous color ")
    // console.log(document.getElementById(pCircle.id).style.backgroundColor ,"current color ")
//1 time red , two times blue , 3 times black
// 1 - red   2 - blue   3-black   4-red   5-blue  6-black   7-red   8-blue  9-black
    console.log(pCircle.id + "is clicked " + pCircleClickCounter + "times");   
    console.log('clicked ' + pCircle.id);
}
///listens for the click events
circleOne.addEventListener('click',() =>{ 
    if(circleOneClickCounter == 3){
        circleOneClickCounter = 0;
    }
    circleOneClickCounter += 1; 
    handleClick(circleOne,circleOneClickCounter);
});
circleTwo.addEventListener('click',() => {
    if(circleTwoClickCounter == 3){
        circleTwoClickCounter = 0;
    }
    circleTwoClickCounter += 1;
    handleClick(circleTwo,circleTwoClickCounter);
});
circleThree.addEventListener('click',() => {
    if(circleThreeClickCounter == 3){
        circleThreeClickCounter = 0;
    }
    circleThreeClickCounter += 1;
    handleClick(circleThree,circleThreeClickCounter);
});
circleFour.addEventListener('click',() => {
    if(circleFourClickCounter == 3){
        circleFourClickCounter = 0;
    }
    circleFourClickCounter += 1;
    handleClick(circleFour,circleFourClickCounter);
});
circleFive.addEventListener('click',() => {
    if(circleFiveClickCounter == 3){
        circleFiveClickCounter = 0;
    }
    circleFiveClickCounter += 1;
    handleClick(circleFive,circleFiveClickCounter);
});
circleSix.addEventListener('click',() => {
    if(circleSixClickCounter == 3){
        circleSixClickCounter = 0;
    }
    circleSixClickCounter += 1;
    handleClick(circleSix,circleSixClickCounter);

});
circleSeven.addEventListener('click',() => {
    if(circleSevenClickCounter == 3){
        circleSevenClickCounter = 0;
    }
    circleSevenClickCounter += 1;
    handleClick(circleSeven,circleSevenClickCounter);
});
circleEight.addEventListener('click',() => {
    if(circleEightClickCounter == 3){
        circleEightClickCounter = 0;
    }
    circleEightClickCounter += 1;
    handleClick(circleEight,circleEightClickCounter);
});

function checkAnswer(){
if (
    circleOne.style.backgroundColor ==randomPattern[0].color &&
    circleTwo.style.backgroundColor ==randomPattern[1].color &&
    circleThree.style.backgroundColor ==randomPattern[2].color &&
    circleFour.style.backgroundColor ==randomPattern[3].color &&
    circleFive.style.backgroundColor ==randomPattern[4].color &&
    circleSix.style.backgroundColor ==randomPattern[5].color &&
    circleSeven.style.backgroundColor ==randomPattern[6].color &&
    circleEight.style.backgroundColor ==randomPattern[7].color 
    ) {
   alert("you won bitch")
   correctAnswerCounter++
   correctAnswerCountContainer.innerHTML = "Correct Answers :"+ correctAnswerCounter;
   generateNextLevel();
}else{
    wrongAnswerCounter++
    wrongAnswerCountContainer.innerHTML = "Wrong Answers :" + wrongAnswerCounter;
    alert("you lost bitch")
    generateNextLevel();
}
}
function generateNextLevel() {
    circleOneClickCounter = 0;
    circleTwoClickCounter = 0;
    circleThreeClickCounter = 0;
    circleFourClickCounter = 0;  
    circleFiveClickCounter = 0 ;
    circleSixClickCounter = 0 ;
    circleSevenClickCounter = 0 ;
    circleEightClickCounter = 0 ;

    randomPattern =[] 
for (let index = 0; index < circles.length; index++) {
    randomPattern.push({circle:circles[index],color:colors[Math.floor(Math.random()*colors.length)]})
}

showPattern();
}


btn.addEventListener('click',()=> {

    checkAnswer();
})