import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../models/heroe.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {
    constructor(private http: HttpClient) {}

    public getHeroes(): Observable<Heroe[]> {
        return this.http.get<Heroe[]>('http://localhost:3000/heroes/');
    }

    public getHeroeById(heroeId: string): Observable<Heroe> {
        return this.http.get<Heroe>(`http://localhost:3000/heroes/${heroeId}`);
    }
}
