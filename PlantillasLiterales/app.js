"use strict";
var nombre = "manuel";
var apellido = "garcia";
var edad = 25;
//cuando se escribe con la tilde invertida <pre> se pueden poner variables
//dentro de la declaración de la variable
var texto = "Hola , " + nombre + " , " + apellido + " , \n            edat " + edad;
var texto2 = "" + (1 + 3);
console.log(texto2);
console.log(texto);
//funcion de flecha
//funcion normal
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//funcion de flecha
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3F("Manolito"));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smasshh!!"); }, 1500);
    }
};
hulk.smash();
//Destructuracion de objetos
var avenger = {
    nombree: "Bareta",
    clave: "Homosexual empedernido",
    poder: "Super Musculos"
};
var nombree = avenger.nombree, clave = avenger.clave, poder = avenger.poder;
console.log(nombree, clave, poder);
//Destructuracion de Array
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capitan = avengers[1], ironman = avengers[2];
console.log(thor, capitan, ironman); //la desustruracion es secuencial
//promesas
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //termina bien
        //resolve();
        //termina mal
        reject();
    }, 2000);
});
prom1.then(function () { console.log("resuelto bien"); }, function () { console.log("si algo sale mal"); });
function enviarMision(xmen) {
    console.log("enviar a mision " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("enviar a cuartel " + xmen.nombre);
}
var lobezno = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
enviarMision(lobezno);
enviarCuartel(lobezno);
//clases, constructores
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal, puedePelear, peleasGanadas) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Scott Lang", true, 5);
console.log(antman);
