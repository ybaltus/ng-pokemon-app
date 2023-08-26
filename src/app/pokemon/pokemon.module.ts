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
import {PokemonService} from "./pokemon.service";
import {FormsModule} from "@angular/forms";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";

const pokemonRoutes: Routes = [
  { path: 'pokemon/edit/:id', component: PokemonEditComponent},
  { path: 'pokemon/:id', component: PokemonDetailComponent},
  { path: 'pokemons', component: PokemonListComponent},
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonDetailComponent,
    PokemonListComponent,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    PokemonEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
