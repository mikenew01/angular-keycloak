import { Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private keycloakService: KeycloakService) {
  }

  public getRolesLoggedUser(): string[] {
      let roles: string[] = [];
      from(this.keycloakService.getUserRoles(true)).subscribe(result => roles.push(result));
      return roles;
  }

  public userHasRole(role: string): boolean {
    return this.getRolesLoggedUser().includes(role) as boolean;
  }

  public logout(): void {
    this.keycloakService.logout();
  }

}
