// -------------------------------------- Vlastnost target -----------------------------------
// ----------------------------- Cvičení 1 Základy formulářů: Kalkulačka ----------------------
const form = document.querySelector('form');
const input = document.querySelector('input');

const prihlas = (event) => {
    event.preventDefault();
    form.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${input.value}`
}
form.addEventListener('submit', prihlas);

// ----------------------------- Cvičení 2 Základy formulářů: Newsletter ----------------------