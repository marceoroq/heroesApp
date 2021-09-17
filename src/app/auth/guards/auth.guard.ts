import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, 
         Route, RouterStateSnapshot, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
    
    constructor(private authService: AuthService,
                private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            // if (this.authService.userAuthenticated.id) 
            //     return true;
            
            // console.log("Blocked by AuthGuard - CanActivate");
            // return true;
            return this.authService.isUserAuthenticated()
                        .pipe(tap(isAuthenticated => {
                            if(!isAuthenticated)
                                this.router.navigate(['/auth/login'])
                        }));
        }
    

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.isUserAuthenticated()
                        .pipe(tap(isAuthenticated => {
                            if(!isAuthenticated)
                                this.router.navigate(['/auth/login'])
                        }));;
        }
}
