"use stritc";

const $cep = document.getElementById('cep');

const verificarCep = () =>  $cep.reportValidity();

const encontrarCep = async ( cep ) =>{

    if(verificarCep () ) {
        const url = `https://api.postmon.com.br/v1/cep/${cep}`; 
        const getAddress = await fetch ( url );
        const address = await getAddress.json();
        preencerFormulario ( address )
    }
}

const preencerFormulario = ( endereco ) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.cidade;
    document.getElementById('estado').value = endereco.estado;
}

const maskCep = ( $el ) => {
    let aux = $el.value;
    aux = aux.replace (/[^0-9]/g, '');
    aux = aux.replace (/(.{5})(.)/,'$1-$2')
    $el.value = aux;
}

$cep.addEventListener('blur', ( e ) => encontrarCep(e.target.value));
$cep.addEventListener('keyup', ( e ) => maskCep (e.target));