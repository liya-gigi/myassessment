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
  async flashMessage() {
    const message = await $("#flash");
    expect(message).toBeExisting();
    expect(message).toHaveTextContaining(message);
  }
}
module.exports= new Internetwebsite();
