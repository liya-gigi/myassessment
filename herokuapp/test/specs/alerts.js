// class Javaalert{
//  alertindex(){
// return $('//*[@id="content"]/div/ul/li[1]/button')

// }
// }
//const alert=new Javaalert();
describe('Website alerts', () => {
    it('click for js alert', async () => {
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts")
        //browser.pause(5000);
        const elem = $("//button[text()='Click for JS Alert']")
        await elem.waitForDisplayed({ timeout: 5000 })
        console.log(elem, "print value")
        //console.log(elem.isExisting())
        //elem.waitForDisplayed()
        //    browser.waitUntil(()=>elem.getAttribute('onlclick')==="jsAlert()",{timeout: 5000,timeoutMsg:"Error message didn't appear"})
        //    //console.log(elem.getText()=="Click for JS Alert")
        await elem.click()
        await browser.pause(5000);

        //     const elemb=browser.getAlertText();
        //   expect(elemb).toHaveTextContaining("aI am a JS Alert")

    });
});







