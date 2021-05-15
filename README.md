<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️--><p align="center">
  <img src="https://github.com/FullStack-Templates/Angular-template/blob/master/docs/assets/images/AngularOidcTemplateLogo.png" alt="Logo" width="150" height="auto" />
</p>

<h1 align="center">angular-oidc-template</h1>

<p align="center">
		<a href="https://github.com/Web-Tech-Projects/Angular-template/actions/workflows/build.yml"><img alt="Build" src="https://github.com/Web-Tech-Projects/Angular-template/actions/workflows/build.yml/badge.svg" height="20"/></a>
<a href="https://dashboard.cypress.io/projects/tbbs2j/runs"><img alt="Cypress Dashboard" src="https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/tbbs2j/master&logo=cypress" height="20"/></a>
<a href="https://codecov.io/gh/FullStack-Templates/Angular-template"><img alt="codecov" src="https://codecov.io/gh/FullStack-Templates/Angular-template/branch/master/graph/badge.svg?token=VG4HFY1PJW" height="20"/></a>
<a href="https://www.codacy.com/gh/FullStack-Templates/Angular-template/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=FullStack-Templates/Angular-template&amp;utm_campaign=Badge_Grade"><img alt="Codacy Badge" src="https://app.codacy.com/project/badge/Grade/38bb383c244749dab8aebf3601c52e3d" height="20"/></a>
<a href="https://david-dm.org/FullStack-Templates/Angular-template"><img alt="Dependencies Status" src="https://david-dm.org/FullStack-Templates/Angular-template.svg" height="20"/></a>
<a href="https://github.com/Web-Tech-Projects/Angular-template/actions/workflows/deploy.yml"><img alt="DeployAngular" src="https://github.com/Web-Tech-Projects/Angular-template/actions/workflows/deploy.yml/badge.svg" height="20"/></a>
<a href="https://app.netlify.com/sites/my-angular-template/deploys"><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/52a905ed-204f-418c-a913-24453ee2bd83/deploy-status" height="20"/></a>
	</p>



[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#tech-stack--service-aws-lambdahttpsimgshieldsiobadge-angular-greenstylesociallogoangular--service-aws-lambdahttpsimgshieldsiobadge-typescript-greenstylesociallogotypescript-service-aws-lambdahttpsimgshieldsiobadge-aws-greenstylesociallogoamazonaws--service-aws-lambdahttpsimgshieldsiobadge-githubactions-greenstylesociallogogithubactions--service-aws-lambdahttpsimgshieldsiobadge-auth0-greenstylesociallogoauth0-service-aws-lambdahttpsimgshieldsiobadge-openidconnect-greenstylesociallogoopenid-)

## ➤ Tech Stack  ![service aws-lambda](https://img.shields.io/badge/-Angular-green?style=social&logo=Angular)  ![service aws-lambda](https://img.shields.io/badge/-Typescript-green?style=social&logo=TypeScript) ![service aws-lambda](https://img.shields.io/badge/-aws-green?style=social&logo=Amazon+AWS)  ![service aws-lambda](https://img.shields.io/badge/-GithubActions-green?style=social&logo=GitHub+Actions)  ![service aws-lambda](https://img.shields.io/badge/-Auth0-green?style=social&logo=Auth0) ![service aws-lambda](https://img.shields.io/badge/-OpenIDConnect-green?style=social&logo=OpenID) 

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


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#cicd-and-metrics)

## ➤ CI/CD and metrics:
- [GitHub Actions](https://github.com/FullStack-Templates/Angular-template/actions) for continuous integration and delivery to S3
- [Cypress](https://dashboard.cypress.io/projects/tbbs2j/analytics/runs-over-time) for e2e tests
- [Coveralls](https://app.codecov.io/gh/FullStack-Templates/Angular-template) for Code Coverage reports
- [CodeCov](https://app.codacy.com/gh/FullStack-Templates/Angular-template/dashboard?utm_source=github.com&utm_medium=referral&utm_content=FullStack-Templates/Angular-template&utm_campaign=Badge_Grade) for Code quality reports


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#project-documentation)

## ➤ Project Documentation:
- Detailed documenation is available [here](https://www.todaystechnology.org/post/part-1-a-responsive-angular-app-with-openid-connect)
- Live preview available at: 
   - [GitHub Pages](https://fullstack-templates.github.io/Angular-template)
   - [S3 static website](http://my-angular-template.s3-website-us-east-1.amazonaws.com)
   - [Netify](https://my-angular-template.netlify.app)

Landing Page           |  Auth0 Login |  Home Page
:-------------------------:|:-------------------------:|:-------------------------:
![](./docs/assets/images/Angular-test-login.png)  |  ![](./docs/assets/images/Auth0-login.png) | ![](./docs/assets/images/Angular-test-after-login.png)

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#project-dependencies)

## ➤ Project Dependencies

To build and run this project, you'll need the following tools.

* Node.js - [Install Node.js 12x+](https://nodejs.org/en/), including the NPM package management tool.
* Angular CLI - [Install the Angular CLI](https://angular.io/cli)
* AWS CLI (optional) - [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#build-the-application)

## ➤ Build the Application
To build your application for the first time, run the following in your shell:

```console
foo@bar:~$: npm install
foo@bar:~$: npm run build
```


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#run-the-application)

## ➤ Run the application
To run this application for the first time, run the following in your shell:

```console
foo@bar:~$: npm run start
```

Open up the browser to http://127.0.0.1:4200 to view the application


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#deploy-the-application)

## ➤ Deploy the application

Deployment recommendations for this application are available [here](https://github.com/FullStack-Templates/Angular-template/wiki)


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#project-documentation)

## ➤ Project Documentation

To customize the project's documentation, please see [Project Documentation And Metrics](https://github.com/FullStack-Templates/Angular-template/wiki/Project-Documentation-And-Metrics)

