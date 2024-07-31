// const { getElement, getLocator,getElementExists } = require('../locators/getElementLocators');
// import { assert } from 'chai';
// let fsexe = require('fs-extra');
// const { geturl } = require('../config/environment');
// // import * from ('./WebdriverCommands');

// const waitTime = 1000;
// /// ============= Generic Functions ========
// const imageComparisonSave = (page: string, pageLength: string): void => {
//   browser.pause(waitTime);
//   if (pageLength.includes('screenshots')) {
//     browser.saveScreen();
//   } else if (pageLength.includes('fullpageScreenshot')) {
//     browser.saveFullPageScreen(page, {
//       /* some options */
//     });
//   }
// };

// const imageComparisonCompare = (page: string, pageLength: string): void => {
//   browser.pause(waitTime);
//   console.log("Reached compare image function");
//   // const windowSize = browser.getWindowSize();
//   // browser.setWindowSize(1920,1080);
//   // browser.maximizeWindow();
//   //   console.log(windowSize);
//   if (pageLength.includes('screenshots')) {
//     expect(
//       browser.checkScreen(page, {
//         /* some options */
//       })
//     ).toEqual(0);
//   } else if (pageLength.includes('fullpageScreenshot')) {
//     expect(
//       browser.checkFullPageScreen(page, {
//         /* some options */
//       })
//     ).toEqual(0);
//   }
// };

// const imageComparisonCompareNew = (page: string, pageLength: string): void => {
//   browser.pause(waitTime);
//   console.log("Reached compare image function");
//   if (pageLength.includes('screenshots')) {
//     expect(browser.checkScreen.assert.isTrue(page, {})).toEqual(0);
//   } else if (pageLength.includes('fullpageScreenshot')) {
//     expect(
//       browser.checkFullPageScreen.assert.isTrue(page, {
//         /* some options */
//       })
//     ).toEqual(0);
//   }
// };

// const imageEleSave = (timeele: string): void => {
//   const element = getElement(timeele);
//   browser.saveElement(element, timeele, {
//     /* some options */
//   });
// };

// const imageEleCompare = (timeele: string): void => {
//   browser.pause(waitTime);
//   const element = getElement(timeele);
//   expect(
//     browser.checkElement(element, timeele, {
//       /* some options */
//     })
//   ).toEqual(0);
// };

// const imageComparisonExcludeSave = (page: string, pageLength: string, ele1: string, ele2: string): void => {
//   browser.pause(waitTime);

//   if (pageLength.includes('fullpageScreenshot')) {
//     const elm1 = getElement(ele1);
//     const elm2 = getElement(ele2);
//     browser.saveFullPageScreen(page, {
//       hideElements: [elm1, elm2] /* some options */,
//     });
//   }
// };

// const imageComparisonExcludeCompare = (page: string, pageLength: string, ele1: string, ele2: string): void => {
//   browser.pause(waitTime);
//   if (pageLength.includes('fullpageScreenshot')) {
//     const elm1 = getElement(ele1);
//     const elm2 = getElement(ele2);
//     expect(
//       browser.checkFullPageScreen(page, {
//         hideElements: [elm1, elm2] /* some options */,
//       })
//     ).toEqual(0);
//   }
// };

// //Launching application
// export const openUrl = (pageDescription: string): void => {
//   const url =  geturl(pageDescription);
//   browser.url(url);
// };

// //Clicking on element
// export const click =  (element: string): void => {
//   const currentElement =  getElement(element);
//    currentElement.scrollIntoView({ block: 'center', inline: 'center' });
//    browser.waitUntil(() => currentElement.isClickable(),{
//     timeout: 5000,
//     timeoutMsg: 'Expected text to be visible after 10s'
//   });
//    currentElement.click();
//   console.log('Clicked on element:=> ' + element);
// };

// //Element not enabled
// export const verifyElementIsNotEnabled =  (webElement: string): void => {
//   const currentElement =  getElement(webElement);
//    currentElement.scrollIntoView({ block: 'center', inline: 'center' });
//   browser.waitUntil(() => currentElement.isDisplayed());
//   let ariaSelected =  currentElement.getAttribute('aria-disabled');
//   if (ariaSelected == 'false') {
//       console.log('WebElement is disabled as expected.');
//   }else{
//     console.log('WebElement should not be enabled, but it is.');
//   }
// };

// //Element is enabled
// export const verifyElementIsEnabled =   (webElement: string):  boolean => {
//   const currentElement =   getElement(webElement);
//     currentElement.scrollIntoView({ block: 'center', inline: 'center' });
//   browser.waitUntil(() => currentElement.isDisplayed());
//   let ariaSelected =   currentElement.getAttribute('aria-disabled');
//   if (ariaSelected == 'true') {
//       console.log('WebElement is enabled as expected.');
//   }else{
//     console.log('WebElement should not be disabled, but it is.');
//   }
//   return true;
// };

