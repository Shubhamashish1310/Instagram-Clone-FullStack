import { signupUserService } from "../Services/userService.js";

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