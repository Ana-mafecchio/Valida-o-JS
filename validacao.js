function fnValidacao (){
    const campoTituloFilme = document.getElementById("tituloFilme")
    
    if(campoTituloFilme.value.trim() == ""){
        return console.log('Preencha o campo Titulo Filme')
    }
    if(campoTituloFilme.value.length >= 200){
        return console.log('Maximo de 200 caracter')
    }
    console.log(campoTituloFilme.value)

    const campoTituloOriginal = document.getElementById("tituloOriginal")

    if(campoTituloOriginal.value.length >=200){
        return console.log('Maximo de 200 caracter')
    }

    const campoAnoProducao = document.getElementById("anoProducao")
   
    const regexAno = /^\d{4}$/;

    //
    if(!regexAno.test(campoAnoProducao)) {
       return console.log('Coloque um ano com 4 digitos')
    }

    const anoNum = parseInt(campoAnoProducao, 10);
    const anoAtual = new Date().getFullYear();

    if (anoNum < 1888 || anoNum > anoAtual) {
        return console.log('O ano deve estar entre 1888 e ' + anoAtual);
        return false;
    }
     console.log('Ano válido!');
    return true;
}