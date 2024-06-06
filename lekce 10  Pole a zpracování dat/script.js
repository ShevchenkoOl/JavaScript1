//---------------cikl While------------------
// const hesloDatabaze = "SuperTajneHeslo123"
// let hesloUzivatele = prompt("Zadej heslo")
// let pocetPokusu = 0

// while(hesloDatabaze !== hesloUzivatele && pocetPokusu < 5) {
//     hesloUzivatele = prompt("Spatne zadane heslo, zkus to znovu")
//     pocetPokusu++
// }

// console.log("Prihlasen");

//------------------cikl For --------------------
// const polozky = ["ananas", "mrkev", "jablko"]

// for(let i = 0; i < polozky.length; i++) {
//     console.log(polozky[i])
// }

//---------------------------------------Cvičení 1 Pole v divadle
// const spectators = [77, 43, 15, 99, 30];
// spectators.push(12);

// const theatre = [13.5, 12.7, 11.2, 12.3, 15.1];
// theatre.pop();

// const plays = [
//   'Pýcha a předsudek ',
//   'Maryša',
//   'Kauza pražské kavárny',
//   'Kdo je tady ředitel?',
// ];
// let second = plays[1];

// const reviews = [
//   { magazine: 'Slovenka', rating: 10 },
//   { magazine: 'Zivot', rating: 8 },
//   { magazine: 'Divadelní Luk', rating: 9 },
//   { magazine: 'Makarony', rating: 1 },
// ];


//-------------------------------------------Cvičení 2 Práce s indexy
// function first(array) {
//     if (array.length === 0) {
//       return undefined;
//     }
//     return array[0];
//   }
  
//   // Testování funkce s různými poli
//   console.log(first([3, 2, 1])); // ⟶ 3
//   console.log(first([])); // ⟶ undefined
//   console.log(first(['a', 'b', 'c'])); // ⟶ 'a'
//   console.log(first([true, false, true])); // ⟶ true
//   console.log(first([null, undefined, 0])); // ⟶ null


// function last(array) {
//     if (array.length === 0) {
//       return undefined;
//     }
//     return array[array.length - 1];
//   }
  
//   // Testování funkce s různými poli
//   console.log(last([3, 2, 1])); // ⟶ 1
//   console.log(last([])); // ⟶ undefined
//   console.log(last(['a', 'b', 'c'])); // ⟶ 'c'
//   console.log(last([true, false, true])); // ⟶ true
//   console.log(last([null, undefined, 0])); // ⟶ 0


// function middle(array) {
//     if (array.length === 0) {
//       return undefined;
//     }
//     const middleIndex = Math.floor((array.length - 1) / 2);
//     return array[middleIndex];
//   }
  
//   // Testování funkce s různými poli
//   console.log(middle([3, 2, 1])); // ⟶ 2
//   console.log(middle([3, 2, 1, 0])); // ⟶ 2
//   console.log(middle([])); // ⟶ undefined
//   console.log(middle(['a', 'b', 'c', 'd', 'e'])); // ⟶ 'c'
//   console.log(middle([true, false, true, false])); // ⟶ false
//   console.log(middle([null, undefined, 0])); // ⟶ undefined
  


// function middleMean(array) {
//     if (array.length === 0) {
//       return undefined;
//     }
//     const middleIndex = Math.floor(array.length / 2);
//     if (array.length % 2 === 0) {
//       const leftMiddle = array[middleIndex - 1];
//       const rightMiddle = array[middleIndex];
//       return (leftMiddle + rightMiddle) / 2;
//     } else {
//       return array[middleIndex];
//     }
//   }
  
//   // Testování funkce s různými poli
//   console.log(middleMean([3, 2, 1])); // ⟶ 2
//   console.log(middleMean([3, 2, 1, 0])); // ⟶ 1.5
//   console.log(middleMean([])); // ⟶ undefined
//   console.log(middleMean([1, 2, 3, 4, 5, 6])); // ⟶ 3.5
//   console.log(middleMean([10, 20, 30])); // ⟶ 20
//   console.log(middleMean([5, 10, 15, 20])); // ⟶ 12.5
  
  
// function insert(array, value) {
//     if (array.includes(value)) {
//       return false;
//     } else {
//       array.push(value);
//       return true;
//     }
//   }
  
//   // Testování funkce s různými poli
//   console.log(insert([3, 2, 1], 4)); // ⟶ true
//   console.log(insert([3, 2, 1], 3)); // ⟶ false
//   console.log(insert([], 5)); // ⟶ true
//   console.log(insert([1, 2, 3], 2)); // ⟶ false
//   console.log(insert([10, 20, 30], 40)); // ⟶ true
//   console.log(insert([7, 8, 9], 7)); // ⟶ false
  

//-------------------------------------------Cvičení 3 Počítání oveček

// const ovciJmena = [
//     'Bětuška',
//     'Cína',
//     'Dolly',
//     'Heidy',
//     'Líza',
//     'Belinda',
//     'Celia',
//     'Elvíra',
//     'Karla',
//     'Otýlie',
//     'Škraboška',
//     'Kopretinka',
//     'Berta',
//     'Růženka',
//     'Bobinka',
//     'Žofka',
//     'Dášenka',
//     'Vlnka',
//     'Květuše',
//     'Pampeliška',
//   ];
//   ovciJmena.forEach((jmeno, index) => {
//     document.body.textContent += `Ovečka ${jmeno} jako ${
//       index + 1
//     }. přeskočila přes plot. `;
//   });


