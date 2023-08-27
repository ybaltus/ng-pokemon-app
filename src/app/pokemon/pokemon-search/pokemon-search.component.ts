import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styles: [
  ]
})
export class PokemonSearchComponent implements OnInit{
  searchTermsSubject= new Subject<string>()
  pokemons$: Observable<Pokemon[]>;

  constructor(
      private router: Router,
      private pokemoNService: PokemonService
  ) {}

  ngOnInit(): void {
    this.pokemons$ = this.searchTermsSubject
        .pipe(
            debounceTime(300),
            distinctUntilChanged(),
            switchMap(term => this.pokemoNService.searchPokemonListByName(term))
        );
  }

  searchFunction(term: string) {
    this.searchTermsSubject.next(term);
  }

  goToDetail(pokemon: Pokemon){
    return this.router.navigate(['/pokemon', pokemon.id]);
  }

}
