import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre :string= "Manuel";
  nombre2 = "manuel gaRcia geRmAn";
  dinero :number = 123;

  array =[1,2,3,4,5,6,7,8,9,10];

  pi = Math.PI;

  heroe = {
    nombre: "Logan",
    clave: "Lobezno",
    edad: 500,
    direccion :{
      calle: "Primera",
      casa: "19",
      ciudad: "Los Angeles"
    }
  }

  valorDePromesa = new Promise( (resolve, reject )=>{
    setTimeout(() => resolve(' llego la data'), 3000);
  } );
  

  fecha = new Date();
  video = "m0eSf0JrUIk";

}
