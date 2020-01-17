import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {KeycloakProfile} from 'keycloak-js';

@Component({
  selector: 'key-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userDetails: KeycloakProfile;
  roles: string[];

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    if( await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
      this.roles = await this.keycloakService.getUserRoles(true);
    }
  }

  async doLogout() {
    await this.keycloakService.logout();
  }

}
