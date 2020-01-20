import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakAngularModule} from 'keycloak-angular';
import {AuthService} from './services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KeycloakAngularModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
