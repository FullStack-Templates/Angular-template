import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from '../home/home.component';
import {AuthGuard} from './auth-guard.guard';
import {AuthService} from './auth-service.service';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

jest.mock('./auth-service.service');

describe('CanActivateGuardService', () => {
  let authGuard: AuthGuard;
  const authService = new AuthService(null, null);

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [HomeComponent],
      providers: [
        {
          provide: AuthService,
          useValue: {},
        },
      ],
    }).compileComponents();
    TestBed.overrideProvider(AuthService, {useValue: authService});
    const router = TestBed.get(Router);
    authGuard = new AuthGuard(router, TestBed.get(AuthService));
  });

  it('expect authguard to instantiate', () => {
    expect(authGuard).toBeTruthy();
  });

  it('expect authguard can activate to be true', done => {
    const yes = true;
    jest.spyOn(authService, 'isAuthenticated').mockImplementation(() => {
      return yes;
    });
    const canActivate: Observable<boolean> = authGuard.canActivate(
      null,
      null
    ) as Observable<boolean>;
    canActivate.subscribe((canActivateValue: boolean) => {
      expect(canActivateValue).toBe(yes);
      done();
    });
  });

  it('expect authguard can activate to be false', done => {
    const no = false;
    jest.spyOn(authService, 'isAuthenticated').mockImplementation(() => {
      return no;
    });
    authService.authenticationEventObservable = new Subject<boolean>();

    const canActivate: Observable<boolean> = authGuard.canActivate(
      null,
      null
    ) as Observable<boolean>;
    canActivate.subscribe((canActivateValue: boolean) => {
      expect(canActivateValue).toBe(no);
      done();
    });
    authService.authenticationEventObservable.next(no);
  });
});
