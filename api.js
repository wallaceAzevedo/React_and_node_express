const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const cors = require('cors');

mongoose.connect('mongodb+srv://teste:nnn@nodejscluster-art2k.mongodb.net/test?retryWrites=true');


mongoose.connection.on('connected', function () {
  console.log('Connected to Database' +'teste');
});


mongoose.connection.on('error', (err) => {
  console.log('Database error' +err);
});

app.use(bodyParser.json());
app.use(cors());
app.use(expressJwt({secret: 'FDSFDSFDSFDSFDS'}).unless({path: ['/auth', '/auth/login', '/product']}));

app.get('/', function(req, res){
    res.send(getHello());
});

const authRouter = require('./src/routes/auth-route');
app.use('/auth', authRouter);

const userRouter = require('./src/routes/user-route');
app.use('/user', userRouter);

const productRouter = require('./src/routes/product-route');
app.use('/product', productRouter);

app.listen(4000, function(){
    console.log('Hello Express Listen on Port 4000');
});