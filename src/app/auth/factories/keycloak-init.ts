import {KeycloakConfig, KeycloakService} from 'keycloak-angular';

import { environment } from '../../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {

      const keycloakConfig: KeycloakConfig = {
        url: environment.KEYCLOAK_URL,
        realm: environment.KEYCLOAK_REALM,
        clientId: environment.KEYCLOAK_CLIENT_ID,
        credentials: {
          secret: environment.KEYCLOAK_CLIENT_SECRET
        }
      };

      console.log('config', keycloakConfig);

      try {
        await keycloak.init({
          config: keycloakConfig,
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false,
            promiseType: 'native'
          },
          bearerExcludedUrls: ['/public']
        });

        resolve();
      } catch (error) {
        console.log('error', error);
        reject(error);
      }
    });
  };
}
