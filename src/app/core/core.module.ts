import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotificationService} from './services/notification.service';
import {MatSnackBarModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    NotificationService
  ]
})
export class CoreModule { }
