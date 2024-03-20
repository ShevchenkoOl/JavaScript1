// -------------------------------------- Vlastnost target -----------------------------------
// ----------------------------- Cvičení 1 Základy formulářů: Newsletter ----------------------
// const form = document.querySelector('form');
// const input = document.querySelector('input');

// const prihlas = (event) => {
//     event.preventDefault();
//     form.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${input.value}`
// }
// form.addEventListener('submit', prihlas);

// ----------------------------- Cvičení 2 Základy formulářů: Kalkulačka ----------------------
const handleDigitClick = (event) => {
    const display = document.querySelector('.display');
    let digit = event.target.textContent;
    if (display.textContent === '0' && digit.length <= 9) {
        display.textContent = digit;
     } else if (display.textContent.length<9) {
         display.textContent += digit;
     }
};

  // Získáme všechny prvky s třídou "btn-num"
  const buttons = document.querySelectorAll('.btn-num');

  // Projdeme každý prvek a navážeme na něj udalost kliknutí
  buttons.forEach(button => {
    button.addEventListener('click', handleDigitClick);
  });

  //--------------------------------------------verze 2
// const display = document.querySelector('.display');
// const btn0 = document.querySelector('#btn-0');
// const btn1 = document.querySelector('#btn-1');
// const btn2 = document.querySelector('#btn-2');
// const btn3 = document.querySelector('#btn-3');
// const btn4 = document.querySelector('#btn-4');
// const btn5 = document.querySelector('#btn-5');
// const btn6 = document.querySelector('#btn-6');
// const btn7 = document.querySelector('#btn-7');
// const btn8 = document.querySelector('#btn-8');
// const btn9 = document.querySelector('#btn-9');

// const handleDigitClick = (event) => {
//     let digit = event.target.textContent;
// let currentDisplay = display.textContent;
//     if (display.textContent === '0' && digit.length<=9) {
//        display.textContent = digit;
//     } else if (currentDisplay.length<9) {
//         display.textContent += digit;
//     }
// };

// btn0.addEventListener('click', handleDigitClick);
// btn1.addEventListener('click', handleDigitClick);
// btn2.addEventListener('click', handleDigitClick);
// btn3.addEventListener('click', handleDigitClick);
// btn4.addEventListener('click', handleDigitClick);
// btn5.addEventListener('click', handleDigitClick);
// btn6.addEventListener('click', handleDigitClick);
// btn7.addEventListener('click', handleDigitClick);
// btn8.addEventListener('click', handleDigitClick);
// btn9.addEventListener('click', handleDigitClick);

//------------------------------Cvičení: Složitější formuláře Objednávka --------------------------------------------------------------
// const formular = document.querySelector('form');
// formular.addEventListener('submit', (event) => {
//   event.preventDefault();
//   formular.innerHTML = `
//       <h1>Hotovo</h1>
//       <p>Objednávka odeslána ke zpracování.</p>
//    `;
// });