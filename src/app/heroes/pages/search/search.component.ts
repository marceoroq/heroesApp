import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../models/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styles: [],
})
export class SearchComponent implements OnInit {
    query: string = '';
    heroes: Heroe[] = [];
    heroeSelected!: Heroe;

    constructor(private heroesService: HeroesService) {}

    ngOnInit(): void {}

    previousSearch() {
        this.heroesService
            .getHeroesSuggestion(this.query)
            .subscribe((heroes) => (this.heroes = heroes));
    }

    optionSelected(event: MatAutocompleteSelectedEvent) {
        if (event.option.value) this.heroeSelected = event.option.value;
        this.query = this.heroeSelected.superhero || '';
    }
}
