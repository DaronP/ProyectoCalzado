const test = require('ava');
const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')

var app;
const timeout = 9000;

//Application gets started before Tests
test.before(t => {
    app = new Application({
        path: electronPath,
        args: ['main.js'],
        startTimeout: timeout,
        waitTimeout: timeout,
    })

    return app.start()
});

//And closed after the Tests
test.after(t => {
    if (app && app.isRunning()) {
        return app.stop()
    }
}); 

test('Window was launched', async t => {
    t.is(await app.client.getWindowCount(), 1)
});

test('HTML was loaded', async t => {
    t.is(await app.client.getTitle(), 'Title of my HTML-file')
});