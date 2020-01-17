import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private keycloakService: KeycloakService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.keycloakService.getToken() || '';

    request = request.clone({
      setHeaders: { 'Authorization': 'Bearer ' + authToken }
    });

    return next.handle(request);
  }
}
