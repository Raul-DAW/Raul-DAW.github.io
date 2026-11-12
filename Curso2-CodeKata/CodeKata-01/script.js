/*Arrays*/
console.log("Array Ejecución");
let namedCollection = ["Armando", "David", "Alejandra", "Raúl"]; /*Crear Array*/

console.log(namedCollection);
console.log(namedCollection[0]);

/*Sets*/
console.log("Set Ejecución");
let enumu = new Set();
console.log(enumu);

let enume = new Set([1, 7, true, "Hola"]);
console.log(enume);
console.log(enume.has(true)); /*Para sacar valores concretos*/
console.log(enume.has(7));
console.log(enume.has(9)); /*nO EXISTE Y POR ELLO PONE FALSE*/
enume.add("Magia");
console.log(enume);

/*Map*/
console.log("Map Ejecución");
let mapeo= new Map();
console.log(mapeo);
let mapea= new Map([["1","Arrmando"], [2, "Flabebe"]]);
console.log(mapea);

mapeo.set("1","oPENwEBINARS"); /*Actualizo valor*/
console.log(mapeo);
console.log(mapea.get(2));/*Obtener valor concreto*/

/*Map*/
console.log("Objeto Ejecución");
let objeto= {
    name: "Armando",
    surname: "Torres"
};
console.log(objeto);
console.log(objeto.name);/*Conseguir algo concreto*/
console.log(objeto.namefefrfw);/*Pongo algo que no existe*/

/*DATE*/
console.log("DATE Ejecución");
let seconcurrentDate = new Date();
console.log(seconcurrentDate);

