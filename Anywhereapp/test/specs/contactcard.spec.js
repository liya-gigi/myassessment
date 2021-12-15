const Contactcard = require('../pageobjects/contactcard')
const Login=require('../pageobjects/anywhereloginpage')
const logindetails=require("../../testdata/logindetails")

describe('contact card deatils', () => {
    it('check first option chat with the contact', async() => {
        await Login.siginurl();
        await Login.getLoginDetails(logindetails.username,logindetails.password)
        await Contactcard.selectTheCollab();
        await Contactcard.contactCardDetails();
        await Contactcard.chatWithAContact();

    });
});