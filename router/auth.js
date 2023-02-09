const express = require("express");
const router = express.Router();
const User = require("../model/userSchema")

router.get("/",(req,res)=>{
   res.send("Router Page");
})



//contact form
router.post("/registerdata", async (req,res)=>{
const {name,email,phone,text} = req.body;
if(!name || !email || !phone || !text) {
    res.status(422).json({message: "please fill the data"});
}
try{
   const userExist =  await User.findOne ({email:email});
   if(userExist){
    res.status(422).json({message: "email already exist"});
   }else {
    const entry = await new User({name,email,phone,text});
    await entry.save();
    if(entry){
        res.status(201).json({message: "user registered successfully"});
        console.log(entry);
    }else{
        res.status(422).json({message: "not registered"})
    }
   }
    
   
}catch(err){
      console.log(err);
      res.status(500).json({err: "internal server erros"});
}
  
})



module.exports = router;