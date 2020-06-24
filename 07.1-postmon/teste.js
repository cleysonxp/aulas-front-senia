"use stritc";
const verificaCep = () => document.getElementById('cep').reportValidity();
const nome = () => document.getElementById('nome').reportValidity();

const encontrarCep = async (cep) => {

    if(verificaCep()){
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;

    const getAddress = await fetch (url);
    const address = await getAddress.json();
    preencherFormulario(address);
    }
}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.cidade;
    document.getElementById('estado').value = endereco.estado;
}

const maskCep = ($el) => {
    let aux = $el.value;
    aux = aux.replace ( /[^0-9]/g, '' );
    aux = aux.replace ( /(.{5})(.)/, '$1-$2' );
    $el.value = aux;
}

// "blur" - quando sair da caixinha de texto
document.getElementById('cep').addEventListener('blur', (evento) => encontrarCep(cep.value));

document.getElementById('cep').addEventListener('keyup', (evento) => maskCep(evento.target));

document.getElementById('nome').addEventListener('keyup', (evento) => maskCep(evento.target));