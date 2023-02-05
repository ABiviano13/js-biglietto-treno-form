
// 1. Definiamo le variabili km (input)
const km = document.getElementById('km');
console.log (km);
const resultKm = document.getElementById('input-result-km');

const priceKm = 0.21;
console.log (priceKm);

// 2. Definiamo le variabili age (input)
const age = document.getElementById('age');
console.log(age);
const resultAge = document.getElementById('input-result-age');

// 3. Definiamo la variabile prezzo totale
const resultPrice = document.getElementById('pricetotal');
console.log(resultPrice);

// 4. Definiamo la variabile del bottone  
const formbutton = document.querySelector(
    '.card-generator input[type="button"]'
);
console.log(formbutton);

// 5. Definiamo variabili risultato
const firstNameLastName = document.getElementById('firstname-lastname');
const resultName = document.getElementById('input-result-name');
const resultNameTicket = document.getElementById('input-result-name2');
const codiceCp = document.getElementById('codicecp');

  // - Al click sul pulsante si deve generare il prezzo totale
formbutton.addEventListener('click', function () {

    let kmValue = km.value;
    kmValue = parseFloat(kmValue);

    let priceBasis = kmValue * priceKm;

    console.log(kmValue, priceBasis);

    let priceTotal = age.value;

    switch (priceTotal) {
        case 'minorenne':
            let minorsDiscout = priceBasis * 20 / 100;
            priceTotal = priceBasis - minorsDiscout;
            break
        case 'maggiorenne':
            priceTotal = priceBasis;   
            break 
        case 'over65':
            let elderlyDiscout = priceBasis * 40 / 100;
            priceTotal = priceBasis - elderlyDiscout; 
            break   
    };
    console.log(priceTotal);

    const randomCodiceCp = Math.random();

    let nameValue = firstNameLastName.value;

    resultName.innerHTML = nameValue;
    resultNameTicket.innerHTML = nameValue;
    resultKm.innerHTML = kmValue;
    resultAge.innerHTML = age.value;
    resultPrice.innerHTML = priceTotal.toFixed(2);
    codiceCp.innerHTML = randomCodiceCp.toFixed(5);
});
// 5. Stampiamo tutto sul nostro file html
