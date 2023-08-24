import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div fxLayout="column wrap" fxLayoutAlign="center">
      <div fxFlex="50%">
        <h1>Hey, cette page n'existe pas !</h1>
        <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
        <button mat-raised-button color="accent" routerLink="/pokemons">
          Retourner à l' accueil
        </button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
