import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemon";

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html',
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList)
  }

  selectPokemon = (pokemonId: string) => {
    const id: number = +pokemonId
    this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id === id);
  }
}
