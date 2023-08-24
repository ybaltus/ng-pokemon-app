import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {POKEMONS} from "../mock-pokemon";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: [
  ]
})
export class PokemonDetailComponent implements OnInit{
  pokemonList: Pokemon[];
  pokemonTarget: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')

    if(pokemonId && this.pokemonList.length > 0) {
      this.pokemonTarget = this.pokemonList.find(pokemon => pokemon.id === +pokemonId);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

}
