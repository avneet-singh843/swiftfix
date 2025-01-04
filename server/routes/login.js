const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const model = require('../models/user.model')

app.use(cors())
app.use(express.json())

app.post('/api/register', (req, res) => {
    res.json({ status: 'ok' })
    try{
        const {name , email, password}  = req.body;

        const user = new model({
            name, email, password
        })
        user.save();
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }

})
module.exports=app;