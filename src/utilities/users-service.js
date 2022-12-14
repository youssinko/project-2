import * as usersAPI from "./users-api"
export async function signUp(userData){
     // The promise returned by the signUp service method
  // will resolve to the user object included in the
  // payload of the JSON Web Token (JWT)
    const token =await usersAPI.signUp(userData)
    return token

}