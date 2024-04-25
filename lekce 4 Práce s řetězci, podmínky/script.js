document.body.innerHTML += `<h1>lekce 4 Práce s řetězci, podmínky</h1>`;

//--------------------------------------Vlastnosti a metody
// console.log('martin'.length); // 6
// console.log('m'.length); // 1
// console.log(''.length); // 0
// console.log('martin'.toUpperCase()); // 'MARTIN'
// console.log('MARTIN'.toLowerCase()); // 'martin'

// // trim() : Odstraní bílé znaky ze začátku a konce.
// console.log('  popokatepetl '.trim()); // 'popokatepetl'
// console.log('  popokatepetl '.trimStart()); // 'popokatepetl  '
// console.log('  popokatepetl '.trimEnd()); // '   popokatepetl'

// // slice(start, end) : Vyřízne z řetězce kus podle zadaných pozic začátku a konce.
// console.log('popokatepetl'.slice(4, 7)); // 'kat'
// console.log('popokatepetl'.slice(0, -1)); // 'popokatepet'

// //indexOf(value) : Vyhledá řetězec zadaný v parametru value uvnitř řetězce, na kterém tuto metodu voláme. Vrací pozici prvního výskytu nebo -1 pokud se obsah value v řetězci nenachází.
// console.log('popokatepetl'.indexOf('kat')); // ⟶ 4
// console.log('popokatepetl'.indexOf('po')); // ⟶ 0
// console.log('popokatepetl'.indexOf('t')); // ⟶ 6
// console.log('popokatepetl'.indexOf('katka')); // ⟶ -1

// //padStart(targetLength, padString) : Prodlouží řetězec na zadanou délku tak, že na začátek přidá opakování řetězce padString. Hodí se na zarovnávání nebo na formátování čísel.
// '12'.padStart(4, '0'); // ⟶ '0012'
// '12'.padStart(4, ' '); // ⟶ '  12'
// '12'.padStart(3, ' '); // ⟶ ' 12'
// '12'.padStart(2, ' '); // ⟶ '12'
// '12'.padEnd(3, '0'); // ⟶ '120'

// --------------------------------------cvičení 1 Vlastnosti a metody
// const title = 'Pán prstenů';
// document.body.innerHTML += title.length + '<br>';
// document.body.innerHTML += title.toUpperCase() + '<br>';
// document.body.innerHTML += title.slice(0, 5) + '<br>';
// document.body.innerHTML += title.slice(title.length -5, title.length) + '<br>';

// --------------------------------------cvičení 2 E-maily
// const email = prompt('Zadejte e-mail:');
// const atIndex = email.indexOf('@');
// const parsedEmail = {
//   userName: email.slice(0, atIndex),
//   domain: email.slice(atIndex + 1),
// };
// document.body.innerHTML += '<p>Uživatelské jméno: ' + parsedEmail.userName + '</p>';
// document.body.innerHTML += '<p>Doména: ' + parsedEmail.domain + '</p>';

// --------------------------------------cvičení 3 Doručování
// const street = prompt("Zadejte ulici:");
// const houseNumber = Number(prompt("Zadejte číslo domu:"));
// const city = prompt("Zadejte město:");
// const zipCode = prompt("Zadejte PSČ:");

// document.body.innerHTML += `<address>
//                             <p>${street} ${houseNumber}</p>
//                             <p>${zipCode} ${city}</p>
//                             </address>`;


//----------------------------Pravdivostní hodnoty, podminky
// const vek = Number(prompt("Zadej vek"))
// const zprava = vek >= 18 ? "vstup povolen" : "vstup zamitnut"

// console.log(zprava)
//----------------------------cvičení 1 Registrace na očkování
// const name = prompt('Zadejte své jméno:');
// const age = Number(prompt('Zadejte svůj věk:'));
// const heslo = prompt('Zadejte nové heslo:');

// if (age >= 65) {
//   document.body.innerHTML += '<p>Věk je v pořádku</p>.';
//   if (heslo.length <= 8) {
//     document.body.innerHTML += '<p>Slabé heslo</p>.';
//   } else {
//     document.body.innerHTML += '<p>Heslo je v pořádku</p>.';
//   }
// } else {
//   document.body.innerHTML += '<p>Nízký věk</p>.';
// }

