import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap, of} from "rxjs";

@Injectable()
export class PokemonService {
    private baseUrl: string = 'api/pokemons/'
    private httpOptions = {
        headers: new HttpHeaders({
                'Content-Type': 'application/json'
        })
    };

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getPokemonList(): Observable<Pokemon[]> {
        return this.httpClient
            .get<Pokemon[]>(`${this.baseUrl}`, this.httpOptions)
            .pipe(
                tap(response => this._log(response)),
                catchError((error) => this._handleError(error, []))
            );
        //return POKEMONS;
    }

    getPokemonById(id: number): Observable<Pokemon|undefined>{
        return this.httpClient.get<Pokemon>(`${this.baseUrl}${id}`, this.httpOptions).pipe(
            tap(response => this._log(response)),
            catchError((error) => this._handleError(error, undefined))
        )
        // return POKEMONS.find(pokemon => pokemon.id == id);
    }

    getPokemonTypeList(): string[] {
        return [
            'Plante',
            'Feu',
            'Eau',
            'Insecte',
            'Normal',
            'Vol',
            'Fée',
            'Electrik',
            'Poison',
            'Combat',
            'Psy'
        ]
    }

    updatePokemon(pokemon: Pokemon): Observable<null>{
        return this.httpClient.put(`${this.baseUrl}`, pokemon, this.httpOptions)
            .pipe(
                catchError((error) => this._handleError(error, undefined))
            );
    }

    deletePokemonById(pokemonId: number): Observable<unknown>{
        return this.httpClient.delete<Pokemon>(`${this.baseUrl}${pokemonId}`)
            .pipe(
            catchError((error) => this._handleError(error, undefined))
        );
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon>{
        return this.httpClient.post<Pokemon>(`${this.baseUrl}`, pokemon, this.httpOptions)
            .pipe(
                catchError((error) => this._handleError(error, undefined))
            );
    }

    private _log(response: Pokemon|Pokemon[]|undefined){
        console.table(response);
    }

    private _handleError(error: Error, errorValue: any){
        console.log(error);
        return of(errorValue);
    }
}
