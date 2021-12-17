const Login=require('../pageobjects/anywhereloginpage')
//const logindetails =require('../../testdata/logindetails') 
const logindetails=require("../../testdata/logindetails")
const credentials=require("../../testdata/credentials.json")
describe('signup page', () => {
    it('login using valid credentails', async() => {
        await Login.siginurl();
        await Login.getLoginDetails(credentials.Person1.username,credentials.Person1.password)
    
    });
});