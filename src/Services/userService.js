import mongoose from "mongoose";
import { createUser } from "../Repository/userRepository.js";

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
