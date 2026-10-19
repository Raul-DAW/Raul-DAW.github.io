//Crea un programa que verifique si un número ingresado por el usuario es par o impar.
let num1 = Number(prompt("Escribe un número para verificar si es par o impar"));

function espar() {
    if (num1 % 2 === 0) {
        console.log("El número es par");
    }
}

function esimpar() {
    if (num1 % 2 !== 0) {
        console.log("El número es impar");
    }
}

espar();
esimpar();
