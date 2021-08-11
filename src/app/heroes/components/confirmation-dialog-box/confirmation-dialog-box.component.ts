import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../models/heroe.interface';

@Component({
    selector: 'app-confirmation-dialog-box',
    templateUrl: './confirmation-dialog-box.component.html',
    styles: [],
})
export class ConfirmationDialogBoxComponent implements OnInit {
    constructor(
        private dialogRef: MatDialogRef<ConfirmationDialogBoxComponent>,
        @Inject(MAT_DIALOG_DATA) public heroe: Heroe
    ) {}

    ngOnInit(): void {}

    cancelOperation() {
        this.dialogRef.close();
    }

    confirmOperation() {

    }
}
