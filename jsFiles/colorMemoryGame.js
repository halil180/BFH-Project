const greenBtnAudio =  document.getElementById('audio1');
const yellowBtnAudio =  document.getElementById('audio2');
const blueBtnAudio =  document.getElementById('audio3');
const redBtnAudio =  document.getElementById('audio4');
const app = document.getElementById('app');
let gameOver = false;
let level = 1;
if (!gameOver) {
    app.innerHTML = `
<div class="container">

<div class="gameBoard">
<nav>
<a href="index.html"><i class="fa-solid fa-left-long fa-2xl"></i> </a></nav>
<div id="score" >Level 1</div>
<div class="squareContainer">
    <button id="greenSquare"></button>
    <button id="bfhYellowSquare"></button>
    <button id="policeBlueSquare"></button>
    <button id="redSquare"></button>
</div>
</div>
</div>
`
}else{
    app.innerHTML = `
  <h1>game over :((</h1>
  ` 
}
const score = document.getElementById('score')
const greenSquare = document.getElementById('greenSquare');
const bfhYellowSquare = document.getElementById('bfhYellowSquare');
const policeBlueSquare = document.getElementById('policeBlueSquare');
const redSquare = document.getElementById('redSquare');
// greenSquare.style.backgroundImage = "url('file:///Users/mrapple/Desktop/MYPROJECT/BFH-Project/assets/bfh.png ')";
function showLogo(pColor) {
  switch (pColor) {
    case greenSquare:
        greenBtnAudio.play()
      break;
    case bfhYellowSquare:
      yellowBtnAudio.play();
      break;
    case policeBlueSquare:
      blueBtnAudio.play()
      break;
    case redSquare:
    redBtnAudio.play()
      break;
  }
    pColor.style.backgroundImage = "url('../BFH-Project/assets/bfh.png ')";
    pColor.style.backgroundRepeat = 'no-repeat'
    pColor.style.backgroundSize = '100% 100%'
    // pColor.style.backgroundColor = "#f3f3f3";
    setTimeout(function(){
        pColor.style.backgroundImage = "";
        pColor.style.backgroundRepeat = 'no-repeat'
        pColor.style.backgroundSize = '100% 100%'
   }, 800); //Time before execution
}
///greenSquare.disabled = true;
let compareIndex = 0;
const colors = [greenSquare,bfhYellowSquare,policeBlueSquare,redSquare]
let pattern =[]
let answer =[]
//compare two arrays // random index
for (let i = 0; i < level; i++) {
    let index = Math.floor(Math.random() * colors.length);
    pattern.push(colors[index]);
  //  console.log(colors[index])
} 
// var myArr = [0,1,2,3,4];
function showPattern(){
    function* iterateOverArray (arr) {
        var i = 0;
        while (i < arr.length) {
          yield arr[i++];
        }
      }
      var generator = iterateOverArray(pattern);
      var interval = setInterval(function () {
        var nxt = generator.next();
        if (!nxt || nxt.done) {
          clearTimeout(interval);   
        }
        else {
          showLogo(nxt.value)
          console.log(nxt.value);
        }
      }, 1000);
      
}
showPattern()

console.log(pattern , "pattern")
greenSquare.addEventListener('click',function name() {
    checkColors(greenSquare)
   greenBtnAudio.play();
})
bfhYellowSquare.addEventListener('click',function name() {
    checkColors(bfhYellowSquare)
    yellowBtnAudio.play();
})
policeBlueSquare.addEventListener('click',function name() {
    checkColors(policeBlueSquare)
   blueBtnAudio.play();
})
redSquare.addEventListener('click',function name() {
    checkColors(redSquare)
    redBtnAudio.play();
})

function checkColors(pColor) {
    answer.push(pColor)

    
    
    if((compareIndex ==  level -1) && !gameOver && (answer.toString() === pattern.toString())  &&  pattern[compareIndex] == answer[compareIndex]) {
        console.log('next level yeah')
        compareIndex = 0;
        level++
        score.innerHTML =`Level ${level}`;
        pattern = []
        answer = []
        for (let i = 0; i < level; i++) {
            let index = Math.floor(Math.random() * colors.length);
            pattern.push(colors[index]);
            console.log(pattern)
        }
        showPattern();
        // console.log(pattern,"my pattern")
        // console.log(answer, "my answer")
        // console.log(pattern[compareIndex], "pattern" , answer[compareIndex] , "answer")
    }else if( pattern[compareIndex] == answer[compareIndex]){
        compareIndex++
        console.log("correct answer")
    }else if( pattern[compareIndex] !== answer[compareIndex]){
    //    console.log(pattern,"my pattern")
    //    console.log(answer, "my answer")
        // alert('game over')   
        gameOver = true;
        app.innerHTML=`
        <style>
        
        a{
          text-decoration:none;
          color:#37556E;
        }
        a:hover{
          text-decoration:none;
          color:#37556E;
        }
        
        
        </style>
        
        <div class="container d-flex flex-column p-4" >
        <a href="index.html"><i class="m-4 text-light fa-solid fa-left-long fa-2xl"></i> </a>
        <button class="btn-bfh"  ><a href="colorMemoryGame.html">Play again ? </a></button>
          
        </div>

        `
    }
}