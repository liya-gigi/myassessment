const Contactcard = require('../pageobjects/contactcard')
const Login = require('../pageobjects/anywhereloginpage')
const logindetails = require("../../testdata/logindetails")
const Collab = require('../pageobjects/collabaddremove')

describe('contact card details', () => {
    it('check first option chat with the contact', async () => {
        await Login.siginurl();
        await Login.getLoginDetails(logindetails.username, logindetails.password);
        await Contactcard.selectTheCollab();
        //await Collab.addMemberFromCollabContactCard();
        await Contactcard.contactCardDetails();
        await Contactcard.chatWithAContact();

    });
    it('check for third option remove from collab', async () => {
        await Contactcard.selectTheCollab();
        await Contactcard.contactCardDetails();
        await Collab.removeMemberFromCollabContactCard();

    });



});