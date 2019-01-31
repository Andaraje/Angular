
const OPCIONES = "todas";


function saludar(nombre:string) {
    console.log("Hola " + nombre);
}


let lobezno = {
    nombre : "Logannnn"
};

console.log(saludar(lobezno.nombre));


let nombre:string= "peter";

let hoy:Date = new Date();
hoy = new Date('2020-10-21');
console.log(hoy);

//tipo any; este tipo de variable puede recibir cualquier valor

let cualquiera:any;


//objetos

let spiderman = {
    nombre : "Peter",
    edad : 20,
    poder : "telarañas"
}

