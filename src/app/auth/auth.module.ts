import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeycloakAngularModule} from 'keycloak-angular';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
