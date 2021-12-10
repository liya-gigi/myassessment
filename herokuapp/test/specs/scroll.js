describe('Scroll to element', () => {
    it('should scroll to footer', async() => {
        await browser.url("https://the-internet.herokuapp.com/")
        const pageFooter=await $("#page-footer")
        await pageFooter.waitForDisplayed();
        await pageFooter.scrollIntoView();
        await browser.saveScreenshot("scrollimage.png");
    });
});