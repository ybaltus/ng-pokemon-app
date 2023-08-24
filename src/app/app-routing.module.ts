import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'pokemons', component: PokemonListComponent},
  { path: 'pokemons/:id', component: PokemonDetailComponent},
  { path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
