import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { TranslateModule, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material';
import { ConfirmDialogComponent } from './components/confirmation-dialog.component';
import { AlertDialogComponent } from './components/alert-dialog.component';
import { DialogService } from './services/dialog.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    AlertDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    FlexLayoutModule,
    //BrowserAnimationsModule,
    MatDialogModule,
    MaterialModule,
    EditorModule,
    NgxChartsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    TranslateModule,
    FlexLayoutModule,
    TranslatePipe,
    TranslateDirective,
    ConfirmDialogComponent,
    AlertDialogComponent,
    //BrowserAnimationsModule,
    MatDialogModule,
    EditorModule,
    NgxChartsModule
  ],
  providers: [DialogService],
  entryComponents: [
    ConfirmDialogComponent,
    AlertDialogComponent
  ]
})
export class SharedModule { }
