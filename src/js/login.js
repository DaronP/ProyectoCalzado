const Sequelize = require('sequelize')
var Dialogs = require('dialogs')
const dialogs = Dialogs()


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

function checkUser(){
    var email = document.getElementById('email').value;
    var passwd = document.getElementById('passwd').value;

    Users.count({where: {email: email, password: passwd}}).then(c => {
        if(c == 0){
            throw error;
        }
        else{
            console.log("done.")
            console.log(c)
            alert("Bienvenido.")
            window.location="../html/mainmenu.html"
        }
        return c
    }).catch(err => {
        //window.location="../html/login.html"
        dialogs.alert("Usuario no registrado.")
        return err;
    })
    
}

document.getElementById("signIn").onClick = checkUser();
