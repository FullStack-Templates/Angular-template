export const environment = {
  production: false,
  authO: {
    issuer: 'https://dev-r1e4o7ny.us.auth0.com/',
    clientId: 'uBqZpyhO9dqVa1gBSPeysuzmKNPChgTq',
    redirectUri: 'http://localhost:4200/home',
    scope: 'openid profile email',
    response_type: 'id_token token',
    logoutUrl:
      'https://dev-r1e4o7ny.us.auth0.com/v2/logout?federated&returnTo=http://localhost:4200/landing&client_id=uBqZpyhO9dqVa1gBSPeysuzmKNPChgTq',
    postLogoutRedirectUri: 'http://localhost:4200/landing',
  },
};
