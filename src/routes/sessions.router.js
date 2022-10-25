import { Router } from "express";
import User from "../dao/MongoDAO/User.js";
import { isValidPassword, createHash } from "../utils.js";
import passport from 'passport'; 
const router = Router();
const userService = new User()


router.post('/register', passport.authenticate('register',{ failureRedirect:'registerfail'}), async (req, res) => {
     res.send({success: true, payload:  req.user})
})

router.get('/registerfail', (req,res)=>{
    res.status(500).send({status:'error', error:"error"})
})

router.post('/login', passport.authenticate('login',{failureRedirect:'loginfail'}), async (req, res) => {
    req.session.user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }  
    res.status(200).send({success: true, payload: req.session.user})
     
})

router.get('/loginfail',(req,res)=>{
    res.status(500).send({status:"error",error:"Error in login "})
})

router.get('/logout', async (req,res)=>{
	req.session.destroy(err=>{
		if(!err) res.send({success: true, payload: 'log out'})
		else res.send({status: 'Logout ERROR' ,body:err})
	})
})





export default router;