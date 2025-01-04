require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(cors({
    origin: ["http://localhost:3000", "https://swift-fix.netlify.app"]
}));
console.log(process.env.password)
mongoose.connect(`mongodb+srv://mdkaif2938:${process.env.password}@cluster0.pziez2r.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`success`);
}).catch((e) => {
    console.log(e);
})

const port = process.env.PORT || 1337;

require("./models/user.model");
app.use(require('./routes/login.js'));

require("./models/userReview");
app.use(require('./routes/review.js'));

app.listen(1337, () => {
    console.log('server started on 1337')
})
