const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')

 var db_config ={
     host: 'localhost',
     user: 'root',
     passwor: 'MySQL', //CAMBIAR ESTA CONTRASEÑA
     port: 3306,
     database: 'users'
 }



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
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    password:{
        type: Sequelize.STRING
    }
})


Users.sync()

function addUser(){
    console.log("BOTON APACHADO")
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

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

    
}

function checkUser(){
    var email = document.getElementById('email').value;
    var passwd = document.getElementById('passwd').value;

    Users.count({where: {email: email, password: passwd}}).then(c => {
        if(c == 0){
            throw error;
        }
        else{
            console.log("ALV")
            console.log(c)
            alert("Bienvenido.")
            window.location="../html/mainmenu.html"
        }
        return c
    }).catch(err => {
        window.location="../html/login.html"
        alert("Usuario no registrado.")
        return err;
    })
    
}

document.getElementById("Submit").onClick = addUser();
document.getElementById("signIn").onClick = checkUser();

