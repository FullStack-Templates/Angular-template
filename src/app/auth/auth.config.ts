import {AuthConfig} from 'angular-oauth2-oidc';
import {environment} from '../../environments/environment';

export const AuthCodeFlowConfig: AuthConfig = {
  issuer: environment.authO.issuer,
  redirectUri: environment.authO.redirectUri,
  clientId: environment.authO.clientId,
  responseType: environment.authO.response_type,
  scope: environment.authO.scope,
  showDebugInformation: false,
  timeoutFactor: 0.01,
  postLogoutRedirectUri: environment.authO.postLogoutRedirectUri,
  logoutUrl: environment.authO.logoutUrl,
};
