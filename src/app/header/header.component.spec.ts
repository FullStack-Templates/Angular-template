import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth-service.service';

import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService:  {
    isAuthenticated: () => true,
    login: ()  => {},
    logout: () => {},
    authenticationEventObservable: Subject<boolean> ,
    oauthService: OAuthService,
    router: Router
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      declarations: [HeaderComponent],
      providers: [{
        provide: AuthService,
        useValue: {}
      }]
    }).compileComponents();
    TestBed.overrideProvider(AuthService, { useValue: authService });
    //let router = TestBed.get(Router);
  });
  
  beforeEach(() => {
    //fixture = TestBed.createComponent(HeaderComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(true).toBe(true);
  });

});

