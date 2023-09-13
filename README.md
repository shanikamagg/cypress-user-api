Cypress REST API Test Framework

Description:
User CRUD Operations (POST,GET,DELETE)
1. e2e folder contains two folders
2. constants has the index.js file - initalized the request body 
3. tests folder has UserCrudOperations.cy.js  file - methods definitions and assertions are included

Prerequisites:
nodejs
npm
cypress
Rest API 
Cypress -Allure plugin

Installation Steps:
1. Create a local project - mkdir <project name>
2. Go to the project - cd <project name>
3. Install below packages
    a. npm - nmp init
    b. cypress - npm install cypress
4. Add the following in the package.json file
"scripts": {
    "cypress:open": "./node_modules/.bin/cypress open",
    "cypress:run": "./node_modules/.bin/cypress run --spec **/*.cy.js"
  }
5. Install cypress allue plugin for reporting - npm i -D @shelex/cypress-allure-plugin and npm i allure-commandline

Test Execution
1. Go to the project
2. npx cypress open
3. Select the browser

Reporting - Allure Reporting
1. Install allure plugin - npm i -D @shelex/cypress-allure-plugin
2. Change the configurations according to this link -https://www.npmjs.com/package/@shelex/cypress-allure-plugin
3. Commands to execute 
  a. npm run api-allure
  b. npm run allure:report
  c. allure open
