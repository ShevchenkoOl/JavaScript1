// const odmena = (pocetLet) => {
//     if(pocetLet < 5) {
//         return 1000
//     } else if(pocetLet < 10) {
//         return 3000
//     } else if(pocetLet < 15) {
//         return 5000
//     } else {
//         return 10000
//     }
// }

// const uzivHodinovka = 300

// const plat = (hodinovka, pocetHodin, pocetLet) => {
//     return hodinovka * pocetHodin + odmena(pocetLet)
// }

// const plat2 = (hodinovka, pocetHodin, pocetLet, fceOdmena) => {
//     console.log(fceOdmena)
//     return hodinovka * pocetHodin + fceOdmena(pocetLet)
// }

// console.log(plat(uzivHodinovka, 160, 3))
// console.log(plat2(uzivHodinovka, 160, 3, odmena))
// console.log(odmena)
//-------------------------------------------------------- Cvičení 1 Hesla
//---------------------------------template
// const weakPassword = (len) => {
//     let result = '';
//     for (let i = 0; i < len; i++) {
//       result += String(i % 10);
//     }
  
//     return result;
//   };
  
//   const mediumPassword = (len) => {
//     let result = '';
//     for (let i = 0; i < len; i++) {
//       const digit = Math.floor(Math.random() * 10);
//       result += String(digit);
//     }
  
//     return result;
//   };
  
//   const strongPassword = (len) => {
//     const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
//     let result = '';
//     for (let i = 0; i < len; i++) {
//       const charIndex = Math.floor(Math.random() * chars.length);
//       result += chars[charIndex];
//     }
  
//     return result;
//   };
// //------------------------changes

//   const createAccount = (user, generatePassword) => {
//   return `Uživatel ${user} s heslem: ${generatePassword(9)}`;
//   }

//   document.body.innerHTML += `
// 	<p>${createAccount('Míša', weakPassword)}</p>
// 	<p>${createAccount('Řízek', mediumPassword)}</p>
// 	<p>${createAccount('Mápodčepicí', strongPassword)}</p>
// `;

//-------------------------------------------------------- Cvičení 2 E-mail podruhé
// const goodbye = (name) => {
//     return 'S pozdravem ' + name;
//   };

//   const formalGoodbye = (name) => {
//     return "S uctivou poklonou " + name;
//   }

//   const rudeGoodbye = (name) => {
//     return "Se mej " + name;
//   }

//   const fillSubject = (subject) => {
//     document.querySelector('.email__subject').textContent = subject;
//   };
  
//   const fillBody = (body, name, goodbyeFunction) => {
//     const bodyElm = document.querySelector('.email__body');
//     bodyElm.innerHTML += body;
//     const closingElm = document.querySelector('.email__closing');
//     closingElm.textContent = goodbyeFunction(name);
//   };

// //---------volani funkce
// //   fillSubject('Obchodní sdělení');
// //   fillBody(
// //     'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
// //     'Jan Čistý',
// //     formalGoodbye
// //   );

// fillSubject('Pozvánka na oslavu narozenin');
// fillBody('Zítra oslava. 18:00 ve Starý hospodě.', 'Patrik Veselý', rudeGoodbye);

//-------------------------------------------------------- Cvičení 3 Objednávka
// const btn = document.querySelector("#button-order");
//  let isOredered = false;

// const handleClick = () => {
//     btn.textContent = 'Objednáno';
//     // btn.textContent = !isOredered ? 'Objednáno' : 'Objednat';
//     // isOredered = !isOredered; //přepínač hodnotu isOrdered na opačnou
//   };
  
//   btn.addEventListener('click', handleClick);

// -------------------------------------------------------- Cvičení 4 Kontrola dostupnosti
// const btn2 = document.querySelector("#button-order2");

// setTimeout(()=>
// btn2.textContent = 'Objednat', 8000);

// btn2.addEventListener('click', () => btn2.textContent = 'Objednáno');

// -------------------------------------------------------- Cvičení 5 Žárovka
// const lamp = document.querySelector(".bulb");
// const changeLamp = () => lamp.classList.toggle("bulb--on");
// document.addEventListener('keydown', changeLamp);

//-------------------------------------------------Doporučené úložky na doma 1 Catering
// const justFood = (people) => {
//     return `Catering od Just Food pro ${people} lidí za ${people*30} Kč`;
// }

// const yourMama = (people) => {
//     return `Catering od Your Mama pro ${people} lidí za ${people*40} Kč`;
// }

// const flavourHaven = (people) => {
//     return `Catering od Flavour Haven pro ${people} lidí za ${people*50} Kč`;
//     }
//     console.log(flavourHaven(50));

// const createEvent = (eventName, numberPeople, catering) => {

// return document.body.innerHTML = `Událost ${eventName} s catering od ${catering(numberPeople)}`;
// }

// createEvent('Inaugurace prezidenta',100,flavourHaven);

//-------------------------------------------------Doporučené úložky na doma 2 Kostka
// const img = document.querySelector(".dice");
// let side = 1;

// const handleChange = () =>{
//     side +=1;
//     if (side === 7) {
//       side = 1;
//     }
//     img.src = `img/side${side}.svg`;
//   };
// document.addEventListener('keydown', handleChange)

//-------------------------------------------------Doporučené úložky na doma 3 Minutka