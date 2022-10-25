import { Router } from "express";


const router = Router();
let user ; 

router.get('/current',  async (req, res)=>{  
    user = req.session.user 
    if (!user) res.redirect ('login')
    res.render('products', {user: req.session.user})
   
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

router.get('/info',  (req, res)=>{  
 
    const info = {
        execPath: process.execPath,
        argv: process.argv.slice(2),
        cwd: process.cwd(),
        pid: process.pid,
        version: process.version,
        platform: process.platform,
        memoryUsage: process.memoryUsage().rss
    }
    res.render('info', {info})
})



export default router;