// // //Compare the list of products
// // export const compareProductList = (listName: string): void => {
// // let data = fsexe.readFileSync('src/testData/CarProductsList/' + listName + '.json', 'utf8');
// // let jsonData = JSON.parse(data);
// // let counter = 0;
// //   let productCodeWithNameActual = "";
// //   let productCodeWithNameExpected = "";
// //   const prodHeaderText = getElement('productListHeaderText');
// //   browser.waitUntil(() => prodHeaderText.isDisplayed());
// //   console.log('prodHeaderText------>'+ prodHeaderText.getText());
// //   const productCodeLists =  getElements('productCodesLists');
// //   const productNameLists =  getElements('productNamesLists');
// //   // while(counter != productCodeLists.length-1){
// //       for (let i = 0; i < productCodeLists.length; i++) {
// //           let productCode = productCodeLists[i].getText();
// //           let productName = productNameLists[i].getText();
// //           productCodeWithNameActual = productCode + productName;
// //           productCodeWithNameExpected = jsonData.ListofProducts[i].key;
// //           assert.equal(productCodeWithNameExpected, productCodeWithNameActual, 'Listn of car product is not matching');
// //     }
// // };

// //Element not visible
// export const verifyElementIsNotVisible =   (webElement: string):  void => {
//   const element =   getElementExists(webElement);
//   browser.waitUntil(() => !element.isDisplayed(),
//   {
//     timeout: 10000,
//     timeoutMsg: 'Expected text to be visible after 10s'
//   });
//   const isEnabled = !element.isDisplayed();
//   assert.equal(isEnabled, true);
//   console.log('Element is not visible on the screen----->'+ webElement);
// };

//  //Element is visible
// export const verifyElementIsVisible =   (webElement: string):  boolean => {
//   const element =   getElementExists(webElement);
//     element.scrollIntoView({ block: 'center', inline: 'center' });
//     browser.waitUntil(() => element.isDisplayed(),
//   {
//     timeout: 10000,
//     timeoutMsg: 'Expected text to be visible after 10s'
//   });
//   const isEnabled =   element.isDisplayed();
//   assert.equal(isEnabled, true);
//   console.log('Element is visible on the screen----->'+ webElement);
//   return isEnabled;
// };

// //Drag till the screen
// export const scrollToWebElement =   (element: string):  void => {
//   let scrollEle =   getElement(element);
//     scrollEle.scrollIntoView({ block: 'center', inline: 'center' });
//   browser.waitUntil(() => scrollEle.isDisplayed());
// }; 

// //Verify the title of the webpage  
// export const verifyTitleText =   ():  void => {
//   const actualTitleText = browser.getTitle();
//   const expectedTitleText = 'Safety - Highlights | Volvo Cars';
//   console.log(actualTitleText);
//   assert.equal(expectedTitleText, actualTitleText, 'Browser title is not correct');
// };

//  //Element is selected
// // export const verifyWebElementIsSelected =   (webElement: string):  void => {
// //   const currentElement =    getElement(webElement);
// //      currentElement.scrollIntoView({ block: 'center', inline: 'center' });
// //      browser.waitUntil(() => currentElement.isDisplayed(),
// //   {
// //     timeout: 10000,
// //     timeoutMsg: 'Expected text to be visible after 10s'
// //   });
// //   let ariaSelected =    currentElement.getAttribute('aria-selected');
// //   if (ariaSelected == 'true') {
// //       console.log('WebElement is selected as expected--->'+ webElement);
// //   }else{
// //     console.log('WebElement should not be selected, but it is---->'+webElement);
// //   }
// // };

// //Wait until an element is disappeared from the screen
// export const waitUntilElementIsDisplayed=   (element: string):  void =>{
//   let locatedElement =   getElement(element);
//     locatedElement.scrollIntoView({ block: 'center', inline: 'center' });
//   const flag = browser.waitUntil(() => locatedElement.isDisplayed(),
//   {
//     timeout: 10000,
//     timeoutMsg: 'Expected text to be visible after 10s'
//   });
//   console.log(element +' Element is not displayed : ' + flag);
//   expect(flag).toBe(true);
// };

//  //Element is not selected
// export const verifyWebElementIsNotSelected =   (webElement: string):  void => {
//   const currentElement =   getElement(webElement);
//     currentElement.scrollIntoView({ block: 'center', inline: 'center' });
//   browser.waitUntil(() => currentElement.isClickable(),{
//     timeout: 10000,
//     timeoutMsg: 'Expected text to be visible after 10s'
//   });
//   let ariaSelected =   currentElement.getAttribute('aria-selected');
//   if (ariaSelected == 'false') {
//       console.log('WebElement is not selected as expected.');
//   }else{
//       console.log('WebElement is selected, but it should not.');
//   }
// };

// export {
//   imageComparisonSave,
//   imageComparisonCompare,
//   imageEleSave,
//   imageEleCompare,
//   imageComparisonExcludeSave,
//   imageComparisonExcludeCompare,
//   imageComparisonCompareNew,
// };
