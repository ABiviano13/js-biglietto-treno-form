
// 1. Definiamo le variabili km (input)
const km = document.getElementById('km');
console.log (km);

const priceKm = 0.21;
console.log (priceKm);

// 2. Definiamo le variabili age (input)
const age = document.getElementById('age');
console.log(age);

// 3. Definiamo la variabile prezzo totale
const resultPrice = document.getElementById('pricetotal');
console.log(resultPrice);

// 4. Definiamo la variabile del bottone  
const formbutton = document.querySelector(
    '.card-generator input[type="button"]'
);
console.log(formbutton);

  // - Al click sul pulsante si deve generare il prezzo totale
formbutton.addEventListener('click', function () {
    let kmValue = km.value;
    kmValue = parseFloat(kmValue);

    let priceBasis = kmValue * priceKm;

    console.log(kmValue, priceBasis);

    let priceTotal = age.value;

    switch (priceTotal) {
        case 'minors':
            let minorsDiscout = priceBasis * 20 / 100;
            priceTotal = priceBasis - minorsDiscout;
            break
        case 'adults':
            priceTotal = priceBasis;   
            break 
        case 'elderly':
            let elderlyDiscout = priceBasis * 40 / 100;
            priceTotal = priceBasis - elderlyDiscout; 
            break   
    };
    console.log(priceTotal);

    resultPrice.innerHTML = priceTotal;
});
// 5. Stampiamo tutto sul nostro file html
