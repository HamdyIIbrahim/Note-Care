const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Note = require("./models/note");
const port = process.env.PORT || 5000;
const User = require('./models/user');
const bcrypt = require('bcrypt');

const saltRounds = 10;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://MyBlog:0MVis9VgS2cA6KFa@ac-gkk8uf6-shard-00-00.4havili.mongodb.net:27017,ac-gkk8uf6-shard-00-01.4havili.mongodb.net:27017,ac-gkk8uf6-shard-00-02.4havili.mongodb.net:27017/?ssl=true&replicaSet=atlas-f0s2s6-shard-0&authSource=admin&retryWrites=true&w=majority",{
    serverSelectionTimeoutMS: 5000 
}).then(() => {
    console.log("connected");
}).catch(() => {
    console.log("can't connect");
});

app.get("/", (req, res) => {
    console.log("welcome from homw page");
});
app.post("/createnote", async (req, res) => {
    const { title, content } = req.body;
    const noteDoc = await Note.create({
        title,
        content,
    });
    res.json({ noteDoc });
});

app.post("/signup",async (req,res)=>{
    const {email ,password}=req.body;
    try {
        const userDoc = await User.create({
            email,
            password:bcrypt.hashSync(password, saltRounds),
        })
    } catch (error) {
        res.status(400).json(error)
    }
})
app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    await  User.findOne()

})

app.listen(port);
//0MVis9VgS2cA6KFa
