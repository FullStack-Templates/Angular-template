
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from './auth-guard.guard';
import { AuthService } from './auth-service.service';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { AppModule } from '../app.module';

describe('CanDeactivateGuardService', () => {
  let homeComponent: HomeComponent;
  let authGuard: AuthGuard;
  let oauthService: OAuthService;
  let authService:  {
    isAuthenticated: () => true,
    login: ()  => {},
    logout: () => {},
    authenticationEventObservable: Subject<boolean> ,
    oauthService: OAuthService,
    router: Router
  };

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [HomeComponent],
      providers: [{
        provide: AuthService,
        useValue: {}
      }]
    }).compileComponents();
    TestBed.overrideProvider(AuthService, { useValue: authService });
    let router = TestBed.get(Router);
    authGuard = new AuthGuard(router, TestBed.get(AuthService));
  });

  it('expect authguard to instantiate', () => {
    expect(authGuard).toBeTruthy();
    //authGuard.canActivate()
  });

  // more tests
});
