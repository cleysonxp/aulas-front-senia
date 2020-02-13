
// const $nome = document.querySelector("#nome");
// const $nome = document.querySelectorAll("#nome");

const $calcular = document.getElementById('calcular');
const $exibir = document.getElementById('exibir');
const $ocultar = document.getElementById('ocultar');
const $containerT = document.querySelector('.containerT');

const calcularMedia = (n1,n2) =>(parseInt(n1) + parseInt(n2))/2;

const verificarSituacao = (media) => media >= 5 ? "Aprovado" : "Reprovado";

const exibirMedia = () =>{
    const $nome = document.getElementById('nome');
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');

    const media = calcularMedia (nota1, nota2);

    $situacao.value = verificarSituacao(media);
    $media.value = media;
}

const calcularConceito = () =>{
    const media = document.getElementById('media').value;
    const $conceito = document.getElementById('conceito');
    if(media == 10){ 
        $conceito.value ="A";
    }
    else if(media > 7 && media <10){
        $conceito.value = "B";
    } 
    else if(media > 4 && media < 9){
        $conceito.value = "C";
    }
    else if(media > 2 && media < 6){
        $conceito.value = "D";
    }
    else if(media >= 0 && media < 4){
        $conceito.value = "E"; 
    }
    else{ 
    }
}

const exibirResult = () => {
    exibirMedia();
    calcularConceito();
}

const exibir = ( el ) => el.classList.add ('exibir');
const ocultar = ( el ) => el.classList.remove ('exibir');

$calcular.addEventListener('click', exibirResult);
$exibir.addEventListener('click',( )=> exibir ($containerT));
// $ocultar.addEventListener('click',( )=> ocultar ($containerT));
