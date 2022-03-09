import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

import { AppConfirmExecutionComponent } from './app-confirm-execution.component';

interface confirmData {
  title?: string,
  message?: string
}

@Injectable()
export class AppConfirmExecutionService {
  executionStop = false;

  constructor(private dialog: MatDialog) { }

  public confirm(data:confirmData = {}): Observable<boolean> {
    data.title = data.title || 'Confirm';
    data.message = data.message || 'Are you sure?';
    let dialogRef: MatDialogRef<AppConfirmExecutionComponent>;
    dialogRef = this.dialog.open(AppConfirmExecutionComponent, {
      width: '400px',
      disableClose: true,
      data: {title: data.title, message: data.message}
    });
    return dialogRef.afterClosed();
  }
}