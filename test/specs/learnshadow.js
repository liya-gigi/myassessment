const expectchai = require('chai').expect
describe('shadow dom', () => {

    it('compare text in the first textbox', async () => {
        await browser.url("https://the-internet.herokuapp.com/shadowdom")
        const firstTextBox = await $("#content").shadow$('#content > my-paragraph:nth-child(4) > span')
        //const firstTextBox = await $('#content > my-paragraph:nth-child(4) > span')
        await firstTextBox.waitForDisplayed();
        const textDisplayed = await firstTextBox.getText();
        expectchai(textDisplayed).to.equals("Let's have some different text!")

    });
    it('compare second textbox', async () => {

        const secondTextBox = await $("#content").shadow$('#content > my-paragraph:nth-child(5) > ul > li:nth-child(1)')
        await secondTextBox.waitForDisplayed();
        const textDisplayed = await secondTextBox.getText();
        expectchai(textDisplayed).to.equals("Let's have some different text!")

    });
    it('compare second textbox second line', async () => {
        const secondTextBox_secondLine = await $("#content").shadow$('#content > my-paragraph:nth-child(5) > ul > li:nth-child(2)')
        await secondTextBox_secondLine.waitForDisplayed();
        const textDisplayed = await secondTextBox_secondLine.getText();
        expectchai(textDisplayed).to.equals("In a list!")

    });



});
