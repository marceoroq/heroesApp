import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { DetailsComponent } from './pages/details/details.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    {path: '', component: HomeComponent, children: [
        {path: 'add', component: AddComponent },
        {path: 'edit/:id', component: AddComponent},
        {path: 'search', component: SearchComponent},
        {path: 'catalogue', component: CatalogueComponent},
        {path: 'details/:id', component: DetailsComponent},
        {path: '**', redirectTo: 'catalogue'}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeroesRoutingModule {}
