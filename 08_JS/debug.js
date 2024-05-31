
function multiplicarSumando(x, y) {

    console.log(x, y)

    suma = 0;
    for (var i = 0; i < x; i++) {
        suma += y;
    }
    return suma
}

console.log(multiplicarSumando(10, 2));
