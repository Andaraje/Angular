let nombre:string = "manuel";
let apellido:string = "garcia";
let edad:number = 25;


//cuando se escribe con la tilde invertida <pre> se pueden poner variables
//dentro de la declaración de la variable

let texto = `Hola , ${nombre} , ${apellido} , 
            edat ${edad}`;

let texto2:string = `${1+3}`;
console.log(texto2);

console.log(texto);

//funcion de flecha


//funcion normal
let miFuncion3 = function( nombre:string ) {
    nombre = nombre.toUpperCase();
    return nombre;
}
//funcion de flecha
let miFuncion3F = (nombre:string )=>{
    nombre = nombre.toUpperCase();
    return nombre;
} 
console.log(miFuncion3F("Manolito"));


let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout (()=>console.log(this.nombre + " smasshh!!"), 1500);
    }
}
hulk.smash();

//Destructuracion de objetos
let avenger = {
    nombree: "Bareta",
    clave: "Homosexual empedernido",
    poder: "Super Musculos"
}
let { nombree, clave, poder } = avenger;
console.log(nombree,clave,poder);

//Destructuracion de Array
let avengers:string[] = ["Thor","Steve","Tony"];

let [thor, capitan, ironman ] = avengers;
console.log(thor,capitan,ironman);    //la desustruracion es secuencial

//promesas
let prom1 = new Promise(function(resolve:any, reject:any){
    setTimeout(()=>{
        console.log("Promesa terminada");
        //termina bien
        //resolve();
        //termina mal
        reject();

    },2000)
})


prom1.then(function(){console.log("resuelto bien")}, function(){console.log("si algo sale mal")});


//interfaces typescript
interface Xmen{
    nombre:string,
    poder:string
}
function enviarMision(xmen:Xmen){
    console.log("enviar a mision " + xmen.nombre);
}
function enviarCuartel(xmen:Xmen){
    console.log("enviar a cuartel " + xmen.nombre);
}
let lobezno:Xmen = {
    nombre: "Wolverine",
    poder: "Regeneracion"
}
enviarMision(lobezno);
enviarCuartel(lobezno);


//clases, constructores
class Avenger {
    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string, equipo:string, nombreReal:string, puedePelear:boolean, peleasGanadas:number){
        this.nombre=nombre;
        this.equipo=equipo;
        this.nombreReal=nombreReal;
        this.puedePelear=puedePelear;
        this.peleasGanadas=peleasGanadas;
    }
}

let antman:Avenger= new Avenger("Antman","Cap","Scott Lang", true, 5);
console.log(antman);