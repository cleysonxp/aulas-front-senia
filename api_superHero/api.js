"use strict";

const $heroi = document.getElementById('input-pesquisa');
// const $img2 = $img.innerHTML = e.results[0].image.url;


const heroInfo = async (heroi) => {
    const url = `https://www.superheroapi.com/api.php/2702658359969943/search/${heroi}`;
    // const url = 'https://www.superheroapi.com/api.php/2702658359969943/search/batman';
    const results = await fetch( url );
    const json = await results.json();
    console.log(json);
    preencher(json);
}



const preencher = async ( e ) =>{
    document.getElementById('heroi-nome').innerHTML = e.results[0].name;

    // document.getElementById('imagemDoHeroe').innerHTML = <results[0].image.url;
    


    document.getElementById('intelligence').innerHTML = e.results[0].powerstats.intelligence;
    document.getElementById('strength').innerHTML = e.results[0].powerstats.strength;
    document.getElementById('speed').innerHTML = e.results[0].powerstats.speed;
    document.getElementById('durability').innerHTML = e.results[0].powerstats.durability;
    document.getElementById('power').innerHTML = e.results[0].powerstats.power;
    document.getElementById('combat').innerHTML = e.results[0].powerstats.combat;
    

    document.getElementById('alignment').innerHTML = e.results[0].biography.alignment;
    // document.getElementById('alter-egos').innerHTML = e.results[0].biography.alter-egos;
    // document.getElementById('first-appearance').innerHTML = e.results[0].biography.alignment;
    // document.getElementById('full-name').innerHTML = e.results[0].biography.alignment;
    // document.getElementById('place-of-birth').innerHTML = e.results[0].biography.alignment;
    // document.getElementById('publisher').innerHTML = e.results[0].biography.publisher;

    
}

$heroi.addEventListener('keyup', () => heroInfo($heroi.value));
// const $lupa = document.getElementById('lupa');


// $lupa.addEventListener('click', heroInfo($heroi, h) );