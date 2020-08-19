const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const admin = require('./routes/admin') //라우팅
const contact = require('./routes/contants') //라우팅

app.use(logger('dev')) //morgan (서버 동작 console.log)

app.use(bodyParser.json()) //post 요청 처리
app.use(bodyParser.urlencoded({extended:false})); //post 요청 처리

app.use('/uploads',express.static('uploads')) //정적파일 구동

function firstMiddleWare(req,res,next){
    console.log('최우선미들웨어')
    next();
}

nunjucks.configure('template',{ //html 템플릿 구동
    autoescape: false,
    express:app
})

app.use( (req, res, next) => {
    app.locals.isLogin = false;
    next();
});

app.use('/admin',firstMiddleWare,admin);
app.use('/contact',contact);



app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use( ( req , res, _ ) => {
    res.status(404).render('common/404.html')
});

// 500
app.use( (err, req, res,  _ ) => {
    res.status(500).render('common/500.html')
});


app.listen(port, () => console.log(`Example app listening on port port!`))