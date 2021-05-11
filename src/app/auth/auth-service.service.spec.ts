import {TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {OAuthService} from 'angular-oauth2-oidc';
import {AuthService} from './auth-service.service';
jest.mock('angular-oauth2-oidc');

describe('AuthServiceService', () => {
  let service: AuthService;

  const oauthService = new OAuthService(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [],
      providers: [
        {
          provide: AuthService,
          useValue: {},
        },
      ],
    }).compileComponents();
    const router = TestBed.get(Router);
    service = new AuthService(router, oauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should logout', () => {
    try {
      service.logout();
    } catch {
      fail('It should not reach here');
    }
  });

  it('Should login', () => {
    try {
      jest
        .spyOn(oauthService, 'loadDiscoveryDocumentAndLogin')
        .mockImplementation(() => {
          const result = new Promise<boolean>((resolve, reject) => {
            try {
              resolve(true);
            } catch (error) {
              reject('Error: ${error}');
            }
          });
          return result;
        });
      service.login();
    } catch {
      fail('It should not reach here');
    }
  });

  it('IsAuthenticated should return true', () => {
    jest.spyOn(oauthService, 'hasValidAccessToken').mockImplementation(() => {
      return true;
    });
    jest.spyOn(oauthService, 'hasValidIdToken').mockImplementation(() => {
      return true;
    });
    expect(service.isAuthenticated()).toBe(true);
  });

  it('IsAuthenticated should return false', () => {
    jest.spyOn(oauthService, 'hasValidAccessToken').mockImplementation(() => {
      return false;
    });
    jest.spyOn(oauthService, 'hasValidIdToken').mockImplementation(() => {
      return false;
    });
    expect(service.isAuthenticated()).toBe(false);
  });
});
