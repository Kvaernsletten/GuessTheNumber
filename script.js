
let randomNumber;
let inputField;
let previousGuess = 1;
let results;

let result = "";
let resultClass;

generateNumber();
updateView();

function updateView(){


    document.getElementById('app').innerHTML = /*HTML*/`
    
    <h1>Guess the number I am thinking of between 1 and 100</h1>
    <div class="container">
        <input id="inputField" type="number" max="100" min="1" placeholder="50" value="${previousGuess}">
        <button onclick="guess()">Guess</button>
    </div>
    <h2 id="results" class=${resultClass}>${result}</h2>
    `;
}

function generateNumber(){
    randomNumber = Math.floor(Math.random() * (100-1) +1)
    console.log(randomNumber)
}

function guess(){
    inputField = document.getElementById('inputField');
    results = document.getElementById('results');
    previousGuess = inputField.value;
    inputField.value = previousGuess;

    if(inputField.value == randomNumber){
        console.log('correct!')
        result = `${inputField.value} is correct!`;
        resultClass = "green";
        generateNumber();
    }
    else if(inputField.value > randomNumber){
        console.log('number too high, try again!')
        result = `${inputField.value} is too high, try again!`;
        resultClass = "";
    }
    else{
        console.log('number too low, go higher!')
        result = `${inputField.value} is too low, go higher!`;
        resultClass = "";
    }
    updateView();
}