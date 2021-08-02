import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {

    private baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    public getHeroes(): Observable<Heroe[]> {
        return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes/`);
    }

    public getHeroeById(heroeId: string): Observable<Heroe> {
        return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${heroeId}`);
    }

    public getHeroesSuggestion(query: string): Observable<Heroe[]> {
        return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes?q=${query}&_limit=6`);
    }
}
