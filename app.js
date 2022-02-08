const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const {create_user, getAll}= require('./controller/users')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const config = dotenv.config(path.join(__dirname, '.env'))

const port = process.env.port

const db = require("./models");
db.sequelize.sync();

app.get('/getall', (req, res) => {
    getAll(req, res)
})

app.post('/create', (req, res) => {
    create_user(req, res)
})

app.listen(port, ()=> {
    console.log('app started on port: ' + port)
})
