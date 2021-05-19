import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../models/heroe.interface';


@Component({
    selector: 'app-catalogue',
    templateUrl: './catalogue.component.html',
})
export class CatalogueComponent implements OnInit {
    
    public heroes: Heroe[] = [];

    constructor(private heroesService: HeroesService) {}

    ngOnInit(): void {
        this.heroesService.getHeroes()
            .subscribe(response => {
                this.heroes = response;
            });
    }
}
