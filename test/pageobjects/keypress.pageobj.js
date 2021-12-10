const expectchai = require('chai').expect

class Keypress {
    async urlOfWebsite() {
        await browser.url("https://the-internet.herokuapp.com/key_presses");
    }
    async enterTheInput(inputValue) {
        const inputKey = await $('#target');
        await inputKey.click();
        await browser.keys(inputValue);
    }
    async displayResultOfTab() {
        const result = await $('#result');
        await result.waitForDisplayed();
        const textOfResult = await result.getText();
        expectchai(textOfResult).to.equal("You entered: TAB");
    }
    async displayResultOfBackspacekey() {
        const result = await $('#result');
        await result.waitForDisplayed();
        const textOfResult = await result.getText();
        expectchai(textOfResult).to.equal("You entered: BACK_SPACE");
    }
    async displayResultOfShiftkey() {
        const result = await $('#result');
        await result.waitForDisplayed();
        const textOfResult = await result.getText();
        expectchai(textOfResult).to.equal("You entered: SHIFT");
    }
    async displayResultOfSLetter() {
        const result = await $('#result');
        await result.waitForDisplayed();
        const textOfResult = await result.getText();
        expectchai(textOfResult).to.equal("You entered: S")
    }
    async displayResultOfF1Key() {
        const result = await $('#result');
        await result.waitForDisplayed();
        const textOfResult = await result.getText();
        expectchai(textOfResult).to.equal("You entered: F1");
    }
}
module.exports = new Keypress();




