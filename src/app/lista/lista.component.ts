import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  region: any[] = [];
  pokemon: any = {};

  constructor(private router: ActivatedRoute, private router2: Router,
    private pokedex: PokeapiService) {
      this.router.params.subscribe( params =>{
        this.pokedex.getPokemons( params['id'] );
      })
      }

  ngOnInit(): void {
    }

    verPokemons(id: number) {
       this.pokedex.getPokemons(id).subscribe( region => {
        this.region = region;
        console.log(region);
      });
    }
    verPokemon(id: string){
        this.router2.navigate(['/perfil', id]);
        console.log(id);
    }
  }
