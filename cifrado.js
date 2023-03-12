// Función para Encriptar el texto
const encriptar = () => {
    var texto1 = document.getElementById("texto1").value;
    var clave = "AldoGuapo"; // clave secreta
    var textoEncriptado = CryptoJS.AES.encrypt(texto1, clave).toString();
    document.getElementById("resultado1").innerHTML = textoEncriptado;
}

// Función para desencriptar el texto
const desencriptar = () => {
    var texto2 = document.getElementById("texto2").value;
    var clave = "AldoGuapo"; // clave secreta
    var textoDesencriptado = CryptoJS.AES.decrypt(texto2, clave).toString(CryptoJS.enc.Utf8);
    document.getElementById("resultado2").innerHTML = textoDesencriptado;
}
