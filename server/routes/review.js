const express = require('express')
const app = express()
const cors = require('cors')
const reviewModel = require('../models/userReview')

app.use(cors())
app.use(express.json())

app.post('/api/review', (req, res) => {
    res.json({ status: 'ok' })
    try{
        const {email, review}  = req.body;

        const feedback = new reviewModel({
            email, review
        })
        console.log(email)
        feedback.save();
    }
    catch(e){
        res.status(400).send("Invalid Details")
    }

})

app.get("/api/getreview", async (req, res) => {
    try {
      const reviews = await reviewModel.find().exec();
      res.json({
        success: true,
        reviews,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  });
module.exports=app;