describe('using the drag and drop', () => {
    it('should work as expected dammit', () => {
        browser.url('https://jqueryui.com/droppable/')

        // const iframe = $('iframe.demo-frame')
        // iframe.waitForExist()
        // browser.switchToFrame(iframe)

        const draggable = $("//div[@id='draggable']")
      
      const droppable =$("//div[@id='droppable']")
      draggable.waitForDisplayed()
      droppable.waitForDisplayed()
      draggable.dragAndDrop(droppable)
      browser.pause(5000)
        browser.saveScreenshot("screenshot4.png")
    });
});