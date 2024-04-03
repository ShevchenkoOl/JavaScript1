//---------------Vícestránkové aplikace Zpravicky -------------------
// console.log("Pro vsehny stranky");
// const articles = [
//     {
//       id: 'prase_pekac',
//       title: 'Ztracené prase na dobrodružství v supermarketu',
//       lead: 'Prase jménem Pekáč udělalo včerejší noc zmatky v supermarketu, když se rozhodlo prozkoumat regál s vepřovými výrobky.',
//       content: 'Naštěstí se nepokusilo otevřít konzervy s masem, ale místo toho si vybralo balení klobás a rozuteklo se po prodejně. Zaměstnanci byli nuceni zavolat do práce zvířecího dobrodruha a nakonec se jim podařilo prase bezpečně chytit a vrátit ho zpět do svého domova na farmě.'
//     },
//     {
//       id: 'kocour_felix',
//       title: 'Kocour Felix vyhrál mistrovství ve schovávané',
//       lead: 'Místní kocour Felix se stal novým mistrem letošného ročníku tradiční soutěže ve schovávané mezi kočkami.',
//       content: 'Felixova majitelka prohlásila, že kocour vyniká ve své schopnosti se skrývat až do té míry, že ho někdy nemůže najít ani sama. Nyní zvažuje, zda by ho neměla přihlásit do celostátní televizní soutěže. Na otázku, jak Felix přišel na tak dobrý úkryt, pouze odfrkl a zmizel za gauč.',
//     },
//     {
//       id: 'veverka_viki',
//       title: 'Místní veverka založila vlastní "ořechovou banku"',    
//       lead: 'Veverka jménem Viki se rozhodla investovat své oříšky do nového podnikání a založila na kraji místního lesa úspěšnou ořechovou banku.',
//       content: 'Viki začala sbírat ořechy a ukrývat je ve stromových dutinách, které přetvořila na svou vlastní "ořechovou banku". Místní zvířata rychle začala chodit s žádostí o úvěry, a tak si Viki rychle vytvořila pověst váženého finančního institutu. Jen doufáme, že se banka nezhroutí, když se některé zvířecí dlužníky rozhodnou splácet ve formě lískového krému.',
//     },
//   ];
  
//   const mainElement = document.querySelector('main');
  
//   articles.forEach((article) => {
//     mainElement.innerHTML += `
//       <div class="article-card">
//         <h2>${article.title}</h2>
//         <p>${article.lead}</p>
//         <a href="article.html#${article.id}">Přečíst celý článek</a>
//       </div>
//     `;
//   });
//---------------------------------------------------------Cvičení 1 Počasí------------------
import { predpoved } from './data.js';
const days = ['pondeli', 'utery', 'streda', 'ctvrtek', 'patek'];

const weatherCards = document.getElementById('week');
const weatherCardElements = days.map(day => { 
//const weatherCardElements = days.map(day => {...}) Tím se pomocí metody map() vytvoří nové pole weatherCardElements. Iteruje každý prvek pole dnů a pro každý den vytvoří nový prvek DOM.
    const data = predpoved[day]; // načítá údaje o počasí pro aktuální den z objektu predpoved s použitím hodnoty prvku aktuálního dne jako klíče.
    const card = document.createElement('div');
    card.classList.add('weather-card');
    card.innerHTML = `
        <h2>${data.den}</h2>
        <p>Denní teplota: ${data.denni_teplota}°C</p>
        <p>Stav počasí: ${data.stav_pocasi}</p>
        <a href="detail.html#${day}">Zobrazit detail</a>
    `;
    return card; //Vrátí vytvořený prvek div (kartu počasí) pro každý den.
});

//Tento kód vezme každý prvek DOM z pole weatherCardElements a přidá ho do prvku DOM s ID weatherCards.
weatherCardElements.forEach(card => {
    weatherCards.appendChild(card);
});

console.log(predpoved);

//-----------------------------Cvičení 2 Recitály-------------------------------
// --- 1
// const average = (a, b) => {
//   return (a + b) / 2;
// };

// /*Vytvářím funkci, která očekává na vstupu dva parametry, které sipojmenovávám a a b. Funkci si ukládám do proměnné pojmenované average.
// V těle funkce je jediný příkaz, který vypočítá součet parametrů a a b, součet vydělí dvěma a výslednou hodnotu vrátí pomocí return jako návratovou hodnotu funkce.
// Funkce average počítá průměrnou hodnotu dvou zadaných čísel.*/

