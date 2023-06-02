
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


    







//MATERIAL DE LA ENCRIPTACION


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


//FUNCION ENCRIPTAR LAS PALABRAS

function btnEncriptar(){
    const textoEncriptado= encriptar(textArea.value)
    mensaje.value=textoEncriptado 
    textArea.value= "";
    mensaje.style.backgroundImage="none"

}

function encriptar(stringEncriptada){
    let matrizCodigo = [ [ "e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0 ; i < matrizCodigo.length; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}







// FUNCION DESENCRIPTAR LAS PALABRAS

function btnDesencriptar(){
    const textoDesencriptado= desencriptar(textArea.value)
    mensaje.value=textoDesencriptado 
    textArea.value= "";
    

}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [ [ "e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0 ; i < matrizCodigo.length; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}



function desencriptare(stringDesencriptadas){
    let matrizCodigo = [ [ "enter" , "e"], ["imes" , "i"], ["ai" , "a"], ["ober" , "o"], ["ufat" , "u"]];
    stringDesencriptadas = stringDesencriptadas.toLowerCase();

    for(let i=0 ; i < matrizCodigo.length; i++){
        if (stringDesencriptadas.includes(matrizCodigo[i][0])){
            stringDesencriptadas=stringDesencriptadas.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringDesencriptadas
}



//FUNCION COPIAR LAS PALABRAS


function copiare(){
    var textos=document.getElementById("mensaje-final");
    
    

    console.log(textos)
    textos.select();
    /*document.execCommand("copy");
    console.log("el texto se copio")*/



    navigator.clipboard.writeText(textos.value)  
}



//> <

