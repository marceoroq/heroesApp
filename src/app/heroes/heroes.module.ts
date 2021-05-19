import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
    declarations: [
        AddComponent,
        SearchComponent,
        DetailsComponent,
        HomeComponent,
        CatalogueComponent
    ],
    imports: [CommonModule, HeroesRoutingModule]
})
export class HeroesModule {}
