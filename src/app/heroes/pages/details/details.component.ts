import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../models/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';


@Component({
    selector: 'app-details',
    templateUrl: 'details.component.html',
    styleUrls: ['details.component.css']
})
export class DetailsComponent implements OnInit {
    
    heroe!: Heroe;

    constructor(private activatedRoute: ActivatedRoute, 
                private heroeService: HeroesService,
                private router: Router) {}
    
    // ngOnInit(): void {
    //     this.activatedRoute.params
    //         .subscribe(params => {
    //             this.heroeService.getHeroeById(params.id)
    //                 .subscribe(heroe => this.heroe = heroe)
    //         });
    // }
    // Suscribe anidados podemos usar swithMap 
    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(switchMap(params => this.heroeService.getHeroeById(params.id)))
            .subscribe(heroe => this.heroe = heroe)       
    }

    // public returnToCataloguePage() {
    //     this.router.navigate(['/heroes/catalogue'])
    // }
}
