import { predpoved } from "./data.js";

const detailId = window.location.hash.slice(1);
const detailData = predpoved[detailId];
const weatherDetail = document.querySelector("#weather-detail");

weatherDetail.innerHTML = `
        <h2>${detailData.den}</h2>
        <p>Datum: ${detailData.datum}</p>
        <p>Ranní teplota: ${detailData.ranni_teplota}°C</p>
        <p>Odpolední teplota: ${detailData.odpoledni_teplota}°C</p>
        <p>Večerní teplota: ${detailData.vecerni_teplota}°C</p>
        <p>Stav počasí: ${detailData.stav_pocasi}</p>
        <p>Tlak: ${detailData.tlak} hPa</p>
        <p>${detailData.popis_pocasi}</p>
    `;