let bebidas = ["Inka Cola","Sprite","Frugos","Margarita"]
console.log(bebidas);

let nuevaBebida = prompt("Ingrese una nueva Bebida")
// Push agrega un elemento al final de un arreglo
bebidas.push(nuevaBebida)

console.log(bebidas)

let frutas = ["naranja","piña","fresas"]

frutas.pop()

let animales = ["gatos","perros","vacas","pinguinos","zorros"];

animales.forEach(function(elemento,index){
    console.log(`${index} - ${elemento}`)
});

let alumnos = ["Veronica","Jhan","Erick","Juan Carlos","Violeta"];

let alumnosSaludos =alumnos.map(function(nombre, index){
    return `${index} - 
    Hola soy ${nombre}`
});

console.log(alumnosSaludos)

// console.log(alumnosSaludos)

let conductores = [
    {
        nombre:"Lezly",
        tieneMascarilla:false
    },
    {
        nombre:"Daniel",
        tieneMascarilla:true
    },
    {
        nombre:"Jorge",
        tieneMascarilla:false
    },
    {
        nombre:"Linder",
        tieneMascarilla: true
    }
];

let puedePasar = conductores.filter(function(elemento, index){
    // if(elemento.tieneMascarilla ===true){
    //     return elemento
    // }
    return elemento.tieneMascarilla === true
})

console.log(puedePasar);

// FIND
let dnis = ["21421412","32132142","21342148","01234567"];

let encontrado = dnis.find(function(elemento, index){
    // if(elemento === "01234567")
    // return elemento

    return elemento === "01234567"
})
console.log(encontrado)