// step-definitions/example.steps.ts
import { After, Before, Given, When, Then } from '@wdio/cucumber-framework';
// var fs = require('fs');

// Your step definitions here...

// After(async function ({result}){
//   console.log("Dit is voor de IF STATEMENT \n \n")
//   if (result.passed === "failed") {
//     console.log("Dit is een console log in de IF statement van de AFTER \n \n")
//     // If the scenario has failed, capture a screenshot
//     // const scenarioName = result.replace(/ /g, '_'); // Remove spaces from the scenario name
// //     var dir = __dirname + '/screenshots';
// // if (!fs.exists(dir)) {
// //     fs.mkdirSync(dir);
// // }
//     await browser.saveScreenshot( "./test2.png")
    
// }});




// if (result.passed === true) {
//       //   // If the scenario has failed, capture a screenshot
//       //   const scenarioName = context.    .name.replace(/ /g, '_'); // Remove spaces from the scenario name
//       console.log("context is ", context)
//       await browser.saveScreenshot(`../screenshots/Test-failed.png`);

// Betaalde CHATGPT
// After(async function(scenario: Scenario) {
//   if (scenario.result.status === Status.FAILED) {
//       // Here you can add actions to be performed if the scenario failed
//       // For example, take a screenshot
//       const screenshot = await browser.saveScreenshot();
//       this.attach(screenshot, 'image/png');
//   }
// });
