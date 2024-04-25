document.body.innerHTML += `<h1>Hello world!</h1>`;

//------------------------------ Cvičení 1: Výplata
//Měsíční příjem
document.body.innerHTML += 21 * 7 * 320;
//Daň
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.floor(21 * 7 * 265 * (1 - 0.6) * 0.15);

// //------------------------------ Cvičení 2: Délka filmu
// // Počet celých hodin
//  document.body.innerHTML += Math.floor(223 / 60);

// //  A počet zbývajících minut
// document.body.innerHTML += '<br>';
// document.body.innerHTML += 223 % 60;

// //------------------------------ Cvičení 3: E-mail
// 'Franta' + '.' + 'Dobrota' + '@mujmail.com';

// //------------------------------ Cvičení 4: Náhodná čísla

// document.body.innerHTML = Math.random();

// //------------------------------ Cvičení 5: Převod měny
// const wageInEur = 20;
// const rate = 24.55;
// const wageInCzk = Math.round(wageInEur * rate);
// document.body.innerHTML += '<h1>Mzda v korunách: ' + wageInCzk + ' Kč</h1>';

//-------------------------Doporučené úložky na doma 1: Příjem divadla
// const plnaCena = 12;
// const pocetNavstevnikuNaPredstaveni = 174;
// const pocetPredstaveniZaMesic = 15;
// const prijem =
//   plnaCena * pocetNavstevnikuNaPredstaveni * pocetPredstaveniZaMesic;
// document.body.innerHTML = '<p>Příjem divadla: ' + prijem + ' Kč</p>';

// const studentskaCena = 0.65 * plnaCena;
// const studenti = 0.4;
// const prijmySeStudenty =
//   (plnaCena * (1 - studenti) + studentskaCena * studenti) *
//   pocetNavstevnikuNaPredstaveni *
//   pocetPredstaveniZaMesic;
// document.body.innerHTML +=
//   '<p>Příjem divadla se slevou pro studenty: ' + prijmySeStudenty + ' Kč</p>';

//-------------------------Doporučené úložky na doma 2: Schopnější zaokrouhlování
// const x = 6543.14159;
// const naDesetiny = Math.round(x * 10) / 10;
// const naSetiny = Math.round(x * 100) / 100;
// const naStovky = Math.round(x / 100) * 100;

//-------------------------Doporučené úložky na doma 3: Házení kostkou
// const cisloNaKostce = 1 + Math.floor(Math.random() * 6);