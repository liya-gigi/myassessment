const Page=require("../pageobjects/page")
const expectchai=require('chai').expect
class Dropdownoptions extends Page{
    open(){
        return super.open('dropdown');
    }

}
const dropdown=new Dropdownoptions();
describe('check for dropdown box option', () => {
    it('select option 1', async() => {
        
        await dropdown.open()
       
        const dropelem=await $('#dropdown');
        //dropelem.waitForDisplayed();
        
        //dropelem.waitForClickable({ timeout: 15000 });
        
         await dropelem.selectByVisibleText("Option 1")
         browser.saveScreenshot("screenshot5.png")
        const elem=await dropelem.getValue();
        console.log(elem)
         expectchai(elem).to.equal('1');
       
    });
    it('select option 2', async() => {
        const dropelem=await $('#dropdown');
        //dropelem.waitForDisplayed();
        
        //dropelem.waitForClickable({ timeout: 15000 });
        
         await dropelem.selectByAttribute('value','2')
         browser.saveScreenshot("screenshot6.png")
        const elemb=await dropelem.getValue();
        console.log(elemb)
         expectchai(elemb).to.equal('2');
        
    });
});