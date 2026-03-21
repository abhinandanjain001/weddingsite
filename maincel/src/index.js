const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const collection = require("./config");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, '../loading')));




// ejs ko view engine ki  tarh use karo
app.set('view engine' , 'ejs');


// this is i used because i want to use public file or css in my code

app.get('/',(req , res)=>{
    res.render("login");
})


app.get('/signup' , (req , res)=>{
    res.render("signup");
})

app.post("/signup" , async(req ,res)=>{
    const data = {
        name: req.body.username,
        password:req.body.password
    }

    //check if the user alerady exist in database
    const existinguser = await collection.findOne({name:data.name});

    if(existinguser){
        res.send("user alerady exist. please choose diffrent username");
    }
    else{
        //hash the password using bcrypt so that our password will not easily hacked
        const sailRounds = 10;
        const hashedpassword = await bcrypt.hash(data.password , sailRounds);

           data.password = hashedpassword; // replace the password with the origional password

        const userdata = await collection.insertMany(data);
    console.log(userdata);
    }

    
})

//login user
app.post("/login" , async(req , res)=>{
     try{
        const check = await collection.findOne({name:req.body.username});
        if(!check){
            res.send("user name cannot found");
        }
        
        //compare the hash password from the database with the plain text
        const ispasswordMatch = await bcrypt.compare(req.body.password , check.password);
        if(ispasswordMatch){
            // res.render("home");
            res.sendFile(path.join(__dirname, '../loading/index0.html'));
        }
        else{
            res.send("wrong password");
        }
     } catch{
            res.send("wrong details");
     }
});

const port = process.env.PORT || 5050;
app.listen(port ,()=>{
    console.log(`server running on port ${port}`);
})