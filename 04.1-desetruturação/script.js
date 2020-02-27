"use strict";

// desestruturação de array
const aluno1 = ['Ana Clara','5','8','7','DS2M'];

const [nomeA,n1,n2,n3] = aluno1;

console.log(n2);

// desestruturação de objetos
const aluno = {
    nome:"Ana Clara",
    nota1:"5",
    nota2:"8",
    nota3:"10",
    turma:"DS2M"
}

const {nome, nota1,nota2, nota3, turma} = aluno;

console.log(turma, nota3);


const [cliente, ...valores] = aluno1;
console.log(valores);

const maior = Math.max(...valores);
console.log(maior);

const soma = ( ...num ) => num.reduce (( acc, num ) => acc + num );

console.log(soma(100,33,23,233))