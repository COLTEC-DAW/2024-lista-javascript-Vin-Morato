function reverseArray(array)
{
    let arrayInvetido = [];
    for (let index = 0; index < array.length; index++) {
        arrayInvetido.push(array[(array.length -index)-1]);
        
    }
    return arrayInvetido;
}

function main ()
{
    let vet = [1,2,3,4,5,6,7,8,9,10], inverseVet;
    inverseVet = reverseArray (vet)


        console.log (inverseVet);

}


main();