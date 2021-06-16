const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
mongoose.connect(‘mongodb+srv://test:nnn@nodejscluster-art2k.mongodb.net/test?retryWrites=true’);
// Confirma ligação na consola
mongoose.connection.on(‘connected’, function () {
  console.log(‘Connected to Database ‘+’test’);
});
// Mensagem de Erro
mongoose.connection.on(‘error’, (err) => {
  console.log(‘Database error ‘+err);
});

var HELLO = [
    { 'msg': 'Hello Express' }
];

function getHello(){
    return HELLO;
}

function getUsers(){
    return USERS;
}

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(getHello());
});

const userRouter = require('./src/routes/user-route');

app.use('/user', userRouter);

app.listen(4000, function(){
    console.log('Hello Express Listen on Port 4000');
});