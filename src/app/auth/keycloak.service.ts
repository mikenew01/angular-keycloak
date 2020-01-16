import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private keycloakAuth: any;

  constructor() { }

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const config = {
        url: environment.KEYCLOAK_URL,
        realm: environment.KEYCLOAK_REALM,
        clientId: environment.KEYCLOAK_CLIENT_ID
      };

      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          resolve();
        })
        .error(() => {
          reject();
        });
    });
  }

  getToken(): string {
    return this.keycloakAuth.token;
  }
}
