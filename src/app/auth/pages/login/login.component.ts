import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [],
})
export class LoginComponent {
    constructor(private router: Router,
                private authService: AuthService) {}

    login() {
        const loginUser = this.authService.login();
        loginUser.subscribe(user => {
            this.router.navigate(['./heroes']);
        });
    }

}
