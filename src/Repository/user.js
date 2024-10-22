import User from "../Schema/userschema";

export async function getUserbyEmail(email) {
    try {
      const user = await User.findOne({email});
      return user;  
    } 
    catch (error) {
        console.log(`there is error in get user by email ${error}`)
    }
}

export async function getUser() {
    try {
      const user = await User.find();
      return user;  
    } 
    catch (error) {
        console.log(`there is error in get user ${error}`)
    }
}