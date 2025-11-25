const Users = require("../models/users.model")

const create = async (data) => {
    try {
        console.log(data);
        const user = await Users.create(data);
        return user;
    } catch (error) {

        console.log(Object.keys(error), `\n`)

        if(error.name === 'SequelizeUniqueConstraintError'){
            const errorMessage = error.errors[0].message
            throw new Error(errorMessage);
        }

        throw new Error(error);
    }
}

module.exports = {
    create
}