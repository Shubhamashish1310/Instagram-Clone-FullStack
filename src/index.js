import express from 'express';
import { connectDB } from './Config/dbconfig.js';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/test', (req, res) => {
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