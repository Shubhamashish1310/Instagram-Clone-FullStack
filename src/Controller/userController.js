import { loginUserService, signupUserService } from "../Services/userService.js";

export async function signUpController(req, res) {
    try {
        const user = await signupUserService(req.body);
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user
        })
    } catch (error) {
        console.log(error);
        if(error.status===409) {
            return res.status(409).json({
                success: false,
                message: 'User already exists',
                data: error
            })
            
        }
        res.status(500).json({
            success: false,
            message: 'Failed to create user in userController',
            data: error
        })
    }
}


export async function loginController(req, res) {
    try {
        const token = await loginUserService(req.body);
        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data: token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Failed to login user in userController',
            data: error
        })
    }
}