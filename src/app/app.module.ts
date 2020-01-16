import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {KeycloakService} from './auth/keycloak.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule
  ],
  providers: [
    KeycloakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
