import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile} from 'keycloak-js';

export interface MenuItem {
  descricao: string;
  url: string;
  perfil: string[];
}

@Component({
  selector: 'key-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userDetails: KeycloakProfile;
  roles: string[];
  menus: MenuItem[] = [
    {
      descricao: 'Usuários',
      url: '/users',
      perfil: ['list']
    }
  ];

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    if( await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
      this.roles = await this.keycloakService.getUserRoles(true);
    }
  }

  getPermissao(perfil: string): boolean {
    return this.keycloakService.isUserInRole(perfil);
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

}
