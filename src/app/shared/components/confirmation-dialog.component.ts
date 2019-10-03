import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'confirm-dialog',
    templateUrl: '../templates/template1/views/confirmation-dialog.component.html'
})
export class ConfirmDialogComponent {

    public title: string;
    public message: string;
    public cancelButton = 'CANCEL';
    public acceptButton = 'ACCEPT';

    constructor(private dialogRef: MatDialogRef<ConfirmDialogComponent>) { }

    public onAccept(): void {
        this.dialogRef.close(true);
    }
    public onCancel(): void {
        this.dialogRef.close(false);
    }

}