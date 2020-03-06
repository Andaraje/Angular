import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: ActivatedRoute, private router2: Router,
    private pokedex: PokeapiService) {
      this.router.params.subscribe( params =>{
        this.pokedex.getPokemons( params['id'] );
      })
      }

  ngOnInit(): void {
  }
  getRegiones() {
      this.router2.navigate(['/lista']);
    
  }
}
