// step-definitions/example.steps.ts
import { After, Before, Given, When, Then } from '@cucumber/cucumber';

// Your step definitions here...

After(async function () {
  const scenario = this['world'].pickle;
  if (scenario.result.status === 'failed') {
    // If the scenario has failed, capture a screenshot
    const scenarioName = scenario.name.replace(/ /g, '_'); // Remove spaces from the scenario name
    await browser.saveScreenshot(`./screenshots/${scenarioName}-failed.png`);
  }
});

// Betaalde CHATGPT
// After(async function(scenario: Scenario) {
//   if (scenario.result.status === Status.FAILED) {
//       // Here you can add actions to be performed if the scenario failed
//       // For example, take a screenshot
//       const screenshot = await browser.saveScreenshot();
//       this.attach(screenshot, 'image/png');
//   }
// });