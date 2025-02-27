const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const router = express.Router();
const saltRound = 10;

router.post('/api/signup', async (req, res)=>{
    try{
        //extract from the req body
        const {fullName, email, password} = req.body;
        //check if the user exists in the database
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"user with same name already exists"})
        }else{
            const hashPassword = await bcrypt.hash(password, saltRound);
            let user = new User({fullName, email, password: hashPassword});
            user = await user.save();
            res.json({user});
        }
    }catch(e){
        res.status(500).json({error:e.message});
    }
})

module.exports = router;