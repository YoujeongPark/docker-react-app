const express = require('express');//express 모듈 가져오기.
const app = express();//Express 객체 생성
const port = 3000;

app.get('/',(req,res) => {
    res.send("Hello Express!");
});

app.listen(port,()=>{
    console.log("Express server on port 3000!");
});
