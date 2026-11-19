/*Ejemplo 1=>Ejemplo con switch*/
let myFruit = "watermelon";

switch (myFruit) {
    case "orange":
    case "lemon":
        console.log("Citric");
        break;

    case "banana":
        console.log("Tropical");
        break;

    case "watermelon":
        console.log("Big fruit");
        break;
}

/*eJEMPLO 2=>Switch sin un break(Nos muestra que es importante poner break en cada case ya que si no se seguirá ejecutando una y otra vez)*/
/*

let myFruit = "watermelon";

switch (myFruit) {
    case "orange":
    case "lemon":
        console.log("Citric");
        break;

    case "banana":
        console.log("Tropical");
        break;

    case "watermelon":
        console.log("Big fruit");
        break;
}
*/

/*Ejemplo 3=>Ejemplo de condicional ternario*/
let fruit = "lemon";
let availableFruits = new Set(["lemon", "banana", "watermelon"]);
let isAvailable = (availableFruits.has(fruit)) ? "available" : "not available";
console.log(isAvailable);

/*Ejemplo 4=>Ejemplo de operardor relacional in*/
let myFavouriteFruit = "watermelon";
let myAvailableFruits = {lemon: "Citric", watermelon:"Big", banana:"Tropical"};
console.log(myFavouriteFruit in myAvailableFruits);

/*Ejemplo 5=>Ejemplo de operardor relacional in con array*/
let yFavouriteFruit = "orange";
let yAvailableFruits = ["lemon", "orange", "banana"];
console.log(0 in yAvailableFruits)

