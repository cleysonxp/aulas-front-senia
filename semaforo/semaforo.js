'use strict';

const $imagem = document.getElementById('img')
const $vermelho = document.getElementById('vermelho');
const $amarelo = document.getElementById('amarelo');
const $verde = document.getElementById('verde');


const troca = (elemento, imagem) =>{
    elemento.src = imagem;
};

const ligarVerde = () => troca($verde,"./img/verde.png");

$imagem.addEventListener('click', ligarVerde);