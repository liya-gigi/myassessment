
class Drag{
    
    async dragging(){
        const draggable=await $("#draggable")
        const droppable=await $("#droppable")
        await draggable.waitForDisplayed();
        await draggable.dragAndDrop({x:303,y:62}) 
          
    }
}

module.exports = new Drag();
