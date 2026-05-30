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
   
}