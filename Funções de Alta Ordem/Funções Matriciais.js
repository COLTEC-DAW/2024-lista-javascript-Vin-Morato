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

function f1(x,y)
{return x + y;}

function f2(x,y)
{return x * y}

function f3(x,y) 
{return x == y ? 1 : 0}

function f4(x,y)
{return Math.pow(x, 2)/(y+1)}

function f5(x,y)
{return x > y ? 1 : (x < y ? 5 : 0)}


function main() {
    var nLinhas = 5, nColunas = 5;
    
    var matriz = criarMatriz(nLinhas, nColunas)(f1);
    console.table(matriz);

    matriz = criarMatriz(nLinhas, nColunas)(f2);
    console.table(matriz);

    matriz = criarMatriz(nLinhas, nColunas)(f3);
    console.table(matriz);

    matriz = criarMatriz(nLinhas, nColunas)(f4);
    console.table(matriz);

    matriz = criarMatriz(nLinhas, nColunas)(f5);
    console.table(matriz);

}


main();