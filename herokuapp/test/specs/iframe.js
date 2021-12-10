
class Iframe {

    sendText(text) {
        //this.iframebody.waitForDispalyed()
        this.iframebody.clearValue();
        this.iframebody.click();
        this.iframebody.keys(text)
    }

}
const webpage = new Iframe();

describe('learn frames', () => {
    it('check for iframe', async () => {
        await browser.url("https://the-internet.herokuapp.com/iframe")

        const iframe = await $("#mce_0_ifr")
        const iframebody = await $("#tinymce")
        await iframe.waitForDisplayed({ timeout: 8000 })

        await browser.switchToFrame(iframe)
        await iframebody.waitForDisplayed({ timeout: 8000 })
        await iframebody.clearValue();
        await iframebody.click();
        await iframebody.keys("Hello how are you?")

        await expect(iframebody).toHaveTextContaining("Hello how are you?")


    });
});




