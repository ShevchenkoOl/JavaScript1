
//------------------------ Cvičení 1 Základní validace ---------------------------------------------
// console.log(validator);
// const odstavec = document.querySelector(".msg");
// const email = "uzlabini@gmail.com"
// console.log(validator.isEmail(email))
// const email = prompt("Zadajte vasu emeilovu adresu");
// const card = prompt("Zadejte cislo karty");
// if (validator.isEmail(email)) {
//   odstavec.innerHTML += `<p class="msg--valid"> Zadani vami email: ${email} je spravmi</p>`;
// } else {
//   odstavec.innerHTML = `<p class="msg--invalid">Zadani vami email: ${email} je chybni, opakujte!</p>`;
// }
// if (validator.isCreditCard(card)) {
//   odstavec.innerHTML += `<p class="msg--valid">Zadani vami karta: ${card} je spravmi</p>`;
// } else {
//   odstavec.innerHTML += `<p class="msg--invalid">Zadani vami karta: ${card} je chybni, opakujte!</p>`;
// }

//------------------------ Cvičení 2 Mimozemský život ---------------------------------------------

// const day = "Monday";
// if (day.toLowerCase() === dayjs().format("dddd").toLowerCase()) {
//   document.body.innerHTML = '<p class="centered-text">YES</p>';
// } else {
//   document.body.innerHTML = '<p class="centered-text">NO</p>';
// }

//------------------------ Cvičení 3 Obsah elipsy ---------------------------------------------------
// const ellipseArea = (width, heigth) =>{
//   const result =  (width*0.5)*(heigth*0.5)*Math.PI;
//      return result;
// }
// document.body.innerHTML = `<p>Obsah elipsy je: ${ellipseArea(1,2)}</p>`;

// console.log((()=> {
//     // ваш код анонимной функции здесь
//     return "Результат выполнения функции";
// })());

// ------------------------ Cvičení 4 Maximum ze dvou čísel---------------------------------------
// const max2 = (a, b) => {
//   return Math.max(a, b);
// }
// document.body.innerHTML = max2(5,15);

// ------------------------ možnost 2----------------------------------------------------
// const max3 = (a, b) => {
//   if (a > b) {return a;}
//   return b;
// }
// document.body.innerHTML = max3(25,45);

//------------------------ Cvičení 5 Kontrola DIČ -------------------------------------------

// const isDIC = (inputStr) => {
//   if (inputStr.length === 11 || inputStr.length === 12) {
//     const prefix = "CZ";
//     if (inputStr.toUpperCase().includes(prefix)) {
//       const digit = inputStr.slice(2);
//       if (validator.isInt(digit)){
//       document.body.innerHTML = `<p>Vase DIC ${inputStr} je spravne</p>`
//     } else {
//       return document.body.innerHTML = `<p>Vase DIC ${inputStr} neni spravne</p>`;
//     }
//   } else {
//     return document.body.innerHTML = `<p>Vase DIC ${inputStr} neni spravne</p>`;
//   }
// } else {
//   return document.body.innerHTML = `<p>Vase DIC ${inputStr} neni spravne</p>`;
// }
// };

// isDIC("0012345678CZ");

// ----------------------------------- Doporučené úložky na doma 1 Parsování data
// ------------------------ možnost 1----------------------------------------------------
// const parseDate = (datum) => {
//     return {
//       day: Number(datum.slice(0, 2)),
//       month: Number(datum.slice(3, 5)),
//       year: Number(datum.slice(6)),
//     };
//   };

// ------------------------ možnost 2----------------------------------------------------

// const persDate = (str) => {
//   const parcel = str.split(".");
//   document.body.innerHTML += `<p>day: ${parcel[0]}, mounth: ${parcel[1]}, year: ${parcel[2]}</p>`;
// };
// persDate("13.11.2015");

// ----------------------------------------- Doporučené úložky na doma 2 Formátování data ----------------------------
// const obj = { day: 12, month: 3, year: 17 };
// const formateDate = (obj) => {
// const day = obj.day.toString().padStart(2, '0');
// const month = obj.month.toString().padStart(2, '0');
// const year = obj.year.toString().padStart(4, '20');
// return document.body.innerHTML = `<p>${day}.${month}.${year}</p>`;
// }
// formateDate(obj);

// ----------------------------------------- Doporučené úložky na doma 3 Python zaokrouhlování ---------------------------
//   const round = (cislo) => {
//   const celaCast = Math.trunc(cislo);
//   const necelaCast = cislo - celaCast;
//   if (necelaCast < 0.5) {
//     return (document.body.innerHTML = `<p>${celaCast}</p>`);
//   } else if (necelaCast === 0.5) {
//     if (celaCast % 2 === 0) {
//       return (document.body.innerHTML = `<p>${celaCast}</p>`);
//     } else {
//       return (document.body.innerHTML = `<p>${celaCast + 1}</p>`);
//     }
//   }
//   return (document.body.innerHTML = `<p>${celaCast + 1}</p>`);
// };

// round(3.4);

// ----------------------------------------- Doporučené úložky na doma 4 Dovednosti

// const skillHtml = Number(
//   prompt(`Zadejte svou úroveň v dovednosti HTML (0-100):`)
// );
// const skillCss = Number(
//   prompt(`Zadejte svou úroveň v dovednosti CSS (0-100):`)
// );
// const skillJs = Number(
//   prompt(`Zadejte svou úroveň v dovednosti JavaScript (0-100):`)
// );

// if (skillHtml >= 0 && skillHtml <= 100) {
//   updateSkill("skill1", skillHtml);
// } else {
//   alert(
//     "Neplatná hodnota pro dovednost HTML. Zadejte prosím číslo v rozsahu 0-100."
//   );
// }

// if (skillCss >= 0 && skillCss <= 100) {
//   updateSkill("skill2", skillCss);
// } else {
//   alert(
//     "Neplatná hodnota pro dovednost CSS. Zadejte prosím číslo v rozsahu 0-100."
//   );
// }

// if (skillJs >= 0 && skillJs <= 100) {
//   updateSkill("skill3", skillJs);
// } else {
//   alert(
//     "Neplatná hodnota pro dovednost JavaScript. Zadejte prosím číslo v rozsahu 0-100."
//   );
// }
// function updateSkill(skillId, value) {
//   const progressBar = document.querySelector(`#${skillId} .skill__progress`);
//   const skillValue = document.querySelector(`#${skillId} .skill__value`);

//   progressBar.style.width = `${value}%`;
//   skillValue.textContent = `${value} / 100`;
// }



//---------------------------- Dobrovolné úložky na doma Maximum ze tří čísel
// function max3 (a, b, c) {
//     if (a > b && a > c) {
//       return document.body.innerHTML = `<p>${a}</p>`
//     } else if (a < b && b > c) {
//       return document.body.innerHTML = `<p>${b}</p>`
//     } else {return document.body.innerHTML = `<p>${c}</p>`
//     }
//   }
//   max3(1,25,12);