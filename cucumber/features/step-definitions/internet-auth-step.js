import {Given,When,Then} from '@wdio/cucumber-framework'
import Internetwebsite from '../pageobjects/internetauthpage'

Given(/^I am on the login page$/,async()=>{
    await Internetwebsite.openWebsite();

});
When(/^I enter the (\w+) and (.+)$/,async()=>{
    await Internetwebsite.login(username,password);
});
Then(/^I should see a flash message saying (.*)$/, async()=>{
    await Internetwebsite.flashMessage()
})