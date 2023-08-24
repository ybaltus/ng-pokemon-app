import { Component } from '@angular/core';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',

})
export class PokemonListComponent {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  constructor(private router: Router) {
  }

  // selectPokemon = (pokemonId: string) => {
  //   const id: number = +pokemonId
  //   this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id === id);
  // }

  goToPokemonDetail(pokemon: Pokemon){
    this.router.navigate(['/pokemons/', pokemon.id])
  }
}
