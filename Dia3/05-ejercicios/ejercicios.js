let numero = 0
numeros= []
while(numeros.length<50){
    if(numero%2==0){
        numeros.push(numero);
    }
    numero ++;
}
console.log(numeros)
