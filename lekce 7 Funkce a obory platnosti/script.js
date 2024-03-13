//-------------------------------------------Cvičení 1 E-mail pozdravy
// const goodbye = (name) =>{
//     const close = document.querySelector('.email__closing');
//     //return close.textContent= "Na shledanou, S pozdravem, " + name;
//     return close.textContent= `Na shledanou, S pozdravem, ${name}`;
// }
// goodbye("Pavel Ovesný")

//------------------------------------------Cvičení 2 E-mail tělo
// const fillSubject = (subject) => {
// const subjectElement = document.querySelector(".email__subject");
// subjectElement.textContent = subject;
// }
// fillSubject('Hello it is mistake');

// const fillBody = (body, name) => {
//     const bodyElm = document.querySelector('.email__body');
//     bodyElm.innerHTML += body;
//     const closingElm = document.querySelector('.email__closing');
//     closingElm.textContent = goodbye(name);
//   };
  
//   fillSubject('Nepřišly gumičky');
//   fillBody(
//     'Nepřišly gumičky. A co na to počítač? Mlčí. No tak to je konec. Všecko vylejt.',
//     'referent Kubrt'
//   );

//--------------------------------------- Cvičení 3 Převod měny
// const convertToCZK = (amount, currency) => {
//     let rate;
  
//     if (currency === 'EUR') {
//       rate = 24.47;
//     } else if (currency === 'GBP') {
//       rate = 28.09;
//     } else if (currency === 'USD') {
//       rate = 24.81;
//     } else if (currency === 'BTC') {
//       rate = 478637;
//     } else {
//       return null;
//     }
  
//     return Math.round(rate * amount);
//   };
  
//   document.body.innerHTML += `100 € je ${convertToCZK(100, 'EUR')} Kč<br>`;
//   document.body.innerHTML += `£ 100 je ${convertToCZK(100, 'GBP')} Kč<br>`;
//   document.body.innerHTML += `$ 100 je ${convertToCZK(100, 'USD')} Kč<br>`;
//   document.body.innerHTML += `100 bitcoinů je ${convertToCZK(100, 'BTC')} Kč<br>`;
 
//-------------------------------------------Cvičení 4 Porozumění kódu
// //Úryvek 1:
// const name = 'Mississippi';

// if (name.length > 5) {
//   const name = 'Missi';
//   document.body.innerHTML += `<p>${name}</p>`;
// }

// document.body.innerHTML += `<p>${name}</p>`;
// // Missi
// // Mississippi

// //Úryvek 2:
// const name = 'Franta';

// const greet = (name) => {
//   const name = 'Pepa';
//   document.body.innerHTML += `<p>${name}</p>`;
// };
// greet('Jožin');
// //Error

// //Úryvek 3:
// const age = 25;

// if (age > 21) {
//   const price = 100;
// } else if (age > 15) {
//   const price = 50;
// } else {
//   const price = 0;
// }

// document.body.innerHTML += `<p>${price}</p>`;
// //price is not defined






//-----------------------------second option

//  const value = prompt('zadajte menu').toUpperCase();
//  const money = prompt('zadaite castku');
//  const result = document.querySelector('.exchange');

//  const convertToCZK = (value, money) => {
// if (value === 'EUR'){
//             const total = Math.round(money * 24.47);
//     return  result.innerHTML = total+'CZK';
// }
//     else if (value === 'GBR'){
//             const total = Math.round(money * 28.09);
//     return  result.innerHTML = total+'CZK';
//     }
//     else if (value === 'USD'){
//         const total = Math.round(money * 24.81);
//     return  result.innerHTML = total+'CZK';
//     }
//     else if (value === 'BTC'){
//         const total = Math.round(money * 478637);
//     return  result.innerHTML = total+'CZK';}

//     else {
//          alert('this currency does not exist');

// }
// }

//  convertToCZK(value, money);

// const age = Number(prompt('Zadej svůj věk:'));
// const message = 'Utíkej za mamkou';

// if (age < 18) {
//   document.body.innerHTML += `<p>${message}</p>`;
// } else {
//   const message = 'Vítej mezi dospěláky';
//   document.body.innerHTML += `<p>${message}</p>`;
// }



//-------------------------calculate

// const calculate = (number1, operation, number2) => {
//     if (operation === '+') {
//         const total = number1 + number2;
//         document.body.innerHTML = `${number1} ${operation} ${number2} = ${total}<br>`;
//     } else if (operation === '-') {
//         const total = number1 - number2;
//         document.body.innerHTML = `${number1} ${operation} ${number2} = ${total}<br>`;
//     } else if (operation === '*') {
//         const total = number1 * number2;
//         document.body.innerHTML = `${number1} ${operation} ${number2} = ${total}<br>`;
//     } else if (operation === '/') {
//         const total = number1 / number2;
//         document.body.innerHTML = `${number1} ${operation} ${number2} = ${total}<br>`;
//     } else {
//         return document.body.innerHTML = 'null';
//     }
// };

// calculate(3,'&',3);




//----------------------Výplňořez

// const fillcut = (str, len) => {
// let newStr;
// if (str.length > len) {
//     newStr = str.slice(0, len);
// } else if (str.length < len) {
//     newStr = str.padStart(len,'.');
// } else {
//     newStr = str
// }
// document.body.innerHTML = newStr;
// };

// fillcut('petr', 2)



//---------------------------přestupný rok

// const isLeapYear = (year) => {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
//         return true;
//     } else {
//         return false;
//     }

// };
// console.log(isLeapYear(2023));