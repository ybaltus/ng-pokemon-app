import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;
    switch (type) {
      case 'Feu':
        color = '#EC221C';
        break;
      case 'Eau':
        color = '#1C68EC';
        break;
      case 'Plante':
        color = '#63C04F';
        break;
      case 'Insecte':
        color = '#9AE411';
        break;
      case 'Normal':
        color = '#B7B8B6';
        break;
      case 'Vol':
        color = '#C8ECE2';
        break;
      case 'Poison':
        color = '#A634C4';
        break;
      case 'Fée':
        color = '#F17BDF';
        break;
      case 'Psy':
        color = '#50258D';
        break;
      case 'Electrik':
        color = '#ECCF1C';
        break;
      case 'Combat':
        color = '#BB7A22';
        break;
      default:
        color = '#D9D3CC';
        break;
    }

    return color;
  }

}
