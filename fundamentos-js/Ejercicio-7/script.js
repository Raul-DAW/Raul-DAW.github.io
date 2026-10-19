//Escribe una función que reciba una palabra y cuente cuántas vocales tiene. Usa un bucle for y la función
//includes() para verificar si un carácter es una vocal.

let Palabra = String(prompt("Escribe una palabra:"));

function LeerPalabra() {
    for (let i = 0; i < Palabra.length; i++) {
        console.log(Palabra[i]);
    }
}
LeerPalabra();
