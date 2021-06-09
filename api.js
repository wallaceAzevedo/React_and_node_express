const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

var USERS = [
    {'id':1, 'username':'wallaceAzevedo', 'password':'123456'},
    {'id':2, 'username':'henriqueLeite', 'password':'123456'},
];

var HELLO = [
    { 'msg': 'Hello express'}
]

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

app.get('/users', function(req, res){
    res.send(getUsers());
});

app.listen(4000, function(){
    console.log('Hello espress Listen on port 4000');
});