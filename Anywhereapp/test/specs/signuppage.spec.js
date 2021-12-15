const Login=require('../pageobjects/anywhereloginpage')
//const logindetails =require('../../testdata/logindetails') 
const logindetails=require("../../testdata/logindetails")

describe('signup page', () => {
    it('login using valid credentails', async() => {
        await Login.siginurl();
        
        await Login.getLoginDetails(logindetails.username,logindetails.password);
        //await Login.login("liya@mailinator.com","test123123");
    });
});