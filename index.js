let resultText = document.getElementsByClassName("result-text");
let userInput = document.getElementById("user-input");

let lengthEl = resultText[0];
let volumeEl = resultText[1];
let massEl = resultText[2];

const feetPerMeter = 3.28084;
const gallonPerLiter = 0.264172;
const kilogramPerPounts = 2.2;

userInput.addEventListener("input", function(event){
    let currentNumber = event.target.value;
    let firstResult = 0;
    let secondResult = 0

    /*if (event.target.value == '') {
        event.target.value = 0;
    }*/

    console.log(currentNumber);

    firstResult = Math.floor(currentNumber * feetPerMeter * 1000) / 1000;
    secondResult = Math.floor(currentNumber / feetPerMeter * 1000) / 1000;
    lengthEl.textContent = `${currentNumber} meters = ${firstResult} feet | ${currentNumber} feet = ${secondResult} meters`;


    firstResult = Math.floor(currentNumber * gallonPerLiter * 1000) / 1000;
    secondResult = Math.floor(currentNumber / gallonPerLiter * 1000) / 1000;
    volumeEl.textContent = `${currentNumber} liters = ${firstResult} gallons | ${currentNumber} gallons = ${secondResult} liters`;

    firstResult = (Math.floor(currentNumber * kilogramPerPounts * 1000) / 1000);
    secondResult = Math.floor(currentNumber / kilogramPerPounts * 1000) / 1000;
    massEl.textContent = `${currentNumber} kilos = ${firstResult} pounds | ${currentNumber} pounds = ${secondResult} kilos`;
});



