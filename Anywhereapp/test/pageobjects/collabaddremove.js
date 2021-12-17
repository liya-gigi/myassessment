class Collab {
    async removeMemberFromCollabContactCard() {
        const contactCard= await $("#contact-card").shadow$('#contact-card > div')
        await contactCard.waitForDisplayed({ timeout:8000})
        const thirdOptionOfCard = await $("#contact-card").shadow$('#contact-card > div > ul > li:nth-child(3)>span')
        await thirdOptionOfCard.waitForDisplayed({ timeout: 12000 })
        await thirdOptionOfCard.click();
        const result = await $("//h6[text()='Liya has removed Aishwarya Nagaraj from this collab']")
        expect(result).toHaveTextContaining('Liya has removed Aishwarya Nagaraj from this collab')

    }
    async addMemberFromCollabContactCard() {
        const moreButton = await $("//div[@id='member-options']/button")
        await moreButton.click();
        const moreOptions = await $("#member-options > ul>li:nth-child(2)>span")
        await moreOptions.click();
        const searchPeople = await $("//input[@placeholder='Search People']")
        await searchPeople.setValue("Aishwarya")
        const profile = await $("//span[text()='Aishwarya Nagaraj']")
        await profile.waitForDisplayed({ timeout: 5000 })
        const addButton = await $("//button[text()='add']")
        await addButton.waitForDisplayed({ timeout: 15000 });
        await addButton.click();
        const result = await $("//h6[text()='Liya has added Aishwarya Nagaraj to this collab']")
        expect(result).toHaveTextContaining('Liya has added Aishwarya Nagaraj to this collab')

    }


}

module.exports = new Collab();


