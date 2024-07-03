function caixaAltaVogais(char) {
    const vogais = 'aeiouAEIOU';
    if (vogais.includes(char)) {
        return char.toUpperCase();
    }
    return char;
}

function caixaAltaConsoantes(char) {
    const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    if (consoantes.includes(char)) {
        return char.toUpperCase();
    }
    return char;
}

function caixaBaixaVogais(char) {
    const vogais = 'aeiouAEIOU';
    if (vogais.includes(char)) {
        return char.toLowerCase();
    }
    return char;
}

function caixaBaixaConsoantes(char) {
    const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
    if (consoantes.includes(char)) {
        return char.toLowerCase();
    }
    return char;
}


//-----------------------------------

function percorreVet(funcao) {
    return function (array){
        let aux = [];
        for (let index = 0; index < array.length; index++) {
            aux += funcao(array[index])
            
        }
        return aux;
    }
    }
//-----------------------------------
function main() {
    var funcao = percorreVet(caixaAltaVogais);
    var vet = "O rato roeu a roupa do rei de roma";
    console.log("Frase convertida: " + funcao(vet));
}

main();
