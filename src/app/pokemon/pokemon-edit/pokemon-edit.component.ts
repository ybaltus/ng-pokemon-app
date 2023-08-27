import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: 'pokemon-edit.component.html',
  styles: [
  ]
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon|undefined;

  constructor(
      private route: ActivatedRoute,
      private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id')

    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
          .subscribe(pokemon => this.pokemon = pokemon);
    }
  }

}
