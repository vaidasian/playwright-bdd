// Generated from: src/features/login.feature
import { test } from "../../../steps/fixtures.ts";

test.describe('Login to SauceDemo', () => {

  test('Successful login', async ({ Given, When, Then }) => { 
    await Given('user opens login page'); 
    await When('user performs valid login'); 
    await Then('user should be on products page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src/features/login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given user opens login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When user performs valid login","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user should be on products page","stepMatchArguments":[]}]},
]; // bdd-data-end