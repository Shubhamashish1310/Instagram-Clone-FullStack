import express from 'express';
import { connectDB } from './Config/dbConfig.js';
import postRoutes from './Routes/postRoutes.js';
import { authMiddleware } from './Middlewares/authMiddleware.js';


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use('/api', postRoutes );

app.get('/',authMiddleware ,(req, res) => {
    console.log(req.user);
    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    connectDB();
});
