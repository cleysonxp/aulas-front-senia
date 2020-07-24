"use strict";

import { validator } from "./masks.js";

const $novo = document.getElementById('novo');
const $fechar  = document.getElementById('fechar');
const $salvar  = document.getElementById('salvar');

const exibirModal = () => document.querySelector('.conteiner-modaL').classList.add ('exibirModal');
const fecharModal = () => document.querySelector('.conteiner-modaL').classList.remove ('exibirModal');
const salvarAluno = () => {
    fecharModal();
}


document.getElementById('form').addEventListener('input', validator);

$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click',fecharModal);
$salvar.addEventListener('click', salvarAluno);