import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbConnectComponent } from './db-connect/db-connect.component';
import { DBConnectRoutes } from './db-connect.routing';
import { RouterModule } from '@angular/router';
import { FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FileUploadModule } from 'ng2-file-upload';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';



@NgModule({
  declarations: [DbConnectComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    ChartsModule,
    MatTooltipModule,
    MatListModule,
    FileUploadModule,
    MatProgressBarModule,
    MatIconModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatExpansionModule,
    NgxDatatableModule,
    FileManagerAllModule,
    RouterModule.forChild(DBConnectRoutes),
  ]
})
export class DbConnectModule { }
