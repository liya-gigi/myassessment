const expectchai=require('chai').expect
describe('file upload', () => {
    it('upload a file', async () => {
        await browser.url("https://the-internet.herokuapp.com/upload");
        const fileUpload = await $("#file-upload");
        const uploadBtn = await $("#file-submit");
        const filePath = 'C:\Users/liya/Desktop/The Internet_files/forkme_right_green_007200.png';
        const remoteFilePath = await browser.uploadFile(filePath);
        await fileUpload.setValue(remoteFilePath);
        await uploadBtn.click();
        const message=await $("#content > div > h3")
        const msg=await message.getText()
        expectchai(msg).to.equals("File Uploaded!")

//         const path = require('path');
// const filePath = path.join(__dirname, 'C:\Users\liya\Desktop\The Internet_files\forkme_right_green_007200.png');
// await fileUpload.setValue(filePath);
// await uploadBtn.click();
    });
});