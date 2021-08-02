import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatGridListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatCardModule
    ]
})
export class AngularMaterialModule {}
