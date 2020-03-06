import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { 
    console.log("PokeApi Service Listo");
  }
  getQuery( query: string){
    const url = `https://pokeapi.co/api/v2/${query}`;
    
    return this.http.get(url);
  }
  getPokemons( region: number) {
    //return this.getQuery(`search?query=${ region }&offset=0&limit=20&type=artist`).pipe( map( data =>
    //  data['artists'].items));
    return this.getQuery(`generation/${ region }`).pipe( map( data =>
      data['pokemon_species']));;
  }
  getPokemon( id: string) {
    return this.getQuery(`pokemon/${ id }`)//.pipe( map( data =>
      //data['']));;
  }

}
