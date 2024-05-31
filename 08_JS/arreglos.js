var nombre1 = "Francisco";
var nombre2 = "Javier";
var nombre3 = "Pancho";

function saludar(){
    return "CHAO"
}


var nombres = [nombre1, nombre2, nombre3, 50, true];
                // 0     // 1    // 2   // 3   // 4

console.log(nombres[1])
console.log(nombres[3])

nombres[3] = 60

temporal = nombres[0]
nombres[0] = nombres[1]
nombres[1] = temporal

console.log(nombres)

nombres.push("Pedro");

console.log(nombres)

nombres.pop();
nombres.pop();
nombres.pop();
nombres.pop();
nombres.pop();

console.log(nombres)

var borrado = nombres.shift();

console.log(nombres)

var arreglo = [1, 2, 3, 4, 5];
arreglo.splice(2, 0, "nuevo valor");
console.log(arreglo); // Output: [1, 2, "nuevo valor", 3, 4, 5]