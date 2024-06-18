function verificaPalindromo() {
    var entrada = prompt ("Insira uma frase para saber se é palíndromo")
    entrada = entrada.toLowerCase();

    for (let i = 0; i < entrada.length; i++) {
        if (entrada[i] != entrada[(entrada.length-i)-1]) {
            console.log ("Não é um palndromo");
            return 0;
        }        
    }
    console.log ("É um palndromo");
}

verificaPalindromo ();