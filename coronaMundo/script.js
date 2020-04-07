"use strict";

let DB = [
    {
        "pais": "Mundo",
        "casos": "<div class='spinner gold'></div>",
        "mortes": "<div class='spinner red'></div>"
    }
];

const showData = (data) => {
    const panel = `
        <div class="estado">
            ${data.pais}
        </div>
        <div class="card confirmados">
            <div class="numeros"> ${data.casos} </div>
            <div class="titulos"> CONFIRMADOS </div>
        </div>
         
        <div class="card mortes">
            <div class="numeros"> ${data.mortes} </div>
            <div class="titulos"> MORTES </div>
        </div>
    `;

    const $container = document.createElement("div");
    $container.innerHTML = panel;

    const $info = document.getElementById("info");
    $info.removeChild($info.firstChild);
    $info.appendChild($container);
}

const getCoronaMundo = async () => {
    const url = 'https://corona.lmao.ninja/all';
    const getApi = await fetch ( url );
    const json =  await getApi.json();
    const mundo = await{
        "pais": "Mundo",
        "casos": json.cases,
        "mortes": json.deaths
    }
    showData ( mundo ) ;
}

const CoronaPais = async () => {
    const url = "https://corona.lmao.ninja/countries?sort=country";
    const getApi = await fetch(url);
    const json = await getApi.json();
    DB = json;
}

const procurarPais = (evento) => {
    let maps = evento.target.id;
    const pais = DB.find(country => country.countryInfo.iso2 == maps? country:"");
    const country = {
        "pais": pais.country,
        "casos": pais.cases,
        "mortes": pais.deaths
    };

    showData(country);
}

document.querySelector("svg").addEventListener("click", procurarPais);

showData(DB[0]);

getCoronaMundo();
CoronaPais();