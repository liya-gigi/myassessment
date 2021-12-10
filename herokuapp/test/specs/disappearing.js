const Page=require('../pageobjects/page')
class Disappearing extends Page
{
    open(){
        return super.open('disappearing_elements')
    }
}
const disappearing=new Disappearing()
describe('check for menu items', () => {
    
    it('check for gallery', async() => {
        await disappearing.open()
        const gallery=$("//a[text()='Gallery']")
        
        await expect(gallery).toBePresent()
        await gallery.click()
        
    });
    it('check for home page', async() => {
        await disappearing.open()
        const home=$("//a[text()='Home']")
        await home.click()
        await expect(browser).toHaveTitle("The Internet")
        
    });
});