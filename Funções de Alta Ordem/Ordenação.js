function bubbleSort(array, compare) {
    let n = array.length;
    let swap;
    do {
        swap = false;
        for (let i = 0; i < n - 1; i++) {
            if (compare(array[i], array[i + 1]) > 0) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap
                swap = true;
            }
        }
        n--;
    } while (swap);
    return array;
}




//-------------------------------------------
function crescente(a, b) 
{
    return a - b;
}

function decrescente(a, b) 
{
    return b - a;
}

function crescenteImpares(a, b) 
{
    if (a % 2 !== 0 && b % 2 !== 0) {
        return a - b;
    }
    if (a % 2 !== 0) {
        return -1;
    }
    if (b % 2 !== 0) {
        return 1;
    }
    return 0;
}

function decrescentePares(a, b) 
{
    if (a % 2 === 0 && b % 2 === 0) {
        return b - a;
    }
    if (a % 2 === 0) {
        return -1;
    }
    if (b % 2 === 0) {
        return 1;
    }
    return 0;
}

//-------------------------------------------

function main() {
    var array = [6,2,1,8,5,4,3,7,10,9];

    console.log("Crescente:", bubbleSort(array, crescente));
    console.log("Decrescente:", bubbleSort(array, decrescente));
    console.log("Crescente Ímpares:", bubbleSort(array, crescenteImpares));
    console.log("Decrescente Pares:", bubbleSort(array, decrescentePares));
}


main();