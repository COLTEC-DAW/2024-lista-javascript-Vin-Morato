function ehImpar(num) {
    return num % 2 != 0;
}

function ehPrimo(num) {
    let x=0;
    for (let index = 1; index < num; index++) {
        if (num % index == 0) {
            x++;
        }
        
    }
    if (x > 2) {
        return false;
    } else{
        return true;
    }
}
//---------------------------------------
function verificaNumero(num, funcao) {
    return funcao(num);
}
//---------------------------------------

function main() {
    var num1 = 13;

    if (verificaNumero(num1, ehImpar)) {
        console.log("é impar");
    } else{
        console.log("não é impar");
    }
}

main();