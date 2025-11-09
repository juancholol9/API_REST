const authService = require('../services/auth.services')

const signupGet = (request, response) => {
    response.send("Sign up get")
}

const signupUser = async (request, response) => {
    // const {full_name, email, password_hash, phone, role} = request.body
    const data = request.body
    try {
        const user = await authService.create(data)
        response.status(201).json(user)
    } catch (error) {
        console.log(error.message)
        const errorMessage = error.message
        response.status(400).json( {error : errorMessage.slice(7).trim()});
    }
    console.log("sign up post")
    // response.send("Sign Up Post")
}

const loginGet = (request, response) => {
    response.send("Login Get")
}


const loginUser = (request, response) => {

    const {full_name, email, password_hash, phone, role} = request.body
    console.log(full_name, email, password_hash, phone, role)
    response.send("Login Post")
}

module.exports = {
    signupGet,
    signupUser,
    loginGet,
    loginUser
}