//-------------------------------------------Cvičení 4 Jednohubky pro `map`
// const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
// const zvirata = [
//   'pes',
//   'kočka',
//   'králík',
//   'had',
//   'andulka',
//   'morče',
//   'krkavec',
// ];
// const napoje = [
//   { nazev: 'Pivo', cena: 12, skladem: true },
//   { nazev: 'Rum', cena: 120, skladem: false },
//   { nazev: 'Víno', cena: 85, skladem: true },
//   { nazev: 'Whisky', cena: 450, skladem: true },
//   { nazev: 'Vodka', cena: 280, skladem: false },
//   { nazev: 'Becherovka', cena: 210, skladem: true },
//   { nazev: 'Kofola', cena: 40, skladem: true },
//   { nazev: 'Voda', cena: 15, skladem: false },
// ];

// const kratDva = cisla.map((cislo) => cislo * 2);
// console.log(kratDva);

// const delky = zvirata.map((zvire) => zvire.length);
// console.log(delky);

// const nazvy = napoje.map((napoj) => napoj.nazev);
// console.log(nazvy);

// const skladem = napoje.map((napoj) => {
//   if (napoj.skladem) {
//     return napoj.nazev;
//   } else {
//     return 'Není skladem';
//   }
// });


//-------------------------------------------Cvičení 5 Nezaplacené objednávky
// const nezaplaceneObjednavky = [
// 	{
// 		id: 159753246,
// 		polozky: [
// 			{ nazev: 'knihy', mnozstvi: 5, cena: 200 },
// 			{ nazev: 'pero', mnozstvi: 1, cena: 50 },
// 			{ nazev: 'sešity', mnozstvi: 3, cena: 100 },
// 		],
// 		datum: '2023-04-07',
// 		uzivatel: {
// 			jmeno: 'Tomáš',
// 			email: 'tomas@volny.cz',
// 		},
// 	},
// 	{
// 		id: 456123789,
// 		polozky: [
// 			{ nazev: 'notebook', mnozstvi: 1, cena: 12000 },
// 			{ nazev: 'myš', mnozstvi: 1, cena: 400 },
// 			{ nazev: 'klávesnice', mnozstvi: 1, cena: 800 },
// 			{ nazev: 'sluchátka', mnozstvi: 1, cena: 1500 },
// 		],
// 		datum: '2023-04-08',
// 		uzivatel: {
// 			jmeno: 'Markéta',
// 			email: 'marketa@seznam.cz',
// 		},
// 	},
// 	{
// 		id: 987654321,
// 		polozky: [
// 			{ nazev: 'plavky', mnozstvi: 1, cena: 400 },
// 			{ nazev: 'papuče', mnozstvi: 1, cena: 100 },
// 			{ nazev: 'ručník', mnozstvi: 2, cena: 150 },
// 		],
// 		datum: '2023-04-09',
// 		uzivatel: {
// 			jmeno: 'Johanka',
// 			email: 'johanka@gmail.com',
// 		},
// 	},
// 	{
// 		id: 123456789,
// 		polozky: [
// 			{ nazev: 'tričko', mnozstvi: 2, cena: 250 },
// 			{ nazev: 'džíny', mnozstvi: 1, cena: 600 },
// 			{ nazev: 'boty', mnozstvi: 1, cena: 800 },
// 			{ nazev: 'pásek', mnozstvi: 1, cena: 100 },
// 		],
// 		datum: '2023-04-10',
// 		uzivatel: {
// 			jmeno: 'Jane',
// 			email: 'jane@outlook.com',
// 		},
// 	},
// 	{
// 		id: 852963741,
// 		polozky: [
// 			{ nazev: 'míč', mnozstvi: 1, cena: 300 },
// 			{ nazev: 'brankářské rukavice', mnozstvi: 1, cena: 800 },
// 			{ nazev: 'tréninkové dresy', mnozstvi: 10, cena: 500 },
// 			{ nazev: 'plíškový medvídek', mnozstvi: 1, cena: 150 },
// 		],
// 		datum: '2023-04-04',
// 		uzivatel: {
// 			jmeno: 'Ruda',
// 			email: 'ruda@email.cz',
// 		},
// 	},
// 	{
// 		id: 753951824,
// 		polozky: [
// 			{ nazev: 'matrace', mnozstvi: 1, cena: 5000 },
// 			{ nazev: 'polštář', mnozstvi: 2, cena: 300 },
// 			{ nazev: 'povlečení', mnozstvi: 1, cena: 800 },
// 		],
// 		datum: '2023-04-06',
// 		uzivatel: {
// 			jmeno: 'Novákovi',
// 			email: 'novakovi@seznam.cz',
// 		},
// 	},
// ]

// const processEmails = (emails) => {
// 	document.querySelector('#emaily').textContent = emails.join(', ')
// }

// const processIdentifiers = (identifiers) => {
// 	document.querySelector('#identifikatory').textContent = identifiers.join(', ')
// }

// const identifikatory = nezaplaceneObjednavky.map((objednavka) => {
// 	return objednavka.id
// })

// const emaily = nezaplaceneObjednavky.map((objednavka) => {
// 	return `${objednavka.uzivatel.jmeno} <${objednavka.uzivatel.email}>`
// })

// processEmails(emaily)
// processIdentifiers(identifikatory)