// //---- 2
// const titleElement = document.querySelector('.title');
// titleElement.textContent = 'Nadpis';
// /*Pomocí metody querySelector() vyhledám první element v dokumentu, který odpovídá zadanému CSS selektoru .title. Selektor odpovídá všem prvkům s třídou title. Nalezený prvek se uloží do proměnné titleElement.
// Do textového obsahu (textContent) nalezeného prvku se vloží text „Nadpis“ – původní obsah se přepíše.
// Kód nastaví text „Nadpis“ do prvního elekemntu se třídou title v dokumentu. (Pokud by v dokumentu takový element nebyl, kód spadne s chybou.)*/

// //--- 3
// let time = 0;
// setTimeout(() => {
//   time += 1;
//   console.log('time', time);
// }, 1000);
// /*Vytvořím proměnnou time, do které se uloží číslo 0. Obsah proměnné bude možné později v kódu změnit.
// Zavolám funkci setTimeout(), která zavolá mou funkci (callback) za jednu sekundu.
// Předaná callback funkce je anonymní.
// Předaná callback funkce má v těle dva příkazy.
// První příkaz funkce zvýší hodnotu proměnné time o 1.
// Druhý příkaz vypíše dvě hodnoty do konzole v DevTools prohlížeče. První hodnota je text „time“, druhá hodnota je aktuální hodnota proměnné time (tj. 1).
// Kód jednu sekundu po načtení stránky vypíše do konzole time 1.*/

// // --- 4
// buttonOk.addEventListener('click', () => {
//   document.body.innerHTML = '<p>Everything OK</p>';
// });
// /*Kód předpokládá existenci proměnné buttonOk, která obsahuje DOM element (pravděpodobně potvrzovací tlačítko).
// Na proměnné buttonOk se volá metoda addEventListener se dvěma parametry. Metoda addEventListener nastaví posluchače událostí na DOM elementu buttonOk.
// První parametr metody addEventListener je název události, které chceme poslouchat. Zde se nastavuje událost click, tedy kliknutí tlačítkem myši.
// Druhý parametr je funkce (callback), která se zavolá v okamžiku, kdy došlo k dané události – v tomto případě kdy uživatel klikl na tlačítko buttonOk.
// V tomto případě se předává anonymní funkce (callback).
// V těle funkce je jediný příkaz. Z proměnné document (ve které je DOM element reprezentující celý dokument zobrazený v prohlížeči) se přečte vlastnost (property) body, která obsahuje DOM element odpovídající elementu <body> v HTML, tedy viditelnou část webové stránky.
// Do vlastnosti (property) innerHTML property body se zapíše (přepíše) text „Everything OK“. Vlastnost innerHTML reprezentuje HTML kód příslušného DOM elementu (v tomto případě viditelného obsahu celé stránky).
// Text „Everything OK“ představuje HTML kód – odstavec textu (element <p>) s vloženým textem „Everything OK“.
// Při kliknutí na tlačítko buttonOk se přepíše obsah celé webové stránky, nahradí se jedním odstavcem, ve kterém bude text „Everything OK“.*/

// // --- 5
// document.addEventListener('keyup', (event) => {
//   if (event.code === 'KeyP') {
//     console.log('paused');
//   }
// });
// /*Na proměnné document (reprezentující celý dokument zobrazený v prohlížeči) se zavolá metoda addEventListener, která nastavuje posluchač události. Metoda dostane dva parametry.
// První parametr je text „keyup“, posluchač události tedy bude navěšen na události, když uživatel pustil dříve stisknutou klávesu.
// Druhý parametr je funkce (callback), která se zavolá, když k uvedené události dojde.
// Předávaná funkce je anonymní funkce, která očekává jeden parametr. Pojmenovává si ho event.
// Tělo funkce tvoří jeden příkaz – podmínka (if), která testuje, zda vlastnost (property) code události (parametr event) je rovna řetězci „KeyP“. Testuje se, zda událost nese informaci, že uživatel pustil klávesu s písmenem „P“.
// Pokud je podmínka splněna, zavolá se metoda log na objektu console s parametrem – textem „paused“.
// Pokaždé, když uživatel kdekoli v dokumentu stiskne a pak pustí klávesu „P“, vypíše se do konzole v DevTools text „paused“.*/