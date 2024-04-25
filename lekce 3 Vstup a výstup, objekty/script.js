// -------------------Cvičení 1: Očkování
// const celeJmeno = prompt("Jake je vase jmeno a primeni?");
// const vek = Number(prompt("Jaky je vas vek?"));

// document.body.innerHTML += "<p>" + celeJmeno + ", vek: " + vek + "</p>";
// alert(celeJmeno + ", vek: " + vek); 

// -------------------Cvičení 2: Výplata jako stránka
// const hodinovaSazba = Number(prompt("Jaká je vaše hodinová sazba?"));
// const pocetHodin = Number(prompt("Kolik hodin denně pracujete?"));
// const pocetDni = Number(prompt("Kolik dní měsíčně pracujete?"));
// document.body.innerHTML += "<p>Vaše vyplata činí " + (hodinovaSazba*pocetHodin*pocetDni) + " korun</p>";

// -------------------Cvičení 3: Realitka
// const tridni = prompt("Zadej jmeno tridniho ucitele")
// const nazevTridy = prompt("Zadej oznaceni tridy")
// const trida = {
//     jmenoTridni: tridni,
//     jmenoTridy: nazevTridy
// }

// trida.jmenoTridni = tridni
// trida.jmenoTridy = nazevTridy

// console.log(trida)

// const apartment = {
//     type: 'rent',
//     disposition: '3+1',
//     area: {
//       floorage: 100,
//       balcony: 2,
//       units: 'sqm',
//     },
//     city: 'Prague',
//     district: 'Old Town',
//     price: {
//       rent: 28000,
//       fees: {
//         water: 1000,
//         energy: 2500,
//         services: 560,
//       },
//       currency: 'czk',
//     },
//     ownership: 'personal',
//     condition: 'renovated',
//     status: 'free',
//     floor: 3,
//   };
//   ​
//   document.body.innerHTML += "<p>Dispozice: "+ apartment.disposition +"</p>"
//   document.body.innerHTML += "<p>Najem bez poplatku: "+ apartment.price.rent +"</p>"
//   document.body.innerHTML += "<p>Vymera bytu: "+ apartment.area.floorage + apartment.area.units +"</p>"
//   ​
//   const city = apartment.city;
//   const district = apartment.district;
//   ​
//   document.body.innerHTML += "<p>Mesto: "+ city +"</p>"
//   document.body.innerHTML += "<p>Mestska cast: "+ district +"</p>"
//   ​
//   apartment.status = "taken"
//   document.body.innerHTML += "<p>Stav inzeratu: "+ apartment.status +"</p>"

// -------------------Cvičení 4: Knihovna
// const book = {
//     title: 'Lord of the Rings',
//     author: {
//       name: 'John Ronald Reuel',
//       surename: 'Tolkien',
//       age: 81,
//     },
//     numberOfPages: 2057,
//     movie: {
//       year: 2000,
//       director: {
//         name: 'Peter',
//         surname: 'Jackson',
//       },
//       actors: {
//         actor1: {
//           name: 'Orlando',
//           surname: 'Bloom',
//           characterName: 'Legolas',
//         },
//         actor2: {
//           name: 'Elijah',
//           surname: 'Wood',
//           characterName: 'Frodo',
//         },
//         actor3: {
//           name: 'Viggo',
//           surname: 'Mortensen',
//           characterName: 'Aragorn',
//         },
//       },
//     },
//   }
// -------------------Cvičení 5: Očkování – objekty
// const person = {
//     name: prompt("Jaké je vaše jméno a příjmení?"),
//     age: Number(prompt("Jaký je váš věk?")),
//     language: window.navigator.language,
//   };
  
//   document.body.innerHTML += "<p>Zadané jméno: " + person.name + ", váš věk: " + person.age + "</p>";
//   document.body.innerHTML += "<p>Váš jazyk: " + person.language + "</p>";
//   document.body.innerHTML += "<p>Byli jste zaregistrováni na očkování.</p>";

// -------------------Doporučené úložky na doma Cvičení 1: Formátovač data
// const den = prompt('Zadej den:');
// const mesic = prompt('Zadej měsíc:');
// const rok = prompt('Zadej rok:');

// document.body.innerHTML +=
//   '<p class="date"><span class="day">' +
//   den +
//   '</span>. <span class="month">' +
//   mesic +
//   '</span>. <span class="year">' +
//   rok +
//   '</span></p>';

// -------------------Doporučené úložky na doma Cvičení 2: Fahrnheit vs. Celsius
// const fahrnheit = prompt('Zadej teplotu ve stupních Fahrenheita:');

// document.body.innerHTML =
//   '<h1>' +
//   fahrnheit +
//   ' stupňů Fahrenheita = ' +
//   Math.round((5 * (fahrnheit - 32)) / 9) +
//   ' stupňů Celsia';

// -------------------Doporučené úložky na doma Cvičení 3: Letenka
// const flight = {
//     id: '145c01af48dd00002715248e_0',
//     dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
//     aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
//     duration: {
//       departure: 8400,
//       return: 0,
//       total: 8400,
//     },
//     fly_duration: '2h 20m',
//     flyFrom: 'PRG',
//     cityFrom: 'Prague',
//     cityCodeFrom: 'PRG',
//     countryFrom: {
//       code: 'CZ',
//       name: 'Czechia',
//     },
//     flyTo: 'BCN',
//     cityTo: 'Barcelona',
//     cityCodeTo: 'BCN',
//     countryTo: {
//       code: 'ES',
//       name: 'Spain',
//     },
//     distance: 1359.54,
//     airline: 'FR',
//     pnr_count: 1,
//     technical_stops: 0,
//     price: 36,
//     bags_price: {
//       1: 34.95,
//       2: 69.91,
//     },
//     baglimit: {
//       hand_width: 20,
//       hand_height: 40,
//       hand_length: 55,
//       hand_weight: 10,
//       hold_width: 81,
//       hold_height: 119,
//       hold_length: 119,
//       hold_dimensions_sum: 319,
//       hold_weight: 20,
//     },
//     availability: {
//       seats: 2,
//     },
//     conversion: {
//       EUR: 36,
//     },
//     quality: 66.66659,
//   };
  
//   document.body.innerHTML =
//     '<p><strong>Startovní země:</strong> ' + flight.countryFrom.name + '</p>';
//   document.body.innerHTML +=
//     '<p><strong>Startovní země:</strong> ' + flight.countryTo.name + '</p>';
//   const baglimit = flight.baglimit;
//   document.body.innerHTML +=
//     '<p><strong>Maximální šířka příručního zavazadla:</strong> ' +
//     baglimit.hand_width +
//     ' cm</p>';
//   document.body.innerHTML +=
//     '<p><strong>Maximální výška příručního zavazadla:</strong> ' +
//     baglimit.hand_height +
//     ' cm</p>';
//   document.body.innerHTML +=
//     '<p><strong>Maximální délka příručního zavazadla:</strong> ' +
//     baglimit.hand_length +
//     ' cm</p>';
//   document.body.innerHTML +=
//     '<p><strong>Cena druhého zavazadla:</strong> ' +
//     Math.ceil(flight.bags_price[2] * flight.conversion.EUR) +
//     ' Kč</p>';

// -------------------Doporučené úložky na doma Cvičení 4: Velikost okna

