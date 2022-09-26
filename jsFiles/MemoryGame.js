

const cards = document.querySelectorAll(".card");
const timer = document.getElementById("time");
const background = document.getElementById('bg')
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

const  reset = document.getElementById("reset")

let counter = 0;
function func(){
    let minutes = Math.floor(counter/60);
    let seconds =Math.floor(counter%60);
    timer.innerHTML = `${minutes} min  ${seconds } sec`;
    counter++
    return `${minutes} min  ${seconds } sec`
}


function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
            
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}
function matchCards(img1, img2) {
    if(img1 === img2) { ///check if two images match
        matched++;
        if(matched == 8) {
                clearInterval(played)
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => { //shake if two cars don't match
        background.classList.add('bg-danger')
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        background.classList.remove('bg-danger')
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}
function shuffleCard() {
    let played  =setInterval(func,1000)
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `./assets/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();
    
cards.forEach(card => { // adding click event to all cards
    card.addEventListener("click", flipCard);
});


// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reset.addEventListener("click", reload, false);









