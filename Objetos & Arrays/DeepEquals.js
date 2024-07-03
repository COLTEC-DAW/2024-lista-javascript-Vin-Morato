function deepEquals(obj1, obj2)
{
    return obj1 == obj2;
}


function main ()
{
    var objeto1, objeto2 =1;

    if (deepEquals(objeto1, objeto2))
        console.log("Igual");
    else
        console.log("Diferente");
    
}

main();