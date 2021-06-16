const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://teste:nnn@nodejscluster-art2k.mongodb.net/test?retryWrites=true');


mongoose.connection.on('connected', function () {
  console.log('Connected to Database' +'teste');
});


mongoose.connection.on('error', (err) => {
  console.log('Database error' +err);
});

var USERS = [
    {'id':1, 'username': 'brunohauck', 'password': '123456'},
    {'id':2, 'username': 'wallace', 'password': '123456'},
]

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