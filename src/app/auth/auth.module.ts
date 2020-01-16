import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakService} from './keycloak.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    KeycloakService
  ]
})
export class AuthModule { }
