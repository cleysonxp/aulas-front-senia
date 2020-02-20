"use strict";

const notas = [2,8,5,0,8];

const clientes = [
    {
        nome: "Cleyson",
        idade: 19,
        cidade: "Carapicuiba"
    },
    {
        nome: "Ana",
        idade: 4,
        cidade: "Osasco"
    },
    {
        nome: "Pedro",
        idade: 15,
        cidade: "Itapevi"
    },
    {
        nome: "Maria",
        idade: 31,
        cidade: "Jandira"
    }
]
// notas.push (confirm ("Digite uma nota"));
// notas.push (prompt ("Digite uma nota"));

/*
 MAP - Retorna um novo array do mesmo tamanho modificado ou não;
 argumentos do callback:
    1º elemento
    2º índice
    3º array
*/

const notasAtualizadas = notas.map( (elemento) => elemento * 10 );

/*
 FILTER - Retorna um novo array filtrando pela condição;
 argumentos do callback:
    1º elemento
    2º índice
    3º array
*/

const notasAcimaDaMedia = notas.filter( notas => notas >= 5 );

/*
 REDUCE - Retorna um unico valor;
 argumentos do callback:
    1º acumulador
    2º elemento
    3º índice
    4º array
*/

const notasTotal = notas.reduce ((acc, nota) => acc +nota)/ notas.length - 1;

const notasPares100 = notas.filter(nota => nota % 2 == 0)
                           .map (nota => nota + 100);

const exibirDados = ( el,cliente ) =>{
    el.innerHTML += `
        <div class="card text-white bg-primary mb-3" style='width: 12vw'; >
            <div class="card-header">
                ${cliente.nome}
            </div>
            <div>
                <p>${cliente.idade}</p>
                <p>${cliente.cidade}</p>
            </div>
        </div>
    `;
}

const $resultados = document.getElementById('resultados');

clientes.forEach ( cliente => exibirDados ($resultados, cliente));



















