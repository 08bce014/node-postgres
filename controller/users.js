const db = require("../models");
const User = db.user;

async function create_user(req, res) {
    await User.create(req.body).then(data => {
        console.log('user created: '+ data)
        res.send("200")
    }).catch(err=> {
        console.log('error creating user'+err)
    })
}

async function getAll(req, res) {
    let users
    await User.findAll().then(data =>{
        console.log("data: "+ JSON.stringify(data))
        res.send(JSON.stringify(data))
    }).catch(err=>{
        console.log(err)
    })
    //return users
}

module.exports = {
    create_user,
    getAll
}