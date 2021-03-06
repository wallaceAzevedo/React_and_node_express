const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/cursoreact',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
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