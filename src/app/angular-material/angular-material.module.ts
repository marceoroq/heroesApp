import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
        MatSnackBarModule,
        MatGridListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatCardModule
    ]
})
export class AngularMaterialModule {}
