function criarMatriz(linhas, colunas) {
    return function (funcValor){
        let matriz = [];
        for (let i = 0; i < linhas; i++) {
            let linha = [];
            for (let j = 0; j < colunas; j++) {
                linha.push(funcValor(i, j));
            }
            matriz.push(linha);
        }
        return matriz;
    }
}





function main() {
    var nLinhas = 5, nColunas = 5;
    var 

}


main();