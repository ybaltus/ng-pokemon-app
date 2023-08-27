import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: [
  ]
})
export class PokemonDetailComponent implements OnInit{
  pokemonTarget: Pokemon|undefined;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
          .subscribe(pokemon => this.pokemonTarget = pokemon);
    }
  }

  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }

  deletePokemon(pokemon: Pokemon){
    this.pokemonService.deletePokemonById(pokemon.id)
        .subscribe(()=> this.router.navigate(['/pokemons']))
  }

}
