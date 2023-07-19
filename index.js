//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app=express();
const port=4000;
var authPassword=false;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));

function passwordCheck(req,res,next){
    if(req.body.password=="1234"){
        authPassword=true;
    }
    next();
}

app.use(passwordCheck);

app.get("/",(req,res) =>{

res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res) => {
if(authPassword){
    res.sendFile(__dirname+"/public/secret.html");
}
else{
    res.send("Wrong Password :(");
}

    
});

app.listen(port,() => {
    console.log(`Server running on http://localhost:${port}`);
})
