
class Login{
    async siginurl() { 
        await browser.url('https://alpha2.anywhereworks.com/')
    }
    async getLoginDetails(emailid,password) {
        const emailAddress= await $('#user-email')
        const passWord=await $('#user-password')
        const loginBtn=await $('#process-login')
        await emailAddress.waitForDisplayed({timeout:8000});
        await emailAddress.setValue(emailid)
         await passWord.waitForDisplayed();
         await passWord.setValue(password)
         await loginBtn.click()
     }
}
module.exports=new Login();