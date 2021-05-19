import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
    declarations: [
        AddComponent,
        SearchComponent,
        DetailsComponent,
        HomeComponent,
        CatalogueComponent
    ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        FlexLayoutModule,
        AngularMaterialModule
    ]
})
export class HeroesModule {}
