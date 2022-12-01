import { Router } from "express";


const router = Router();
let user ; 

router.get('/home',  async (req, res)=>{  
    user = req.session.user 
    if (!user) res.redirect ('login')
    res.render('home', {user: req.session.user})
   
})

router.get('/register',  (req, res)=>{   
    res.render('register')
})

router.get('/login',  (req, res)=>{   
    res.render('login')
})

router.get('/logout',  (req, res)=>{  
    if( !user)  res.redirect ('login')
    res.render('logout', {user})
})

router.get('/',(req,res)=>{
    res.redirect ('./home')
})


export default router;