const expectchai=require('chai').expect
//const Keypress=require('../pageobjects/keypress.pageobj')  
import Keypress from '../pageobjects/keypress.pageobj'
describe('key press', () => {
    it('check for Tab key', async() => {
       await Keypress.urlOfWebsite(); 
       await Keypress.enterTheInput("Tab")
       //await Keypress.displayResultOfTab();
   
        
    });
    // it('check for Backspace key', async() => {
    //     await browser.url("https://the-internet.herokuapp.com/key_presses")
    //     const enterKey=await $("#target")
    //     await enterKey.click()
    //     await browser.keys('Backspace')
    //     const result=await $("#result")
    //     await result.waitForDisplayed();
    //     const textOfResult=await result.getText();
    //     expectchai(textOfResult).to.equal("You entered: BACK_SPACE")
        
    // });
    // it('check for Shift key', async() => {
    //     await browser.url("https://the-internet.herokuapp.com/key_presses")
    //     const enterKey=await $("#target")
    //     await enterKey.click()
    //     await browser.keys('Shift')
    //     const result=await $("#result")
    //     await result.waitForDisplayed();
    //     const textOfResult=await result.getText();
    //     expectchai(textOfResult).to.equal("You entered: SHIFT")
        
    // });
    // it('check for s key', async() => {
    //     await browser.url("https://the-internet.herokuapp.com/key_presses")
    //     const enterKey=await $("#target")
    //     await enterKey.click()
    //     await browser.keys('s')
    //     const result=await $("#result")
    //     await result.waitForDisplayed();
    //     const textOfResult=await result.getText();
    //     expectchai(textOfResult).to.equal("You entered: S")
        
    // });
    // it('check for F1 key', async() => {
    //     await browser.url("https://the-internet.herokuapp.com/key_presses")
    //     const enterKey=await $("#target")
    //     await enterKey.click()
    //     await browser.keys('F1')
    //     const result=await $("#result")
    //     await result.waitForDisplayed();
    //     const textOfResult=await result.getText();
    //     console.log("value of gettext is"+textOfResult)
    //     //expectchai(textOfResult).to.equal("You entered: F1")
    //      expect(textOfResult).toHaveText("aaYou entered: F1")
        
    // });


});