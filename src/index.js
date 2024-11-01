import express from 'express';
import { connectDB } from './Config/dbConfig.js';
import { cloudinaryUpload, upload } from './Config/multerConfig.js';
import { postscontroller } from './Controller/postcontroller.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.post('/upload', upload.single('image'), cloudinaryUpload, postscontroller);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    connectDB();
});
