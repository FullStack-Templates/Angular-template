import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';
import {AuthCodeFlowConfig} from './auth.config';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authenticationEventObservable: Subject<boolean> =
    new Subject<boolean>();

  /**
   *
   * @param router
   * @param oauthService
   */
  constructor(private router: Router, private oauthService: OAuthService) {
    this.oauthService.configure(AuthCodeFlowConfig);
  }

  /**
   *
   */
  public logout() {
    this.oauthService.logOut();
  }

  /**
   *
   */
  public isAuthenticated(): boolean {
    if (
      this.oauthService.hasValidAccessToken() &&
      this.oauthService.hasValidIdToken()
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   */
  public login() {
    console.log('Auth Service login()');
    this.oauthService
      .loadDiscoveryDocumentAndLogin()
      .then((result: boolean) => {
        console.log('result is ' + result);
        this.authenticationEventObservable.next(result);
      })
      .catch(error => {
        console.error('Authentication error: ' + error);
        this.logout();
      });

    // Optional
    this.oauthService.setupAutomaticSilentRefresh();
  }
}
