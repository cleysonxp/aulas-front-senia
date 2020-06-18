"use strict";

// console.log("oi");

const $heroi = document.getElementById('input-pesquisa');

let DB = [
    {
        "intelligence": "",
        "strength": "",
        "speed": "",
        "durability": "",
        "power": "",
        "combat": "",

        "url": "",
        "name": "",

        "alignment": "",
        "alter-egos":"",
        "first-appearance":"",
        "full-name": "",
        "place-of-birth": "",
        "publisher":"",

        "eye-color": "",
        "gender": "",
        "hair-color": "",
        "race": "Human"
    }
];

const showData = ( data ) =>{
    const nomeHero = `
        <h1 class="heroi_nome">${data.name}</h1>
    `

    const $containerName = document.createElement('div')
    $containerName.innerHTML = nomeHero;

    const $nameHero = document.getElementById('heroi_nome')

    $nameHero.appendChild($containerName);
    $nameHero.removeChild($nameHero.firstChild);
    $nameHero.appendChild($containerName);

    const imgHero = `
    <img class="imagem" src="${data.url}" alt="" srcset="">
    `
    const $containerImg = document.createElement('div')
    $containerImg.innerHTML =  imgHero;

    const $imgHeroi = document.getElementById('imagemDoHeroe')

    $imgHeroi.appendChild( $containerImg );
    $imgHeroi.removeChild ($imgHeroi.firstChild)
    $imgHeroi.appendChild ($containerImg)    

    const infoHeroi = `
            <div class="powerStats">
                <h1 class="titulo_powerStats">PowerStats<h1>
                <div class="texto">Intelligence: ${data.intelligence} </div> 
            
                <div class="texto">Strength: ${data.strength} </div> 
            
                <div class="texto">Speed: ${data.speed} </div> 
            
                <div class="texto">Durability: ${data.durability} </div> 
            
                <div class="texto">Power: ${data.power}</div>             
            
                <div class="texto">Combat: ${data.combat}</div>                                 
            </div>
             
    `;

    const $container = document.createElement('div');
    $container.innerHTML = infoHeroi;

    
    const $info = document.getElementById('powerStats');

    $info.appendChild ( $container );
    $info.removeChild ($info.firstChild);
    $info.appendChild ( $container );

    const biography = `
        <div class="biography">
            <h1 class="titulo_biography">biography</h1>
            <div class="biography_item">Alignment: ${data.alignment}</div>
            <div class="biography_item">Alter Egos: ${data["alter-egos"]} </div>
            <div class="biography_item">First Appearance: ${data["first-appearance"]} </div>
            <div class="biography_item">Full Name: ${data["full-name"]}</div>
            <div class="biography_item">Place Of Birth: ${data["fplace-of-birth"]}</div>
            <div class="biography_item">Publisher: ${data.publisher}</div>
        </div>
        
    `;

    const $biografia = document.createElement('div');
    $biografia.innerHTML = biography;

    const $container_biografia = document.getElementById('biography');

    $container_biografia.appendChild ($biografia)
    $container_biografia.removeChild ($container_biografia.firstChild)
    $container_biografia.appendChild ($biografia)


    
    

};

const batman = async ( heroi ) => {
    const url = `https://www.superheroapi.com/api.php/2702658359969943/search/${heroi}`;
    // const url = 'https://www.superheroapi.com/api.php/2702658359969943/search/batman';
    const getApi = await fetch( url );
    const json = await getApi.json();
    console.log(json.results);
    const hero = await {
                    "name": json.results[0].name,
                    "url": json.results[0].image.url,
                    "intelligence": json.results[0].powerstats.intelligence,
                    "strength": json.results[0].powerstats.strength,
                    "speed": json.results[0].powerstats.speed,
                    "durability": json.results[0].powerstats.durability,
                    "power": json.results[0].powerstats.power,
                    "combat": json.results[0].powerstats.combat,
                    "alignment": json.results[0].biography.alignment,
                    "alter-egos":json.results[0].biography["alter-egos"],
                    "first-appearance": json.results[0].biography["first-appearance"],
                    "full-name": json.results[0].biography["full-name"],
                    "place-of-birth": json.results[0].biography["place-of-birth"],
                    "publisher": json.results[0].biography.publisher,      
                    
    }
    
    showData ( hero )
    // showData2 ( batman )
}

showData( DB[0] );    
batman ();


$heroi.addEventListener('keyup', () => batman($heroi.value));