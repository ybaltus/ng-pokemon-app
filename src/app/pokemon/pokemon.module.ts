import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./pokemon-detail/pokemon-detail.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatIconModule} from "@angular/material/icon";

const pokemonRoutes: Routes = [
  { path: 'pokemons', component: PokemonListComponent},
  { path: 'pokemons/:id', component: PokemonDetailComponent},
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
