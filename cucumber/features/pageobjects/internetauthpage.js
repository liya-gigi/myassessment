class Internetwebsite {
  async openWebsite() {
    await browser.url("https://the-internet.herokuapp.com/login");
  }
  async login(emailId, password) {
    const userName = await $("#username");
    const passWord = await $("#password");
    const loginBtn = await $(".fa-sign-in");
    await userName.setValue(emailId);
    await passWord.setValue(password);
    await loginBtn.click();
  }
  async flashMessage(displaymessage) {
    const fmessage = await $("#flash");
    await fmessage.waitForDisplayed({ timeout:8000});
     
    await expect(fmessage).toHaveTextContaining(displaymessage);
  }
}
module.exports= new Internetwebsite();
