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

app.get("/", async (req, res) => {
    const allNotes = await Note.find();
    res.json({allNotes});
});
app.get("/editenode/:id", async (req, res) => {
    const Id = req.params.id;
    const note = await Note.findById(Id).exec();
    res.json({note});
});
app.put("/editenode/:id", async (req, res) => {
    const {title,content} =req.body;
    const Id = req.params.id;
    const note = await Note.findByIdAndUpdate(Id,{title:title,content:content});
    res.json({note});
});
app.post("/createnote", async (req, res) => {
    const { title, content ,selector,cuurentDate } = req.body;
    const noteDoc = await Note.create({
        title,
        content,
        background:selector,
        date:cuurentDate
    });
    res.json({ noteDoc });
});

app.post("/signup",async (req,res)=>{
    const {email ,password}=req.body;
    try {
        await User.create({
            email,
            password:bcrypt.hashSync(password, saltRounds,req.Users._id),
        })
        
    } catch (error) {
        res.status(400).json(error)
    }
})
app.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    const userDoc =await  User.findOne({email});
    const passOk=bcrypt.compareSync(password, userDoc.password);
    res.json({passOk})

})


app.listen(port);
//0MVis9VgS2cA6KFa
