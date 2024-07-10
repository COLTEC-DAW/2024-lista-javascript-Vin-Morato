


function toList (vetor)
{
    var list = {
    valor: vetor[0],
    rest: null
    }

    var aux = list 

    for (let index = 1; index < vetor.length; index++) {
        aux.rest = {
            valor: vetor[index],
            rest: null
        };
        aux = aux.rest
    }
    return list;
}

function imprime(list) {
    if (list != null) {
        console.log(list.valor);
        imprime(list.rest);
    }
}


function main ()
{
    var vet = [1,2,3,4,5,6,7], lista;
    lista = toList(vet);
    imprime(lista);
}

main ();
