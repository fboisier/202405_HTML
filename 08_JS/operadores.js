
console.log("INICIO")

var edad = 90;
var contador = 10;

if (  edad > 18 && edad < 65) {
    console.log("ES EDAD LABORAL");
} else if (edad > 18) {
    console.log("MUY ABUELITO");
} else {
    console.log("ES MENOR DE EDAD")
}

//    <=   menor o igual
//    >=   mayor o igual
//    <    menor
//    >    mayor
//    ==   igual 
//    !=    diferente
//    ===   igual estricto
//    !==   diferente estricto

var a = 10;
var b = "10";

if (a == b){
    console.log("SON IGUALES")
}else{
    console.log("SON DIFERENTES")
}

if (a === b){
    console.log("SON IGUALES")
}else{
    console.log("SON DIFERENTES")
}
// && es Y  ejemplo (edad > 18 && edad < 65)
// || es O  ejemplo (edad > 18 || edad < 65)


if (edad > 18) {
    console.log("ES MAYOR DE EDAD");
    contador = 20;
} else {
    console.log("ES MENOR DE EDAD")
}

for(var i = 0; i < contador; i++) {
    console.log(i);
}

console.log("FIN")