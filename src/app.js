//Importamos la librería Express
const express = require('express');

//Ejecutamos la función express, obteniendo todas las funcionalidades. app es un objeto
//literal con propiedades y funcionalidades de EXPRESS.
const app = express();

//Importamos el modulo nativo PATH
const path = require('path');

//Levantamos servidor con EXPRESS
app.listen(3030, ()=>{
    console.log("Servidor corriendo en http://localhost:3030");
});

//Configuramos el sistema de ruteo para dar respuesta a las peticiones del cliente
app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/home.html'));// (.) indica donde estas actualmente.
});

app.get('/register',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
})

app.get('/login',function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
})

//Seteamos la ruta a la carpeta de recursos estáticos public
app.use(express.static(path.resolve(__dirname,'../public')));//Con .. voy hacia atrás 1 nivel

