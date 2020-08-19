const aa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(console.log(1))
    }, 1000);

});

aa.then(()=>{
    console.log(2)
})

//resolve 성공시
//reject 에러시 