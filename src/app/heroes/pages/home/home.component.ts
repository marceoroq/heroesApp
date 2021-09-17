import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private router: Router,
                private authService: AuthService) {}
    
    get userLogged() {
        return this.authService.userAuthenticated;
    } 

    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
