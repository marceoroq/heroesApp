import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.interface';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    
    private baseUrl: string = environment.baseUrl;
    private _userAuth!: User | null;

    constructor(private http: HttpClient) {

    }

    get userAuthenticated() {
        return { ...this._userAuth };
    }

    public isUserAuthenticated(): Observable<boolean> {
        /* Funcion que utilizamos para verificar si tenemos un usuario
        autenticado, esto es, revisando si tenemos el token del usuario
        guardado en el localStorage y revisando que sea un valor valido */

        if(!localStorage.getItem('token'))
            return of(false);
        
        return this.http.get<User>(`${this.baseUrl}/usuarios/1`)
                        .pipe(map(user => {
                            this._userAuth = user;
                            return true;
                        }));
    }
    
    public login() {
        return this.http.get<User>(`${this.baseUrl}/usuarios/1`)
                        .pipe(
                            tap(user => this._userAuth = user),
                            tap(user => localStorage.setItem('token', user.id))
                        );
    }
    
    public logout() {
        localStorage.removeItem('token');
        this._userAuth = null;
    }

}
