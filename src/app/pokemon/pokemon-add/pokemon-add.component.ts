import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon-add',
  templateUrl: 'pokemon-add.component.html',
  styles: [
  ]
})
export class PokemonAddComponent implements OnInit{
  newPokemon: Pokemon;

  ngOnInit(): void {
    this.newPokemon = new Pokemon();
  }

}
