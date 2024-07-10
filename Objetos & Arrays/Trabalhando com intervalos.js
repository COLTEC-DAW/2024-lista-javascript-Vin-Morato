function range(min, max, i)
{
    let x = i, vet=[];
    for (let index = min; index <= max; index++) {
        if (x >= i) {
            vet.push(index);
            x = 0
        }
        x++;
    }
    return vet;
}


function main ()
{
    var min = parseInt(prompt("Insira o valor mínimo: "));
    var max = parseInt(prompt("Insira o valor maximo: "));
    var intervalo = parseInt(prompt("Insira o intervalo: "));

    let array = range(min,max,intervalo);
    for (let index = 0; index < array.length; index++) {
        
        console.log(array[index] + "\n");        
    }
}

main ();