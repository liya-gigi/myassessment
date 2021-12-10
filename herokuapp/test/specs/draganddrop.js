const Page = require('../pageobjects/page')

class Draganddrop extends Page {
    open() {
        return super.open('drag_and_drop');
    }

}
const dragndrop = new Draganddrop();
describe('Drag and drop', () => {


    it('drag a to b', async () => {
        await dragndrop.open();
        const dragingElement = await $("#column-a")

        const droppingElement = await $("#column-b")
        await dragingElement.waitForDisplayed({timeout:8000});
        await dragingElement.dragAndDrop(droppingElement)
        //await dragingElement.dragAndDrop({ x: 100, y: 200 })

         await browser.saveScreenshot("screenshot3.png")



    });
    // it('drag b to a', async () => {
    //     await dragndrop.open();
    //     const elema = await $("#column-a")

    //     const elemb = await $("#column-b")
    //     await elema.waitForDisplayed();
    //     await elemb.waitForDisplayed();
    //     await elemb.dragAndDrop(elema, 2000)
    //     browser.saveScreenshot("screenshot3.png")

    // });


});