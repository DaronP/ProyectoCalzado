const remote = require('electron').remote

const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')
/*
var db_config ={
    host: 'localhost',
    user: 'root',
    passwor: 'MySQL', //CAMBIAR ESTA CONTRASEÑA
    port: 3306,
    database: 'prensas'
}
*/

//Renato Estrada base de datos, Hola123@
var db_config ={
    host: 'localhost',
    user: 'root',
    passwor: 'Hola123@', //CAMBIAR ESTA CONTRASEÑA
    port: 3306,
    database: 'prensas'
}

// var db_config = {
//     host: 'localhost',
//     user: 'groot',
//     passwor: '7654321.', //CAMBIAR ESTA CONTRASEÑA
//     port: 3306,
//     database: 'prensas'
// }

var sequelize = new Sequelize('mysql://'+db_config.user+':'+db_config.passwor
+'@'+db_config.host + ':' + db_config.port + '/' + db_config.database + '')

sequelize.authenticate().then(()=>{
    console.log('=========================================')
    console.log('database : ' + db_config.database + 'connected')
    console.log('=========================================')


}).catch((err) => {
    console.log('=========================================')
    console.log('error connecting : ' + err)
    console.log('=========================================')
})

const Vulcanizados = sequelize.define('vulcanizado',{
    id: { // numero_formulario
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    operador_id:{
        type: Sequelize.INTEGER
    },
    prensa_id:{
        type: Sequelize.STRING
    },
    producto_id:{
        type: Sequelize.INTEGER
    },
    cargas_program:{
        type: Sequelize.INTEGER
    },
    tiempo_real:{
        type: Sequelize.INTEGER
    },
    tiempo_no_utilizado:{
        type: Sequelize.INTEGER
    },
    buen_estado:{
        type: Sequelize.INTEGER
    },
    semana:{
        type: Sequelize.INTEGER
    },
    mes:{
        type: Sequelize.STRING
    },
    producto_defecto:{
        type: Sequelize.INTEGER
    },
    faltante_cargas:{
        type: Sequelize.INTEGER
    },
    total_cargas:{
        type: Sequelize.INTEGER
    },
    kwh:{
        type: Sequelize.INTEGER
    },
    paro_id:{
        type: Sequelize.STRING
    },
    porcentaje_buen_estado:{
        type: Sequelize.DOUBLE
    },
    porcentaje_cump_total:{
        type: Sequelize.DOUBLE
    },
    cumplimiento_kg:{
        type: Sequelize.DOUBLE
    },
    porcentaje_rebaba:{
        type: Sequelize.DOUBLE
    },
    peso_producido:{
        type: Sequelize.DECIMAL(10,2)
    },
    peso_producir:{
        type: Sequelize.DECIMAL(10,2)
    },
    faltante:{
        type: Sequelize.DECIMAL(10,2)
    },
    rebaba:{
        type: Sequelize.DECIMAL(10,2)
    },
    fecha:{
        type: Sequelize.DATE
    },
    
    //tableName: 'vulcanizado'
    
});


Vulcanizados.sync();


function ingresarFormV(){
    var numeroFormulario = document.getElementById('numero-formulario').value
    var fecha = document.getElementById('fecha').value
    var semana = document.getElementById('semana').value
    var mes = document.getElementById('mes').value
    var codigoOperador = document.getElementById('operador-id').value
    var codigoProducto = document.getElementById('producto-id').value
    var codigoPrensa = document.getElementById('prensa-id').value
    var cargasProgram = document.getElementById('cargas-program').value
    var productoDefecto = document.getElementById('producto-defecto').value
    var buenEstado = document.getElementById('buen-estado').value
    var totalCargas = document.getElementById('total-cargas').value
    var cargasFaltantes = document.getElementById('cargas-faltantes').value
    // fin primera col.
    var porcentajeCumpTotal = document.getElementById('porcentaje_cump_total').value // double
    var porcentajeBuenEstado = document.getElementById('porcentaje_buen_estado').value // double
    var porcentajeRebaba = document.getElementById('porcentaje_rebaba').value // double
    var paroId = document.getElementById('paro').value
    var pesoProducir = document.getElementById('peso_producir').value // decimal
    var pesoProducido = document.getElementById('peso_producido').value// decimal
    var faltante = document.getElementById('faltante').value // decimal
    var rebaba = document.getElementById('rebaba').value // decimal
    var cumplimientoKg = document.getElementById('cumplimiento_kg').value // double
    var tiempoReal = document.getElementById('tiempo_real').value // int
    var tiempoNoUtilizado = document.getElementById('tiempo_no_utilizado').value // int
    var kwh = document.getElementById('kwh').value // int

    if(numeroFormulario != "" && fecha != "" && semana != "" && mes != "" && codigoOperador != "" && codigoProducto != "" && codigoPrensa != "" && cargasProgram != "" && productoDefecto != "" && buenEstado != "" && totalCargas != "" && cargasFaltantes != "" && porcentajeCumpTotal != "" && porcentajeBuenEstado != "" && pesoProducir != "" && pesoProducido != "" && faltante != "" && rebaba != "" && porcentajeRebaba != "" && cumplimientoKg != "" && paroId != "" && tiempoReal != "" && tiempoNoUtilizado != "" && kwh != "")
    {
        Vulcanizados.create({
            numero_formulario : numeroFormulario,
            fecha : fecha,
            semana : semana,
            mes : mes,
            codigo_operador : codigoOperador,
            codigo_producto : codigoProducto,
            codigo_prensa : codigoPrensa,
            cargas_program : cargasProgram,
            producto_defecto : productoDefecto,
            buen_estado : buenEstado,
            total_cargas : totalCargas,
            cargas_faltantes : cargasFaltantes,
            // fin primera col.
            porcentaje_cump_total : porcentajeCumpTotal, // double
            porcentaje_buen_estado : porcentajeBuenEstado, // double
            porcentaje_rebaba : porcentajeRebaba, // double
            paro_id : paroId,
            peso_producir : pesoProducir, // decimal
            peso_producido : pesoProducido,// decimal
            faltante : faltante, // decimal
            rebaba : rebaba, // decimal
            cumplimiento_kg : cumplimientoKg, // double
            tiempo_real : tiempoReal, // int
            tiempo_no_utilizado : tiempoNoUtilizado, // int
            kwh : kwh, // int
        }).then(c => {
            alert("Formulario ingresado")
            location.reload();
        }).catch(function (err){
            console.log(err, "ni idea men")
        })
        
    }
    else
    {
        alert("Uno o mas campos estan vacios.");
        location.reload();
    }
}

document.getElementById("form-button").onClick = ingresarForm;

