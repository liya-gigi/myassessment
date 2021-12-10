const Page = require('../pageobjects/page');
class Checkbox extends Page{
    open()
    {
        return super.open('checkboxes')
    }
    
}
const checkbox = new Checkbox();
describe('validate checkboxes', () => {
    it('unselect checkbox 2', async() => {
        await checkbox.open();
        const checkBoxes=$$("//input[@type='checkbox']")
        await checkBoxes[1].click();
        console.log(checkBoxes[1].isSelected())
        browser.saveScreenshot("screenshot.png")
    });
    it('select checkbox 1', async() => {
        const checkBoxes=$$("//input[@type='checkbox']")
        await checkBoxes[0].click();
        console.log(checkBoxes[0].isSelected())
        browser.saveScreenshot("screenshot2.png")
    });
});