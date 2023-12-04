const form = document.querySelector(".number-form")
const rangeInput = document.querySelector(".rangeInput");
const numberInput = document.querySelector(".numberInput");
const getChoice = document.querySelector(".choice");
const getResult = document.querySelector(".result");
const playButton = document.querySelector(".playButton");
const HIDDEN_CLASSNAME = "hidden";


function result(myNum, randomNum) {
    getChoice.classList.remove(HIDDEN_CLASSNAME);
    getResult.classList.remove(HIDDEN_CLASSNAME);
    getChoice.innerText = `You chose ${myNum}, machine chose ${randomNum}`;
    myNum = parseInt(myNum);
    if(myNum === randomNum) {
        getResult.innerText=`You Won!`;
    }
    else {
        getResult.innerText=`You Lose!`;
    }
}


function makeRandomNum(event) {
    event.preventDefault();
    const myNum = numberInput.value;
    const maxValue = rangeInput.value;
    const randomNum = Math.ceil(Math.random() * maxValue);

    result(myNum, randomNum);
}

function handleInput() {
    playButton.addEventListener("click", makeRandomNum);
}
function init(){
    rangeInput.oninput = handleInput;
}
init();