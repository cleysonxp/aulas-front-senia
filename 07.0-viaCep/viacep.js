"use stritc";

const encontrarCep = ( cep ) =>{
    const url = `https://viacep.com.br/ws/${cep}/json`;
    fetch ( url ).then ( res => res.json())
             .then ( data => preencerFormulario ( data ))
}

const preencerFormulario = ( endereco ) =>{
    if (endereco != undefined){
        document.getElementById('endereco').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;    
    }
    else{
        alert('teste')
    }
    
}

const $cep = document.getElementById('cep');
$cep.addEventListener('blur', () => encontrarCep($cep.value));