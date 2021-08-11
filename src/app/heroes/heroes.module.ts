import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { ConfirmationDialogBoxComponent } from './components/confirmation-dialog-box/confirmation-dialog-box.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ImagePipe,
        AddComponent,
        HomeComponent,
        SearchComponent,
        DetailsComponent,
        CatalogueComponent,
        HeroeCardComponent,
        ConfirmationDialogBoxComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        FlexLayoutModule,
        HeroesRoutingModule,
        AngularMaterialModule
    ]
})
export class HeroesModule {}
