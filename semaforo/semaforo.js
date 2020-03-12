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
const ligarAmarelo = () => troca($sema,"./img/amarelo.png");

let id;
const automatico = () =>{
    ligarVerde();
    setInterval(ligarAmarelo, 2000);
    setInterval(ligarVermelho,4000);
}

const parar = () => id = clearInterval(id);


$verde.addEventListener('click', ligarVerde);
$vermelho.addEventListener('click', ligarVermelho);
$amarelo.addEventListener('click', ligarAmarelo);
$automatico.addEventListener('click',automatico);