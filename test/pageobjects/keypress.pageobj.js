const expectchai = require('chai').expect

export class Keypress {

    //result = $('#result');
    async urlOfWebsite() {
        await browser.url("https://the-internet.herokuapp.com/key_presses");
    }

    async enterTheInput(inputValue) {
        const inputKey = await $('#target')
        await inputKey.click();
        await browser.keys(inputValue);

    }

    // async displayResultOfTab() {
    //     await this.resultValue.waitForDisplayed();
    //     const textOfResult=await this.resultValue.getText();
    //     expectchai(textOfResult).to.equal("You entered: TAB");
    // }
}
//module.exports = new Keypress();




