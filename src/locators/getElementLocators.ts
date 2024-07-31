// import homeScreen from "./HomeScreen_Locators";
// import { waitforTimeout } from "../config/base.config";

// const selectorsMap = {
//     ...homeScreen,
// };

// const getElement = (testElement): WebdriverIO.Element => {
//     const element = $(selectorsMap[testElement]);
//     element.waitForDisplayed({ timeout: waitforTimeout });
//     return element;
// };

// const getElements = (testElement): WebdriverIO.ElementArray => {
//     // console.log("Enter the get element array");
//     const element = $$(selectorsMap[testElement]);
//     // console.log("Enter the get element array 2");
//     // element.waitForDisplayed({ timeout: waitforTimeout });
//     return element;
// };

// const getLocator = (testElement): WebdriverIO.Element => {
//     const element = selectorsMap[testElement];
//     return element;
// };

// const getElementExists = (testElement): WebdriverIO.Element => {
//     const element = $(selectorsMap[testElement]);
//     element.isExisting();
//     return element;
// };
// export { getElement, getLocator, getElementExists, getElements };
