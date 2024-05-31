

var nombre = "Francisco";
var apellidos = "Santos";
var edad = 50;

var persona = {
    'nombre': 'Francisco',
    'apellidos': 'Santos',
    'edad': 18,
    'nombre_completo': function () {
        return this.nombre + ' ' + this.apellidos
    }
}

var persona1 = {
    'nombre': 'Francisco1',
    'apellidos': 'Santos1',
    'edad': 17
}


console.log(persona);
console.log(persona.nombre_completo())

console.log(persona.nombre);
console.log(persona1.nombre);


var arregloPersonas = [persona, persona1]

arregloPersonas.push({
    'nombre': 'Francisco2',
    'apellidos': 'Santos2',
    'edad': 16
})

console.log(arregloPersonas)


for (var i = 0; i < arregloPersonas.length; i++) {
    console.log(arregloPersonas[i].edad)
}

arregloPersonas[1].apellidos = "Santos3"

//   [] = for o while.
//   {} = . 