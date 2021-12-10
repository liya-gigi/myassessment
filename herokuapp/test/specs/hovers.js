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
        await profileLink.click()
        await expect(browser).toHaveUrlContaining("/users/1")


    });
    it('Hover on second profile', async() => {
        await url.open()
        const profile_2 = await $("#content>div>div:nth-child(4)>img")
        await profile_2.moveTo()
        const profileLink2=await $('//*[@id="content"]/div/div[2]/div/a') 
        await profileLink2.waitForDisplayed({timeout:8000})
        await profileLink2.click()
        await expect(browser).toHaveUrlContaining("/users/2")
        
    });
    it('Hover on third profile', async() => {
        await url.open()
        const profile_3 = await $("#content > div > div:nth-child(5) > img")
        await profile_3.moveTo()
        const profileLink3=await $('//*[@id="content"]/div/div[3]/div/a') 
        await profileLink3.waitForDisplayed({timeout:8000})
        await profileLink3.click()
        await expect(browser).toHaveUrlContaining("/users/3")
        
    });
});