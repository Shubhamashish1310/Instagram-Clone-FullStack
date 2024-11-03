import express from 'express';
import { connectDB } from './Config/dbConfig.js';
import postRoutes from './Routes/postRoutes.js';


const app = express();
const port = 3000;

app.use('/api', postRoutes );

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    connectDB();
});
