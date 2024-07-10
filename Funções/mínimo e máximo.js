function min(a, b) {
    if (a < b) {
        return a;
    } else
    {
        return b;
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else
    {
        return b;
    }
}

function main() {
    var a = parseFloat(prompt("Valor A:"));
    var b = parseFloat(prompt("Valor B:"));
    var valmin = min(a,b);
    var valmax = max(a,b);

    console.log ("Valor maximo: " + valmax + "\nValor minimo: " + valmin);


}

main();