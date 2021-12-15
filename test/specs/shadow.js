
    describe('Verify Downloads', () => {
        it('Validate downloads page header text', async () => {
            await browser.url(`chrome://downloads/`);
            await expect($('body > downloads-manager')).toBeExisting();
            await expect($('>>>#leftSpacer h1')).toHaveTextContaining('aownloads');
        });
    });
