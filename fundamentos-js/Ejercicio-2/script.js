

let numeros = [];
for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}

console.table(numeros);

let Numerosfiltrados = numeros.filter(numero => numero >= 20 && numero <= 50);

// Mostrar los números filtrados
console.log("Números entre 20 y 50:");
console.table(Numerosfiltrados);
