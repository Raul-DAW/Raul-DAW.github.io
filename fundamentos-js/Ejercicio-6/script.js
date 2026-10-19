
function espar(num1) {
    if (num1 % 2 === 0) {
        document.getElementById("resultado").textContent = "El número es par";
    }
}

function esimpar(num1) {
    if (num1 % 2 !== 0) {
        document.getElementById("resultado").textContent = "El número es impar";
    }
}

function verificar() {
    let valor = document.getElementById("numero").value;

    if (valor === "" || !Number.isInteger(Number(valor))) {
        document.getElementById("resultado").textContent = "Introduce un número entero válido";
        return;
    }

    let num1 = Number(valor);

    espar(num1);
    esimpar(num1);
}
