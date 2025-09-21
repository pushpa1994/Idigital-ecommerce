import {Router} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import user from '../models/userSchema.js'

const router = Router();

router.post("/register",async(req, res)=>{
    try {
        const userExists = await user.findOne({email: req.body.email});
        console.log(userExists);
        if(userExists){
            return res.send({
                success: false,
                message: "user already exists"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        const newUser = await user(req.body);
        await newUser.save();
        res.send({
            success: true,
            message: " user has been ceated"
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        })
        
    }
})

router.post("/login", async(req,res)=> {
    const User = await user.findOne({email: req.body.email});
    if(!User){
        return res.status(400).send({
            success: false,
            message: "user could not be found"
        })
    }
    const validPassword = await bcrypt.compare(req.body.password, User.password);
    if(!validPassword){
        return res.status(400).send({
            success: false,
            message: "invalid Password"
        })
    }
    const token = jwt.sign({
        userId: User._id,
        name: User.name,
        email: User.email
    },"Idigital-spotify",{expiresIn: '20d'});
    res.status(200).send({
        success: true,
        message: "user loggedIn",
        data: token
    })
})

export default  router;