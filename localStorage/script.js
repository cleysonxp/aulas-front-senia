"use strict";

const $caixaNomes = document.getElementById( 'nome' );

const verificacaoNome = () => {
    return localStorage.hasOwnProperty( 'nomes' );
}

const criandoJason = ( elemento ) => {
    return JSON.parse( localStorage.getItem( elemento ) );
}

const jsonString = ( json ) => {
    return JSON.stringify( json );
}

const adicionar = () => {
    let arrayNomes = new Array();
    var nome = prompt( "Digite um nome" );
    if( verificacaoNome() ){
        arrayNomes = criandoJason( 'nomes' );
    }
    arrayNomes.push( { 'nome' : nome } );
    localStorage.setItem( 'nomes', jsonString( arrayNomes ) );

    console.log(nome);

    $caixaNomes.innerHTML += nome;
}

const remover = () => {
    if( !verificacaoNome() ){
        alert('Esse nome não consta na lista');
    }
    else{
        var nome = prompt( "Insira o nome que será removido:" );
        var nomes = criandoJason( 'nomes' );
        var nomesAtualizados = nomes.filter( n => n.nome != nome );
        localStorage.setItem( 'nomes', jsonString( nomesAtualizados ) );
    }
}

const limpar = () => {
    localStorage.clear();
}