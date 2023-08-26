import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',

})
export class PokemonListComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemonSelected: Pokemon | undefined;
  constructor(
      private router: Router,
      private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList()
  }

  // selectPokemon = (pokemonId: string) => {
  //   const id: number = +pokemonId
  //   this.pokemonSelected = this.pokemonList.find(pokemon => pokemon.id === id);
  // }

  goToPokemonDetail(pokemon: Pokemon){
    this.router.navigate(['/pokemons/', pokemon.id])
  }


}
