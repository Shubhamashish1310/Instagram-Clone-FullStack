import { createUser, findUserbyEmail } from "../Repository/userRepository.js";
import bcrypt from 'bcrypt';
import { generateJwtToken } from "../Utils/jwt.js";
export async function signupUserService(user) {
    try{
        const newUser = await createUser(user);
    return newUser;
    }
    catch(error){
        if(error.code === 11000 && error.name === "MongoServerError" ) {
            //something was alredy present in the database
            throw{
                status: 409,
                message:"User already exists"
            }   
        }
      throw error
    }
}


export async function loginUserService(userDetails) {
    try{
        //chcek if there is valid registed user
        const user = await findUserbyEmail(userDetails.email);
        if(!user){
            throw{
                status: 401,
                message:"User not found"
            }
        }

        //check if password is correct
        const isPasswordCorrect =  bcrypt.compareSync(userDetails.password, user.password);
        if(!isPasswordCorrect){
            throw{
                status: 401,
                message:"Invalid password"
            }
        }

       const token = generateJwtToken({email: user.email, id: user._id, username: user.username});
       return token;
    }
    catch(error){
        throw error;
    }
}


//check if user exist service layer

export async function checkUserExists(email) {
    try{
        const user = await findUserbyEmail(email);
        return user;
    }
    catch(error){
        throw error;
    }
}
