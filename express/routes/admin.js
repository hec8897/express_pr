const express = require('express')
const router = express.Router();

function firstMiddleWare(req,res,next){
    console.log('최우선미들웨어')
    next();
}

function testMiddleWare2(req,res,next){
    console.log('2미들웨어')
    next();
}



router.get('/', firstMiddleWare,  testMiddleWare2,(req,res)=>{
    res.send('admin..')
})

router.get('/product', (req,res)=>{
    // res.send('admin/product')
    res.render('admin/product.html',{
        message : '<h1>h1태그</h1>'
    })
})

router.get('/product/write',(req,res)=>{
    res.render('admin/write.html')
})

router.post('/product/write',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})



module.exports = router;