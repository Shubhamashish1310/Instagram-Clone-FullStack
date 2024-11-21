import { checkUserExists } from "../Services/userService.js";
import { verifyJwtToken } from "../Utils/jwt.js";

export async function authMiddleware(req, res, next) {
    // Retrieve the token from the Authorization header
    const authHeader = req.headers['authorization']; // Bearer <token>
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided or invalid format.'
        });
    }

    const token = authHeader.split(' ')[1]; // Extract the actual token

    // Verify the token
    try {
        const decoded = verifyJwtToken(token);
        const doesUserExist = await checkUserExists(decoded.email);
        if (!doesUserExist) {
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


export async function isAdminMiddleware(req, res, next) {
    if (req.user.role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: 'Access denied. You are not an admin.',
        });
    }
    next();
}
