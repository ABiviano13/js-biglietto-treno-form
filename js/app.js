// // 1. Definire le variabili km e age
// const formBtnElement = document.querySelector(
//     '.card-generator input[type="button"]'
// );
// let km = document.querySelector(
//     '.card-generator input[name="km"]'
// );
// let age = document.querySelector(
//     '.card-generator select[name="age"]'
// );
// console.log(km, age);
// // 2. Inserire nell'input km i kilometri da percorrere (0.21 al km)
// const priceKm = '0,21';
// let priceBasis = km * priceKm;
// console.log(priceKm, priceBasis);
// // 3. Applicare i vari sconti per minorenni e over 65 
// let minors = document.getElementById('minors');
// let elderly = document.getElementById('elderly');
// minors = priceBasis * 20 / 100
// elderly = priceBasis * 40 / 100
// console.log(minors, elderly)
// // 4. al click bisogna generare il prezzo totale 
// formBtnElement.addEventListener('click', function () {

// 	let age = age.value

// 	switch (color) {
// 		case 'minors':
// 			discout = priceBasis - minors;
// 			break
// 		case 'adults':
// 			discout = priceBasis;
// 			break
// 		case 'elderly':
// 			discout = priceBasis - elderly;
// 			break
// 	}
// })




// 1. Definiamo le variabili km (input)
let km = document.querySelector(
    '.card-generator input[name="km"]'
);
console.log (km);
  // - Definiamo il prezzo al kilometro (0,21 al kilometro)
const priceKm = '0,21';
console.log (priceKm);
// 2. Definiamo le variabili age (input)
let age = document.querySelector(
    '.card-generator select[name="age"]'
);
console.log(age);
// 3. Definiamo la variabile del bottone  
const formbutton = document.querySelector(
    '.card-generator input[type="button"]'
);
console.log(formbutton);
  // - Al click sul pulsante si deve generare il prezzo totale
formbutton.addEventListener('click', function () {
    const priceBasis = km * priceKm;

    let minorsDiscout = priceBasis * (20 / 100);
    let elderlyDiscout = priceBasis * (40 / 100);
    console.log(priceBasis, minorsDiscout, elderlyDiscout)

    let priceTotal = age.value;

    switch (priceTotal) {
        case 'minors':
            priceTotal = priceBasis - minorsDiscout;
            break
        case 'adults':
            priceTotal = priceBasis;   
            break 
        case 'elderly':
            priceTotal = priceBasis - elderlyDiscout; 
            break   
    }
    console.log(priceTotal)
})
// 4. Stampiamo tutto sul nostro file html



// const priceBasis = km * priceKm;
