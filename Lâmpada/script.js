'use strict';

const $lampada = document.getElementById('lampada');
const $inter = document.getElementById('interruptor');


const trocarImagem = (elemeto , imagem ) =>{
    elemeto.src = imagem;
};

const lampadaLigada = () => trocarImagem($lampada,"./img/ligada.jpg");
const lampadaDesligada = () => trocarImagem($lampada,"./img/desligada.jpg");
const estadoLampda = () => !Boolean($lampada.src.match('desligada'));

const ligaDesliga = () => {
    if(estadoLampda()){
        lampadaDesligada();
    }
    else{
        lampadaLigada();
    }
}

let id;
 const piscar = () =>{
     if (id === undefined){
         id = setInterval(lampadaLigada,500);
     }
 }

const parar = () => id = clearInterval(id);
    
     

$lampada.addEventListener('mouseenter', lampadaLigada);
$lampada.addEventListener('mouseout', lampadaDesligada);
$lampada.addEventListener('click', piscar);
document.getElementById('interruptor').addEventListener('click', parar)

