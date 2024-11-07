import express from "express";
import { loginController, signUpController } from "../../Controller/userController.js";
import { validate } from "../../validator/zodValidator.js";
import { zodUserSignupSchema } from "../../validator/zodUserSignup.js";
import { zodUserLoginSchema } from "../../validator/zodUserLoginSchema.js";


const router = express.Router();


router.get("/user", (req, res) => {
    res.send('Hello World! checking v2 post');
})

router.post('/signup',validate(zodUserSignupSchema), signUpController)
router.post('/login',validate(zodUserLoginSchema), loginController)

export default router