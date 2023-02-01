
// 1. Definiamo le variabili km (input)
let km = document.getElementById('km')
console.log (km);

  // - Definiamo il prezzo al kilometro (0,21 al kilometro)
// const priceKm = '0,21';
// parseInt(priceKm);
// console.log (priceKm);

// 2. Definiamo le variabili age (input)
let age = document.getElementById('age')
console.log(age);

// 3. Definiamo la variabile del bottone  
const formbutton = document.querySelector(
    '.card-generator input[type="button"]'
);
console.log(formbutton);

  // - Al click sul pulsante si deve generare il prezzo totale
formbutton.addEventListener('click', function () {
    km = km.value;
    parseInt(km);

    let priceKm = '0,21';
    parseFloat(priceKm)
    console.log (priceKm);

    const priceBasis = km * priceKm;
    parseInt(priceBasis);

    const minorsDiscout = priceBasis * (20 / 100);
    const elderlyDiscout = priceBasis * (40 / 100);
    parseInt(minorsDiscout, elderlyDiscout);
    console.log(km, priceBasis, minorsDiscout, elderlyDiscout);

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
