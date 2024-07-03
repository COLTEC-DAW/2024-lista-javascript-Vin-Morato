function cifraCesar(ncifra) {
    return function(array){
        let aux = [], char;
        array = array.toLowerCase();

        for (let index = 0; index < array.length; index++) {
            if ((array.charCodeAt(index) + ncifra) < 97) {
                aux.push(String.fromCharCode(array.charCodeAt(index) + ncifra + 26));
            } else
            {
                aux.push(String.fromCharCode(array.charCodeAt(index) + ncifra));
            }
            
                        
        }
        return aux;        
    }
}

//---------------------------------------
function usaFuncao(array, funcao) {
    cifraCesar();
}
//---------------------------------------
function main() {
    var cifra = -3
    var frase = "DEFGHIJKLMNOPQRSTUVWXYZABC";

    var funcaoDaCifra = cifraCesar(cifra);
    console.log("Cifra decifrada: " + funcaoDaCifra (frase));

}

main();