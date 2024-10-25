import express from 'express';
import { connectDB } from './Config/dbconfig.js';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
function m1(req,res,next){
    console.log("m1");
    next();
}
function m2(req,res,next){
    console.log("m2");
    next();
}
function m3(req,res,next){
    console.log("m3");
    next();
}

app.use(m1,m2,m3);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.get('/test', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.json({
        name: 'test',
        age: 18,
        sex: 'male',
        address: 'beijing',
        hobby: ['a', 'b', 'c'],
        info: {
            name: 'test',
            age: 18
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connectDB();
});