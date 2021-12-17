class Contactcard {
    async selectTheCollab() {
        const connect = await $("//a[@href='/connect']")
        browser.waitUntil(() => connect.getAttribute('href') === "/connect", { timeout: 5000, timeoutMsg: "Error message didn't appear" })
        const collab = await $("//h4[text()='First Collab']")
        await collab.waitForDisplayed({ timeout: 120000 });
        await collab.click();
    }
    async contactCardDetails() {
        const contact = await $('//*[@id="right-container"]/div[2]/section/ul/li[2]/figure/img')
        await contact.waitForDisplayed({ timeout: 12000 })
        await contact.moveTo();
        const profile = await $("//div[contains(@id,'9ccf2b25-bff8-49e1-9187-57c3c34c6fc9')]//h4[text()='Aishwarya']")
        browser.waitUntil(() => profile.getAttribute('text') === "Aishwarya", { timeout: 15000, timeoutMsg: "Error message didn't appear" })
        await profile.click();
        await browser.saveScreenshot("screenshotcard.png")
    }


    async chatWithAContact() {
        const contactCard= await $("#contact-card").shadow$('#contact-card > div')
        await contactCard.waitForDisplayed({ timeout:8000})
        const firstOption = await $("#contact-card").shadow$('#contact-card > div > ul > li:nth-child(1)>span')
        await firstOption.waitForDisplayed({ timeout: 12000 })
        console.log("Print"+firstOption.getText())
        await firstOption.click();
        await browser.saveScreenshot("screenshotcard2.png")
    }
    
    
}
module.exports = new Contactcard();