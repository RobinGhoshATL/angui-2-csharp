import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-confirm-execution',
  template: `<h1 matDialogTitle class="mb-05">{{ data.title }}</h1>
    <div mat-dialog-content class="mb-1">{{ data.message }}</div>
    <div mat-dialog-actions class="text-center display-block">
    <button 
    type="button" 
    mat-raised-button
    color="primary" 
    (click)="dialogRef.close(true)">OK</button>
    &nbsp;
    <span fxFlex></span>
    <button 
    type="button"
    mat-raised-button 
    (click)="dialogRef.close(false)">Cancel</button>
    </div>`,
})
export class AppConfirmExecutionComponent {
  constructor(
    public dialogRef: MatDialogRef<AppConfirmExecutionComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {}
}