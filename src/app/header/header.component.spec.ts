import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Subject} from 'rxjs';
import {AuthService} from '../auth/auth-service.service';
import {LandingComponent} from '../landing/landing.component';
import {HeaderComponent} from './header.component';
jest.mock('../auth/auth-service.service');

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  const authService = new AuthService(null, null);

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'landing', component: LandingComponent},
        ]),
      ],
      declarations: [HeaderComponent, LandingComponent],
      providers: [
        {
          provide: AuthService,
          useValue: {},
        },
      ],
    }).compileComponents();
    TestBed.overrideProvider(AuthService, {useValue: authService});

    authService.authenticationEventObservable = new Subject<boolean>();
    authService.authenticationEventObservable.next(true);

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  it('should login', () => {
    jest.spyOn(authService, 'login').mockImplementation(() => {});
    try {
      fixture.componentInstance.login();
    } catch (error) {
      fail('It should not reach here');
    }
  });

  it('should logout', () => {
    jest.spyOn(authService, 'logout').mockImplementation(() => {});
    jest.spyOn(authService, 'isAuthenticated').mockImplementation(() => {
      return false;
    });
    try {
      fixture.componentInstance.logout();
    } catch (error) {
      fail('It should not reach here');
    }
  });
});
