
const Drag = require('../pageobjects/dragdrop')
describe('Drag and drop', () => {
    it('Drag to droppable', async() => {
        await browser.url("https://demoqa.com/droppable")
        await Drag.dragging();
        await browser.saveScreenshot("drag.png")
        
    });
});