const expectchai=require('chai').expect
const Keypress=require('../pageobjects/keypress.pageobj')  

describe('key press', () => {
    it('check for Tab key', async() => {
       await Keypress.urlOfWebsite(); 
       await Keypress.enterTheInput("Tab")
       await Keypress.displayResultOfTab();
   
        
    });
    it('check for Backspace key', async() => {
        await Keypress.urlOfWebsite(); 
       await Keypress.enterTheInput("Backspace")
       await Keypress.displayResultOfBackspacekey();
       
        
    });
    it('check for Shift key', async() => {
        await Keypress.urlOfWebsite(); 
        await Keypress.enterTheInput("Shift")
        await Keypress.displayResultOfShiftkey(); 
        
    });
    it('check for s key', async() => {
        await Keypress.urlOfWebsite(); 
        await Keypress.enterTheInput("S")
        await Keypress.displayResultOfSLetter(); 
        
    });
    it('check for F1 key', async() => {
        await Keypress.urlOfWebsite(); 
        await Keypress.enterTheInput("F1")
        await Keypress.displayResultOfF1Key();
        
        
    });


});