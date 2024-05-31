
console.log("Antes del FOR");

for (var index = 0; index < 10; index+=2) {
    console.log("Hola " + index);
}

console.log("Después del FOR");


console.log("ANTES DE LA FUNCION");
function saludar() {
    console.log("Hola 0");
    console.log("Hola 2");
    console.log("Hola 4");
    console.log("Hola 6");
    console.log("Hola 8");
}
console.log("DESPUES DE LA FUNCION");

saludar()
saludar()
saludar()


//----------------------------

function saludar(nombre) {
    console.log("Hola " + nombre + " 0");
    console.log(`Hola ${nombre} 2`);
    console.log(`Hola ${nombre} 4`);
    console.log(`Hola ${nombre} 6`);
    console.log(`Hola ${nombre} 8`);
}

saludar("Francisco")
saludar("Javier")


function saludar(nombre, limite=10, incremento=2, partida=0, saludo="Hola") {

    for (var index = partida; index < limite; index+=incremento) {
        console.log(`${saludo} ${nombre} ${index}`);
    }

    return `${saludo} ${nombre} ${index}`
}

saludar("Francisco", 20, 5, 10, "Hola")
var salida = saludar("Javier", 5, 1, 2, "Chao")
console.log("SALIDA DESDE SALIDA:",salida)



function fabricaZapatos(color, talla, marca, precio) {
    console.log("creando zapato....", color, talla, marca,precio);
    return `Se ha creado el zapato de color ${color} talla ${talla} marca ${marca} precio ${precio}`
}

var zapato1 = fabricaZapatos("azul", 40, "nike", 200);
var zapato2 = fabricaZapatos("rojo", 42, "adidas", 250);

console.log(zapato1);
console.log(zapato2);

