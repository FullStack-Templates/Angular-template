{{ template:logo }}

{{ template:title }}

{{ template:badges }}

## Tech Stack  ![service aws-lambda](https://img.shields.io/badge/-Angular-green?style=social&logo=Angular)  ![service aws-lambda](https://img.shields.io/badge/-Typescript-green?style=social&logo=TypeScript) ![service aws-lambda](https://img.shields.io/badge/-aws-green?style=social&logo=Amazon+AWS)  ![service aws-lambda](https://img.shields.io/badge/-GithubActions-green?style=social&logo=GitHub+Actions)  ![service aws-lambda](https://img.shields.io/badge/-Auth0-green?style=social&logo=Auth0) ![service aws-lambda](https://img.shields.io/badge/-OpenIDConnect-green?style=social&logo=OpenID) 

This project can be used as an  Angular template for building a responsive Single Page Application with:
- An elegant landing page
- A secure home page
- A secure login using Auth0, a leading OpenID Connect compliant Identity Provider

The tech stack used are:
- Angular as the SPA framework
- angular-oauth2-oidc as OpenID certified javascript library
- Auth0 as the OpenID compliant Identity Provider
- AWS S3 for hosting the application
- GitHub Actions as the CI/CD tool

## CI/CD and metrics:
- [GitHub Actions](https://github.com/FullStack-Templates/Angular-template/actions) for continuous integration and delivery to S3
- [Cypress](https://dashboard.cypress.io/projects/tbbs2j/analytics/runs-over-time) for e2e tests
- [Coveralls](https://app.codecov.io/gh/FullStack-Templates/Angular-template) for Code Coverage reports
- [CodeCov](https://app.codacy.com/gh/FullStack-Templates/Angular-template/dashboard?utm_source=github.com&utm_medium=referral&utm_content=FullStack-Templates/Angular-template&utm_campaign=Badge_Grade) for Code quality reports

## Project Documentation:
- Detailed documenation is available [here](https://www.todaystechnology.org/post/part-1-a-responsive-angular-app-with-openid-connect)
- Live preview available at: 
   - [GitHub Pages](https://fullstack-templates.github.io/Angular-template)
   - [S3 static website](http://my-angular-template.s3-website-us-east-1.amazonaws.com)
   - [Netify](https://my-angular-template.netlify.app)

Landing Page           |  Auth0 Login |  Home Page
:-------------------------:|:-------------------------:|:-------------------------:
![](./docs/assets/images/Angular-test-login.png)  |  ![](./docs/assets/images/Auth0-login.png) | ![](./docs/assets/images/Angular-test-after-login.png)
## Project Dependencies

To build and run this project, you'll need the following tools.

* Node.js - [Install Node.js 12x+](https://nodejs.org/en/), including the NPM package management tool.
* Angular CLI - [Install the Angular CLI](https://angular.io/cli)
* AWS CLI (optional) - [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)

## Build the Application
To build your application for the first time, run the following in your shell:

```console
foo@bar:~$: npm install
foo@bar:~$: npm run build
```

## Run the application
To run this application for the first time, run the following in your shell:

```console
foo@bar:~$: npm run start
```

Open up the browser to http://127.0.0.1:4200 to view the application

## Deploy the application

Deployment recommendations for this application are available [here](https://github.com/FullStack-Templates/Angular-template/wiki)

## Project Documentation

To customize the project's documentation, please see [Project Documentation And Metrics](https://github.com/FullStack-Templates/Angular-template/wiki/Project-Documentation-And-Metrics)

