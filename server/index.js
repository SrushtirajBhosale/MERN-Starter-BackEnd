// sXrLux0IYLlundYY

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");                  //helps to connect this api with react(frontend);

app.use(express.json());     //helps to parse data requested from body
app.use(cors());

mongoose.connect(
    "mongodb+srv://srushtiraj777:sXrLux0IYLlundYY@cluster0.jo8xrxy.mongodb.net/MernPractice"
);

app.get("/getUsers", (req, res) => {
    UserModel.find().then((result) => {
        res.json(result)
    })
})

app.post("/createUser", (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    newUser.save();
})

app.listen(5000, () => {
    console.log("Server Runs Perfectly");
})
