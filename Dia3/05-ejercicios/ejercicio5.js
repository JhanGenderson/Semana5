let numero1 = +prompt("Ingrese el numero")

function SaberSiEsPrimo(numero1){
    let total=0;
    for (let i=0;i<=numero1; i++){
        if(numero1%i==0){
            total++;
        }
    }
    if(total>2){
        return false;
    }
    else{
        return true;
    }
}
console.log(SaberSiEsPrimo(numero1))