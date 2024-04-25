const articles = [
    {
      id: 'prase_pekac',
      title: 'Ztracené prase na dobrodružství v supermarketu',
      lead: 'Prase jménem Pekáč udělalo včerejší noc zmatky v supermarketu, když se rozhodlo prozkoumat regál s vepřovými výrobky.',
      content: 'Naštěstí se nepokusilo otevřít konzervy s masem, ale místo toho si vybralo balení klobás a rozuteklo se po prodejně. Zaměstnanci byli nuceni zavolat do práce zvířecího dobrodruha a nakonec se jim podařilo prase bezpečně chytit a vrátit ho zpět do svého domova na farmě.'
    },
    {
      id: 'kocour_felix',
      title: 'Kocour Felix vyhrál mistrovství ve schovávané',
      lead: 'Místní kocour Felix se stal novým mistrem letošného ročníku tradiční soutěže ve schovávané mezi kočkami.',
      content: 'Felixova majitelka prohlásila, že kocour vyniká ve své schopnosti se skrývat až do té míry, že ho někdy nemůže najít ani sama. Nyní zvažuje, zda by ho neměla přihlásit do celostátní televizní soutěže. Na otázku, jak Felix přišel na tak dobrý úkryt, pouze odfrkl a zmizel za gauč.',
    },
    {
      id: 'veverka_viki',
      title: 'Místní veverka založila vlastní "ořechovou banku"',    
      lead: 'Veverka jménem Viki se rozhodla investovat své oříšky do nového podnikání a založila na kraji místního lesa úspěšnou ořechovou banku.',
      content: 'Viki začala sbírat ořechy a ukrývat je ve stromových dutinách, které přetvořila na svou vlastní "ořechovou banku". Místní zvířata rychle začala chodit s žádostí o úvěry, a tak si Viki rychle vytvořila pověst váženého finančního institutu. Jen doufáme, že se banka nezhroutí, když se některé zvířecí dlužníky rozhodnou splácet ve formě lískového krému.',
    },
  ];
  
  const articleId = window.location.hash.slice(1);
  const articleData = articles.find((article) => article.id === articleId);
  const mainElement = document.querySelector('main');
  
  mainElement.innerHTML += `
    <article>
      <h2>${articleData.title}</h2>
      <p>${articleData.lead}</p>
      <p>${articleData.content}</p>
    </article>
  `;