import express from "express";

const PORT =5999;

const app = express();


app.get('/shubham',(req,res)=>{
    return res.json({msg:"2",
        id:"0",
        name:"ShubhamAshish",
        child:"0"
    })
});
app.post('/shubham',(req,res)=>{
    return res.json({
        post:"software engineer"
    })
})





app.listen(PORT,()=>{
    console.log(`Listening at PORT ${PORT}`)
})