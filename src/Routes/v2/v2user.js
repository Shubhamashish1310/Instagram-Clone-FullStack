import express from "express";
import { signUpController } from "../../Controller/userController.js";
import { validate } from "../../validator/zodValidator.js";
import { zodUserSignupSchema } from "../../validator/zodUserSignup.js";


const router = express.Router();


router.get("/user", (req, res) => {
    res.send('Hello World! checking v2 post');
})

router.post('/signup',validate(zodUserSignupSchema), signUpController)


export default router