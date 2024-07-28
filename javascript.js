document.addEventListener("DOMContentLoaded", () => {
    const botonEncriptar = document.querySelector(".btn_encriptar");
    const botonDesencriptar = document.querySelector(".btn_desencriptar");
    const munieco = document.querySelector(".contenedor_muñeco");
    const contenedorTexto1 = document.querySelector(".contenedor_texto1");
    const resultado = document.querySelector(".texto-resultado");
    const btnCopiar = document.querySelector(".btn-copiar");

    botonEncriptar.addEventListener("click", encriptar);
    botonDesencriptar.addEventListener("click", desencriptar);
    btnCopiar.addEventListener("click", copiar);

    function encriptar() {
        const texto = recuperarTexto();
        if (texto.trim() === "") {
            alert("Por favor, ingrese un texto para encriptar.");
            return;
        }
        ocultarAdelante();
        resultado.textContent = encriptarTexto(texto);
    }

    function desencriptar() {
        const texto = recuperarTexto();
        if (texto.trim() === "") {
            alert("Por favor, ingrese un texto para desencriptar.");
            return;
        }
        ocultarAdelante();
        resultado.textContent = desencriptarTexto(texto);
    }

    function recuperarTexto() {
        const cajatexto = document.querySelector(".cajatexto");
        return cajatexto.value;
    }

    function ocultarAdelante() {
        munieco.classList.add("ocultar");
        contenedorTexto1.classList.add("ocultar");
    }

    function encriptarTexto(mensaje) {
        return mensaje
            .replace(/a/g, "ai")
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptarTexto(mensaje) {
        return mensaje
            .replace(/ai/g, "a")
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function copiar() {
        const contenido = resultado.textContent;
        navigator.clipboard.writeText(contenido).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => {
            alert("Error al copiar texto");
            console.error("Error al copiar texto:", err);
        });
    }
});
