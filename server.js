require('dotenv').config();
const express = require('express')
const bcrypt = require('bcrypt')
const route = require('./config/route');


require('./config/mongoose')
const app = express();

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}));

app.use(express.json())

app.use(express.static('public'))

app.use(route)



let port = 3330
app.listen(port, ()=> console.log(`app is on ${port}`));