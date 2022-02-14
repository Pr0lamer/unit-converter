let resultText = document.getElementsByClassName("result-text");
let userInput = document.getElementById("user-input");

const feetPerMeter = 3.28084;
const gallonPerLiter = 0.264172;
const kilkilogramPerPounts = 2.2;

let currentNumber = 0;


userInput.addEventListener("input", function(event){
    currentNumber = event.target.value;
    if (event.target.value == '') {
        event.target.value = 0
      }
    console.log(currentNumber);
});

console.log(userInput.textContent);
let lengthEl = resultText[0];
let volumehEl = resultText[1];
let massEl = resultText[2];
