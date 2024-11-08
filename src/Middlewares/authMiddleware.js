import { checkUserExists } from "../Services/userService.js";
import { verifyJwtToken } from "../Utils/jwt.js";

export async function authMiddleware(req, res, next) {
    //if jwt passed in the header
    const token = req.headers['authorization']; // Bearer <token>
    if(!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided.'
        });
    }
    //verify the token
    try {
        const decoded = verifyJwtToken(token);
        const doesUserExist = await checkUserExists(decoded.email);
        if(!doesUserExist) {
            return res.status(401).json({
                success: false,
                message: 'Access denied. Invalid token.'
            });
        }
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. Invalid token.'
        });
    }
}