import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map, shareReplay} from 'rxjs/operators';
import {AuthService} from './auth/services/auth.service';

@Component({
  selector: 'key-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private authService: AuthService,
              private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit() {
  }

  public doLogout() {
    this.authService.logout();
  }

  public hasRole(role: string): boolean {
    return this.authService.userHasRole(role);
  }

}
