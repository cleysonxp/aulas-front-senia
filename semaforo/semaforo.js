'use strict';


const $sema = document.getElementById('img')
const $vermelho = document.getElementById('vermelho');
const $amarelo = document.getElementById('amarelo');
const $verde = document.getElementById('verde');
const $automatico = document.getElementById('automatico');


const troca = (elemento, imag) =>{
    elemento.src = imag;
};

const ligarVerde = () => troca($sema,"./img/verde.png");
const ligarVermelho = () => troca($sema,"./img/vermelho.png");
const ligarAmare = () => troca($sema,"./img/amarelo.png");

let id;

const automatico = () =>{
    if(id == undefined){
        setInterval(ligarVermelho,500);
        
        // setInterval(ligarAmare,500);
        // setInterval(ligarVerde,500);
    }
}

const parar = () => id = clearInterval(id);


$automatico.addEventListener('click', automatico);
$verde.addEventListener('click', ligarVerde);
$vermelho.addEventListener('click', ligarVermelho);
$amarelo.addEventListener('click', ligarAmare);
// document.getElementById('automatico').addEventListener('click',parar)