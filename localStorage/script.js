'use strict';

const $caixaNome = document.getElementById('nomes');

const adicionar = () => {
    let nomes = new Array();

    var nome = prompt("Digite um nome que será adicionado: ");
    // hasOwnProperty verifica se nomes existe
    if( localStorage.hasOwnProperty( 'nomes' ))
    {
        nomes = JSON.parse(localStorage.getItem( 'nomes' ));
    }

    nomes.push ( { 'nome' : nome} );

    localStorage.setItem( 'nomes', JSON.stringify( nomes ) );

    $caixaNome.innerHTML += nome+'<br/>';
}