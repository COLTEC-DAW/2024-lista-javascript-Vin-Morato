function imprimeNumeros()
{

    for (let index = 1; index <= 100; index++) {

        if (index % 3 == 0 && index % 5 == 0) {
            console.log (index + " -> FizzBuzz");
            continue;
        } else if (index % 5 == 0) {
            console.log (index + " -> Buzz");
            continue;
        } else if (index % 3 == 0) {
            console.log (index + " -> Fizz");
            continue;
        }
        console.log (index);
    }
}

imprimeNumeros();