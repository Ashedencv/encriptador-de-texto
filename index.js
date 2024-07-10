function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    const muneco = document.getElementById("muneco");
    let botonCopiar = document.getElementById("botonCopiar");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    if (document.getElementById("texto").value.length != 0) {
        document.getElementById("texto").value = "";
        document.getElementById("titulo-mensaje").textContent = textoCifrado;
        document.getElementById("parrafo").textContent = "";
        muneco.style.display = "none";
        botonCopiar.style.display = "block";
    } else{
        alert ("Debes ingresas algun texto");
    }
}

function desencriptar (){
    let texto = document.getElementById("texto").value;

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("texto").value = "";
        document.getElementById("titulo-mensaje").textContent = textoCifrado;
        document.getElementById("parrafo").textContent = "";
    }else{
        alert ("Debes ingresas algun texto");
    }
}

botonCopiar.addEventListener ("click"), () => {
    let texto = textoCifrado;
    texto.select();
    document.execCommand('copy')
}