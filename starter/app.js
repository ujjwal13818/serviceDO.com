require('dotenv').config();
require("mongoose");
const express = require("express");
const app = express();
const multer = require('multer');
const path = require('path');
const employerData = require('./models/employer');
const seekerData = require('./models/jobseeker');
const port = 3000;
const connectDB = require('./db/connect')
const ejs = require("ejs");
const check = (req , res)=>{
    res.send(`hello`);
}
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.json());
app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:false}))


//making storage where to store resumes.
 var file_name = "";
const storage = multer.diskStorage({
    destination: function(req , file , cb){
        cb(null , path.join(__dirname , './public/uploads'));
    },
    filename: function(req , file , cb){
        cb(null , Date.now() + file.originalname);
         file_name = Date.now() + file.originalname
    }
})

const upload = multer({storage:storage});

app.get('/' , (req,res)=>{
    res.render("lp" , {
    })
})
app.get('/employer' , (req,res)=>{
    res.render("employer" , {
    })
})
app.get('/jobseeker' , (req,res)=>{
    res.render("jobseeker" , {
    })
})
app.get('/login' , (req,res)=>{
    res.render("login" , {
    })
}) 
app.get('/edit' , async(req , res) => {
    seekerData.find({email}).then(data => {
        if(data){
            res.render("edit" , {
                userdata : data
            })
        }
    })
})
app.get('/profile' , (req,res)=>{
    seekerData.find({email}).then(data => {
        if(data){
            res.render("profile" , {
                userdata : data
            })
        }
    })
}) 

app.get('/home' , (req,res) =>{
    seekerData.find({email}).then(data => {
        if(data){
            res.render("home" , {
                userdata : data
            })
        }
    })
})

//form post

app.post('/employer' , async(req,res)=>{
     try{
        const data = {
            id : req.sessionID,
            name:req.body.name,
            email:req.body.email,
            address:req.body.address,
            phone:req.body.phone,
            quantity:req.body.quantity,
            password:req.body.password,
            cpassword:req.body.cpassword,
            skills:req.body.skills,
            salary:req.body.salary,
            gender:req.body.gender
        }
       await employerData.insertMany([data]);
    
       res.redirect("http://localhost:3000/login")   
     } 
     catch(err){
        console.log(err);
     }
})


app.post('/jobseeker' , upload.single('resume'), async(req,res)=>{
    try{
       const seekdata = {
            id : req.sessionID,
           fname:req.body.fname,
           password:req.body.password,
           email:req.body.email,
           address:req.body.address,
           phone:req.body.phone,
           skills:req.body.skills,
           resume: file_name,
           radio : req.body.radio,
           permission: req.body.checkbox,
       }
      await seekerData.insertMany([seekdata])
       res.redirect("http://localhost:3000/login") 
    } 
    catch(err){
       console.log(err);
    }
})

app.post("/login" , async(req , res) =>{
    try {
       let{username , password} = req.body;
       email = username.trim();
       password = password.trim();
       seekerData.find({email}).then(data => {
        if(data){
            const existing = data[0].password
            if(existing === password){
                res.redirect("http://localhost:3000/home");
            }
        }
        else{
            res.send("wrong username or password");
        }
       })
    } catch (error) {
                console.log(error)
    }
})

app.post("/edit" , upload.single('resume') , async(req ,res) => {
       try {
          const _id =  req.body.id
          const updatedData = {
           fname:req.body.fname,
           password:req.body.password,
           email:req.body.email,
           address:req.body.address,
           phone:req.body.phone,
           resume: file_name,
          }
          await seekerData.findOneAndUpdate(_id , updatedData);
          res.redirect("http://localhost:3000/profile");
       } catch (error) {
         console.log(error);
       }
})
const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port , console.log(`app is listening on ${port}...`));
    } catch (err) {
        console.log(err);
    }
}
start();