//----------------------------cvičení 2 Cena vstupenky
// const plnaCena = 12;
// let cena;
// const age = Number(prompt('Zadejte svůj věk:'));
// if (age < 6) {
//   cena = 0;
// } else if (age >= 6 && age <= 26) {
//   cena = plnaCena * 0.65;
// } else if (age >= 27 && age <= 64) {
//   cena = plnaCena;
// } else {
//   cena = plnaCena * 0.5;
// }
// cena = Math.ceil(cena);
// document.body.innerHTML += `<p>Cena lístku je ${cena} €.`;

// -------------------------------------------Doporučené úložky na doma
// ----------------------------------cvičení 1 FIT e-mail
// const firstName = prompt('Zadejte svůe jmeno:');
// const lastName = prompt('Zadejte svůe příjmení:');
// const email = lastName.trim().slice(0, 5) + firstName.trim().slice(0, 3);
// document.body.innerHTML += `<p>Vaš email je: ${email}@fit.cvut.cz</p>`;

// ----------------------------možnost 2
// const fullname = String(prompt('Zadejte Vaše jmeno:'))
//       .toLowerCase()
//       .trim()
//       .slice(0,3);
// const surname = String(prompt('Zadejte Vaše primeni:'))
//       .toLowerCase()
//       .trim()
//       .slice(0,5);
// const email = surname+fullname;
// document.body.innerHTML += `<p>Vase emeilova adresa: ${email}@fit.cvut.cz</p>`;

// -----------------------------------cvičení 2 Množstevní slevy
// const kus = Number(prompt('Zadejte kolik kusu chcete objednat:'));
// let totalPrice;
// if (kus < 50) {
//     totalPrice = kus*300;
// }
// else if (kus >= 50 && kus < 200) {
//     totalPrice = kus*250;
// }
// else if (kus >= 200 && kus < 500) {
//     totalPrice = kus*200;
// }
// else if (kus >= 500 && kus < 1000) {
//     totalPrice = kus*150;
// }
// else {
//     totalPrice = kus*120;
// }
// document.body.innerHTML += `<p> celkova cena za vas nakup bude ${totalPrice} cze.</p>`;

// ----------------------------------------------Volitelné úložky na doma
// -----------------------------------cvičení 1 Ruleta
// const number = prompt("Zadejte číslo od 0 do 36 včetně");

// if (number === '0'){
//     document.body.innerHTML = "<p>Vaše číslo je ZERO a je zelené</p>";
//  }    
// else if ((number % 2 === 0 && number>0 && number<=10) || (number % 2 === 0 && number>19 && number<=28)) {
//         document.body.innerHTML = "<p>Zadané číslo je sudé a černe</p>";
//     }
//     else if ((number % 2 === 1 && number>0 && number<=10) || (number % 2 === 1 && number>19 && number<=28)) {
//         document.body.innerHTML = "<p>Zadané číslo je  liché a červene</p>";
//     }
//     else if ((number % 2 === 0 && number>0 && number<=19) || (number>28 && number<=36)) {
//     document.body.innerHTML = "<p>Zadané číslo je sudé a červene</p>";
// }
//     else if ((number % 2 === 1 && number>10 && number<=19) || (number>28 && number<=36)) {
//     document.body.innerHTML = "<p>Zadané číslo je liché a černe</p>";
// }
//  else {
//  alert ("Zadali jste špatné číslo!");
//  }

// -----------------------------------cvičení 2 Přestupný rok
// const year = prompt("Zadejte rok");
// const num = parseInt(year);

// if (num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)){
    
//     document.body.innerHTML += `<p>Rok ${num} je přestupný</p>`;
// }
// else {
//     document.body.innerHTML += `<p>Rok ${num} neni přestupný</p>`;
// }

// --------------------------------------možnost 2

// const year = Number(prompt('Zadej kalendářní rok:'));
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       document.body.innerHTML = `<p>${year} je přestupný</p>`;
//     } else {
//       document.body.innerHTML = `<p>${year} není přestupný</p>`;
//     }
//   } else {
//     document.body.innerHTML = `<p>${year} je přestupný</p>`;
//   }
// } else {
//   document.body.innerHTML = `<p>${year} není přestupný</p>`;
// }

// -----------------------------------cvičení 3

//  -----------------------------------cvičení 4 
// let number = 5.589855478554;
// console.log(number.toFixed(3)); // 5.590
// console.log(number.toFixed(1)); // 5.6
// const jmeno = prompt("Zadejte Vaše křestní jméno bez diakritiky:").toLowerCase();
// const prijmeni = prompt("Zadejte Vaše příjmení bez diakritiky:").toLowerCase();
// console.log(jmeno, prijmeni);