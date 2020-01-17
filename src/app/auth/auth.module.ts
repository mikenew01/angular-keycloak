import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakAngularModule} from 'keycloak-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KeycloakAngularModule
  ]
})
export class AuthModule { }
