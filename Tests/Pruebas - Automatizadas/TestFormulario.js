const webdriver=require('selenium-webdriver');
const chrome=require('selenium-webdriver/chrome');
const chromedriver=require('chromedriver');

var assert = require('assert');

const startAddingFormulario = (numeroFormulario, fecha, semana, mes, codigoOperador, codigoProducto, codigoPrensa, cargasProgram, productoDefecto, buenEstado, totalCargas, cargasFaltantes) => ({
    type: 'FORMULARIO_ADD_STARTED',
    payload: {
        numeroFormulario,
        fecha,
        semana,
        mes,
        codigoOperador,
        codigoProducto,
        codigoPrensa,
        cargasProgram,
        productoDefecto,
        buenEstado,
        totalCargas,
        cargasFaltantes
    },
});

const completeAddingFormulario = (oldnumeroFormulario, formulario) => ({
    type: 'TOURNAMENT_ADD_COMPLETED',
    payload: {
        oldnumeroFormulario,
        tournament,
    },
});

const failAddingFormulario = (oldnumeroFormulario, error) => ({
    type: 'FORMULARIO_ADD_FAILED',
    payload: {
        oldnumeroFormulario,
        error,
    },
});

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var driver = new webdriver.Builder()
                 .withCapabilities(webdriver.Capabilities.chrome())
                 .build();

driver.get("http://localhost:8080"); 

var promise = driver.getTitle();

promise.then(function(title) 

{

console.log(title);


});


