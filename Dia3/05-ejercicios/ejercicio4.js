let usuarios = []
let total = +prompt("Ingrese el numero de usuarios")
for(let i=0; i<total; i++){
    usuarios.push(prompt("Ingrese el nombre"))
}
console.log(usuarios)