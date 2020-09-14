const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')
const nodemailer = require('nodemailer')
var Dialogs = require('dialogs')
const dialogs = Dialogs()

//Generacion de codigo de 7 digitos
var vCode = Math.floor((Math.random() * 9999999) + 1000000);

//Transportador de correo
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jaandresperez4556@gmail.com',
        pass: ''
    }
})

 var db_config ={
     host: 'localhost',
     user: 'root',
     passwor: 'MySQL', //CAMBIAR ESTA CONTRASEÑA
     port: 3306,
     database: 'users'
 }
/*
//Renato Estrada base de datos, Hola123@
var db_config ={
    host: 'localhost',
    user: 'root',
    passwor: 'Hola123@', //CAMBIAR ESTA CONTRASEÑA
    port: 3306,
    database: 'prensas'
}
*/


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

const Users = sequelize.define('Usuario',{
    first_name:{
        type: Sequelize.STRING
    },
    last_name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: false
    }
})


Users.sync()

//Mandando email
Users.count().then(c => {
    if(c == 0){
        dialogs.alert('El codigo de verificacion es: ' + vCode)
    }
    if(c >= 1){
        var adMail = Users.findOne({where: {first_name: 'admin'}}).then(c =>{
            dialogs.alert('Email enviado a: ' + c.email)
        
            var mailOptions = {
                from: 'per16362@uvg.edu.gt',
                to: c.email,
                subject: 'Codigo de Verificacion',
                text: 'El codigo de verificacion es: ' + vCode
            }
            
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    console.log(error);
                }else{
                    console.log('Email enviado a: ' + info.response)
                    
            
                }
            });
            
        });
    }
})



Users.count({where: {firstName: 'admin'}}).then(c => {
    if(c >= 1){
        

    }else{
        alert("Por favor, ingrese un administrador")
        window.location="../html/SignUp.html"
    }
})

function addUser(){
    console.log("BOTON APACHADO")
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cod = document.getElementById('codigo').value;


    if(vCode == parseInt(cod)){    

        Users.count({where: {email: email}}).then(c => {
            if(c == 0 && firstName != "" && lastName != "" && email != "" && password != ""){
                Users.create({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                    type: 'admin'
                });
                alert("Usuario creado con exito.")
                window.location="../html/login.html"
            }
            else{
                throw error
            }
            return c
        }).catch(err => {
            return err;
        })
    }else{
        //window.location="../html/SignUp.html"
    }
}







document.getElementById("Submit").onClick = addUser();

