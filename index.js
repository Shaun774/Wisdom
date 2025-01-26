import express from "express";
import axios from "axios";

let app = new express;
app.set('view engine','ejs');
app.use(express.static('public'));

app.get("/",async(req,res)=>{
    let result = await axios.get("https://api.adviceslip.com/advice");
    let data = result.data;
    let snippet = data.slip.advice ;  // It is a nested object
    res.render("index.ejs",{advice:snippet});
})

app.listen(3000,()=>{
    console.log("App running on port 3000....")
})