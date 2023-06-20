const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");                  //helps to connect this api with react(frontend);
require("dotenv").config();

// Middleware
app.use(express.json());     //helps to parse data requested from body
app.use(cors());

mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@ac-zzcbs4v-shard-00-00.3dx29m9.mongodb.net:27017,ac-zzcbs4v-shard-00-01.3dx29m9.mongodb.net:27017,ac-zzcbs4v-shard-00-02.3dx29m9.mongodb.net:27017/Mern-Basics?ssl=true&replicaSet=atlas-nzrpt2-shard-0&authSource=admin&retryWrites=true&w=majority`
).then(() => console.log("Connection Suceessful"));

app.get("/getUsers", async(req, res) => {
    const userData = await UserModel.find();
    res.status(201).json(userData)
})

app.post("/createUser", async(req, res) => {
    const userData = new UserModel(req.body);
    const user = await userData.save();
    res.status(201).json(user);
})

app.listen(5000, () => {
    console.log("Server Running Perfectly");
})
