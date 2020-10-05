const test = require('ava');
const Application = require('spectron').Application;
const assert = require('assert');
const electronPath = require('electron');// Require Electron from the binaries included in node_modules.
const path = require('path'); // .proyectocalzado/test.js

var app;
const timeout = 9000;

//Application gets started before Tests
test.before(t => {
    app = new Application({
        path: electronPath,
        args: ['main.js']
    })

    return app.start()
});

//And closed after the Tests
test.after(t => {
    if (app && app.isRunning()) {
        return app.stop()
    }
});

test.failing('HTML was loaded for Login', async t => {
    t.is(await app.client.getTitle(), 'login.html')
});

/*
test('Window was launched', async t => {    
    t.is(await app.client.getWindowCount(), 1)
});



test.failing('HTML was loaded for SignUp', async t => {
    t.is(await app.client.getTitle(), 'SignUp.html')
});

test.failing('HTML was loaded for Salary', async t => {
    t.is(await app.client.getTitle(), 'salary.html')
});

test.failing('HTML was loaded for Main Menu', async t => {
    t.is(await app.client.getTitle(), 'mainmenu.html')
});

test('')
*/


