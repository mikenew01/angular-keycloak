import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {AuthService} from './auth/services/auth.service';
import {KeycloakProfile} from 'keycloak-js';

@Component({
  selector: 'key-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  userLogged: Observable<KeycloakProfile>;

   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private authService: AuthService,
              private breakpointObserver: BreakpointObserver) {
    this.userLogged = this.authService.getUserLogged();
  }

  ngOnInit() {

  }

  public doLogout() {
    this.authService.logout();
  }

  public hasRole(role: string): boolean {
    return this.authService.userHasRole(role);
  }

  ngAfterViewInit(): void {

  }

}
