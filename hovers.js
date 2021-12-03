const expectchai=require('chai').expect
class Forwebsiteurl
{
    open() 
    {
        return browser.url("https://the-internet.herokuapp.com/hovers")
    }
}

const url= new Forwebsiteurl();
describe('Hovers page', () => {
    it('Hover on first profile', async() => {
        await url.open()
        const profile_1 = await $("#content > div > div:nth-child(3) > img")
        await profile_1.moveTo()
        const profileLink=await $('//*[@id="content"]/div/div[1]/div/a') 
        await profileLink.waitForDisplayed({timeout:8000})
        const profileLink_1=await profileLink.getAttribute('href')
        console.log(profileLink_1)
        expectchai(profileLink_1).to.equal("/users/1")

    });
    it('Hover on second profile', async() => {
        await url.open()
        const profile_2 = await $("#content>div>div:nth-child(4)>img")
        await profile_2.moveTo()
        const profileLink2=await $('//*[@id="content"]/div/div[2]/div/a') 
        await profileLink2.waitForDisplayed({timeout:8000})
        const profileLink_2=await profileLink2.getAttribute('href')
        console.log(profileLink_2)
        expectchai(profileLink_2).to.equal("/users/2")
    });
    it('Hover on third profile', async() => {
        await url.open()
        const profile_3 = await $("#content > div > div:nth-child(5) > img")
        await profile_3.moveTo()
        const profileLink3=await $('//*[@id="content"]/div/div[3]/div/a') 
        await profileLink3.waitForDisplayed({timeout:8000})
        const profileLink_3=await profileLink3.getAttribute('href')
        console.log(profileLink_3)
        expectchai(profileLink_3).to.equal("/users/3")
    });
});