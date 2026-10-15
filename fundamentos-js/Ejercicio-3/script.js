
// Declarar el objeto persona
let persona = {
    nombre: "Raúl",                  
    edad: 19,                           
    Roll: "Estudiante",                 
    tieneTrabajo: false,                
    fechaNacimiento: new Date("2001-05-15"), 
    altura: null,                       
    sexo: "Hombre",

    Hobbies: ["Leer", "Música", "Serie"], 
};

// Mostrar los datos de Raúl
console.log(persona);
console.table(persona);
console.table(persona.aficiones);
console.table(persona.direccion);