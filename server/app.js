const express = require('express');//express 모듈 가져오기.
const app = express();//Express 객체 생성
const cors = require('cors')

const port = 4000;
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let info = [
    {
        "fruit": "Apple",
        "size": "Large",
        "color": "Red"
    }
]

app.get('/', (req, res) => {
    res.json(info);
});

app.listen(port, () => {
    console.log("Express server on port 3000!");
});
