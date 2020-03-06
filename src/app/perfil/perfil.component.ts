import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';

//pipes
import { PokemonPipe } from '../pokemon.pipe';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  pokemon: any = {};
  constructor(private router: ActivatedRoute, private router2: Router,
    private pokedex: PokeapiService) {
      this.router.params.subscribe( params =>{
        this.pokedex.getPokemons( params['id'] );
        this.pokedex.getPokemon(params['id']).subscribe( pokemon => {
          this.pokemon = pokemon;
          ///this.router2.navigate(['/perfil']);
          console.log(this.pokemon);
        });
      })
      
      }
    ngOnInit(): void {
      
    }
}
