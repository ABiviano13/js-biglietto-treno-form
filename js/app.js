// 1. Definire le variabili km e age
const formBtnElement = document.querySelector(
    '.card-generator input[type="button"]'
);
let km = document.querySelector(
    '.card-generator input[name="km"]'
);
let age = document.querySelector(
    '.card-generator select[name="age"]'
);
console.log (km, age);
// 2. Inserire nell'input km i kilometri da percorrere (0.21 al km)
const priceKm = '0,21';
priceBasis = km * priceKm;
console.log (priceKm, priceBasis);
// 3. Applicare i vari sconti per minorenni e over 65 
let minors = document.getElementById('minors');
let elderly = document.getElementById('elderly');
// 4. al click bisogna generare il prezzo totale 