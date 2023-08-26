import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div fxLayout fxLayoutAlign="center center">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <div fxFlex="40%">
        <h1>Hey, cette page n'existe pas !</h1>
        <button mat-raised-button color="accent" routerLink="/pokemons" title="Retourner à l'accueil">
          Retourner à l'accueil
        </button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
