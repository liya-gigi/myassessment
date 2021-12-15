class Contactcard {
    async selectTheCollab(){
        const connect=$("//a[@href='/connect']")
        browser.waitUntil(()=>connect.getAttribute('href')==="/connect",{timeout: 5000,timeoutMsg:"Error message didn't appear"})
        //const collab=await $('#recent_g5SunSR69Kj7ibWa5F4Nn7USrM4ATmhL')
        //const collab=await $("#recent_g5SunSR69Kj7ibWa5F4Nn7USrM4ATmhL>div.css-nrqm5p-UserNameAndCallMsg > div.css-1hy81fs-UserNameAndCallMsg > h4")
        const collab=await $("#recent_g5SunSR69Kj7ibWa5F4Nn7USrM4ATmhL .css-nrqm5p-UserNameAndCallMsg .css-1hy81fs-UserNameAndCallMsg >h4")
        await collab.waitForDisplayed({timeout:120000});
        await collab.click();
    }
    async contactCardDetails(){
        const contact=await $('//*[@id="9ccf2b25-bff8-49e1-9187-57c3c34c6fc9"]')
        await contact.click();
    }

    
    async chatWithAContact(){
        const firstOption=await $("#contact-card").shadow$('#contact-card > div > ul > li:nth-child(1) > span')
        await firstOption.waitForDisplayed();
        await firstOption.click();
    }
}
module.exports=new Contactcard();