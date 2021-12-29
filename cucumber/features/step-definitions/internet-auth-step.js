
const {Given,When,Then}=require('@wdio/cucumber-framework')
const Internetwebsite =require('../pageobjects/internetauthpage')


Given(/^I am on the login page$/,async()=>{
    await Internetwebsite.openWebsite();

});
When(/^I enter the (\w+) and (.+)$/,async(username,password)=>{
    await Internetwebsite.login(username,password);
});
Then(/^I should see a flash message as (.*)$/, async(message)=>{
    await Internetwebsite.flashMessage(message);
});