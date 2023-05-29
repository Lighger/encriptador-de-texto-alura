const boton = document.getElementById("copiarBtn");
let cuadroTexto = document.getElementById("areaTexto");
let encriptar = document.querySelector(".encriptar");
let desencriptar = document.querySelector(".desencriptar");
let muñeco = document.getElementById("imgn");


function encriptarTexto() {
    let cambio = cuadroTexto.value;

    cambio = cambio.replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    displays();
    aviso();
    let cuadroTexto2 = document.getElementById("areaTexto2");
    cuadroTexto2.value = cambio;

    console.log("encriptado");
}

function desencriptarTexto() {
    let cambio = cuadroTexto.value;

    cambio = cambio.replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    displays();
    aviso();
    let cuadroTexto2 = document.getElementById("areaTexto2");
    cuadroTexto2.value = cambio;

    console.log("desencriptado");
}

function displays() {
   
    if (cuadroTexto.value == ""){
        let seccion = document.querySelector(".munieco").style.display = "none";
    let seccion3 = document.querySelector(".munieco2").style.display = "block";
    let seccion2 = document.querySelector(".seccion2").style.display = "none";
    let seccion4 = document.querySelector(".munieco3").style.display = "none";
    } else {
        let seccion = document.querySelector(".munieco").style.display = "none";
        let seccion3 = document.querySelector(".munieco2").style.display = "none";
        let seccion2 = document.querySelector(".seccion2").style.display = "block";
        let seccion4 = document.querySelector(".munieco3").style.display = "none";
    }
   
}

function aviso(){
    let validacion = cuadroTexto.value.match(/^[a-z+\s]*$/);
    if (!validacion || validacion === 0) {
        let seccion4 = document.querySelector(".munieco3").style.display = "block";
        let seccion = document.querySelector(".munieco").style.display = "none";
        let seccion3 = document.querySelector(".munieco2").style.display = "none";
        let seccion2 = document.querySelector(".seccion2").style.display = "none";
        // alert("solo minusculas y sin acentos");
        // location.reload();
    }
    return true;

} 

function copiado() {
    let copia = document.getElementById("areaTexto2").value;
    navigator.clipboard.writeText(copia);
    console.log("copiado");
    alert("texto copiado");

};

boton.addEventListener("click", copiado);
encriptar.addEventListener("click", encriptarTexto);
desencriptar.addEventListener("click", desencriptarTexto);
