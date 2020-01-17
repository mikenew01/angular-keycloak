import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'key-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router,
              private keycloakAngularService: KeycloakService) { }

  ngOnInit() {
    try {
      let userDetails = this.keycloakAngularService.getKeycloakInstance().tokenParsed["userDetails"];
      console.log('cadastro: ', userDetails);
    } catch (e){
      console.log('Failed to load user details', e);
    }
  }

  logout(): void {
    this.keycloakAngularService.logout();
  }

}
