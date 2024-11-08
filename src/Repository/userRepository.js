
import user from "../Schema/user.js";

export async function findUserbyEmail(email) {
    try {
      const newUser = await user.findOne({email});
      return newUser;  
    } 
    catch (error) {
        console.log(`there is error in get user by email repository in user repository ${error}`)
        throw error
    }
}

export async function getUser() {
    try {
      const user = await user.find();
      return user;  
    } 
    catch (error) {
        console.log(`there is error in get user ${error}`)
    }
}


// create user
export async function createUser(User) {
    try {
      const newUser = await user.create(User);
      return newUser;  
    } 
    catch (error) {
        console.log(`there is error in create user in user repository ${error}`)
        throw error
    }
}

