import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';
import { ListaComponent } from './lista/lista.component';

//services
import { PokeapiService } from './pokeapi.service';
import { PokemonPipe } from './pokemon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    MenuComponent,
    ListaComponent,
    PokemonPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ PokeapiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
