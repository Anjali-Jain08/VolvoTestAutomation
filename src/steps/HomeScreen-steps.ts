// import { Given, When, Then } from '@cucumber/cucumber';
// import * as utils from '../utilities/homeUtility';

// Given(/^Verify the "(.*)" is launching in the browser$/, (webpage: string) => {
//   utils.openUrl(webpage);
//   utils.click('acceptCookiesButton');
//   });

// Then(/^I click on "(.*)"$/, (Webelement: string) => {
//   utils.click(Webelement);
//   });

//   Then(/^I click on "(.*)" and validate "(.*)" is selected$/, (Webelement1: string, Webelement2: string) => {
//     utils.click(Webelement1);
//     utils.verifyWebElementIsSelected(Webelement2);
//     });

//   Given(/^User take the "(.*)" page ((.*)| (.*)) for image comparison$/, (page: string, pageLength: string): void => {
//     utils.imageComparisonSave1(page, pageLength);
//   });

//   Then(/^Verify "(.*)" is visible$/, (webElement: string): void => {
//     utils.verifyElementIsVisible(webElement);
//   });

//   Then(/^Verify "(.*)" is not visible$/, (webElement: string): void => {
//     utils.verifyElementIsNotVisible(webElement);
//   });

//   Then(/^Verify "(.*)" is enabled$/, (webElement: string): void => {
//     utils.verifyElementIsEnabled(webElement);
//   });

//   Then(/^Verify below elements are visible$/, function (dataTable) {
//     this.data = dataTable.hashes();
//     for (let row of this.data) {
//       utils.verifyElementIsVisible(row.elements);
//     }
//   });

//   Then(/^Verify the actual list of products with the expected "(.*)"$/, (expectedList: string): void => {
//     utils.compareProductList(expectedList);
//   });

//   Then(/^Verify "(.*)" is not enabled$/, (webElement: string): void => {
//     utils.verifyElementIsNotEnabled(webElement);
//   });
  
//   Then(/^User compares the "(.*)" page ((.*)| (.*)) for image comparison$/, (page: string, pageLength: string): void => {
//     utils.imageComparisonCompare2(page, pageLength);
//   });

//   Then(/^Verify the title of the webpage$/, (): void => {
//     utils.verifyTitleText();
//   });

//   When(/^I scroll to "(.*)"$/, (element: string): void => {
//     utils.scrollToWebElement(element);
//   });

//   When(/^Validate "(.*)" is selected$/, (element: string): void => {
//     utils.verifyWebElementIsSelected(element);
//   });

//   When(/^Validate "(.*)" is not selected$/, (element: string): void => {
//     utils.verifyWebElementIsNotSelected(element);
//   });

//   Then(/^Validate slider icons are not selected$/, function (dataTable) {
//     this.data = dataTable.hashes();
//     for (let row of this.data) {
//       utils.verifyWebElementIsNotSelected(row.element);
//     }
//   });



  