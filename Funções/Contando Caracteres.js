function ContaLetras (frase, letra)
{
    frase = frase.toLowerCase();
    letra = letra.toLowerCase();
    let nLetras = 0;
    for (let index = 0; index < frase.length; index++) {
        if (letra == frase[index]) {
            nLetras++;
        }
        
    }
    return nLetras;
}

function main ()
{
    var frase = prompt("Frase: ");
    var letra = prompt("Letra para contar: ");    
    console.log("Número de letras encontradas = " + ContaLetras(frase, letra));
}

main();