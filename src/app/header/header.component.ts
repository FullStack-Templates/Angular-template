import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isAuthenticated = false;

  /**
   *
   * @param authService
   * @param router
   */
  constructor(private authService: AuthService, private router: Router) {
    this.authService.authenticationEventObservable.subscribe(event => {
      this.isAuthenticated = event;
    });
  }

  /**
   *
   */
  ngOnInit() {
    // do nothing
  }

  /**
   *
   */
  public login() {
    this.authService.login();
  }

  /**
   *
   */
  public logout() {
    this.authService.logout();
    this.isAuthenticated = this.authService.isAuthenticated();
    this.router.navigateByUrl('landing');
  }
}
