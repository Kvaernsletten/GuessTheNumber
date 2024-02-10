updateView();
let randomNumber;
let inputField = document.getElementById('inputField');
let results = document.getElementById('results');

generateNumber();

function updateView(){

    document.getElementById('app').innerHTML = /*HTML*/`
    
    <h1>Guess the number I am thinking of between 1 and 100</h1>
    <div class="container">
        <input id="inputField" type="number" max="100" min="1">
        <button onclick="guess()">Guess</button>
    </div>
    <h2 id="results"></h2>
    `;

}

function generateNumber(){
    randomNumber = Math.floor(Math.random() * (100-1) +1)
    console.log(randomNumber)
}

function guess(){
    console.log(inputField.value)
    if(inputField.value == randomNumber){
        console.log('correct!')
        results.innerHTML = `${inputField.value} is correct!`;
        results.style.color = 'green';
        generateNumber();
    }
    else if(inputField.value > randomNumber){
        console.log('number too high, try again!')
        results.innerHTML = `${inputField.value} is too high, try again!`;
        results.style.color = '';
    }
    else{
        console.log('number too low, go higher!')
        results.innerHTML = `${inputField.value} is too low, go higher!`;
        results.style.color = '';
    }
}