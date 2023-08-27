import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: [
      './pokemon-form.component.less'
  ]
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  pokemonTypeList: string[];
  isAddForm: boolean;

  constructor(
      private pokemonService: PokemonService,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.pokemonTypeList = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  hasType(pokeType: string): boolean {
    return this.pokemon.types.includes(pokeType);
  }

  selectType(isChecked: boolean, pokeType: string) {
    if(isChecked){
      this.pokemon.types.push(pokeType);
    }else{
      const indexType = this.pokemon.types.indexOf(pokeType);
      this.pokemon.types.splice(indexType, 1);
    }
  }

  isTypesValid(pokeType: string): boolean{

    if(this.pokemon.types.length === 1 && this.hasType(pokeType)){
      return false;
    }

    if(this.pokemon.types.length >= 3 && !this.hasType(pokeType)) {
      return false;
    }

    return true;
  }

  onSubmit(){
    if(this.isAddForm){
      this.pokemonService.addPokemon(this.pokemon)
          .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemon', pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
          .subscribe(() => this.router.navigate(['/pokemon', this.pokemon.id]));
    }

    // console.log("Le formulaire est soumis");
    // this.router.navigate(['/pokemon', this.pokemon.id])
  }
}
