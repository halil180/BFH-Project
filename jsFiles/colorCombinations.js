const circleOne = document.getElementById('circleOne');
const circleTwo = document.getElementById('circleTwo');
const circleThree = document.getElementById('circleThree');
const circleFour = document.getElementById('circleFour');
const circleFive = document.getElementById('circleFive');
const circleSix = document.getElementById('circleSix');
const circleSeven = document.getElementById('circleSeven');
const circleEight = document.getElementById('circleEight');
let circleOneClickCounter = 0;
let circleTwoClickCounter = 0;
let circleThreeClickCounter = 0;
let circleFourClickCounter = 0;  
let circleFiveClickCounter = 0 ;
let circleSixClickCounter = 0 ;
let circleSevenClickCounter = 0 ;
let circleEightClickCounter = 0 ;

// Initialisation
/////////

let randomPattern = [circleOne,circleTwo,circleThree,circleFour,circleFive,circleSix,circleSeven,circleEight]


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
    if(circleFourClickCounter == 3){
        circleFourClickCounter = 0;
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