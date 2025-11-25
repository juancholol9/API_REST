const authRepository = require('../repository/auth.repository')

const create = async (data) => {
    try {
        const user = await authRepository.create(data);
        console.log("Create service")
        return user || [];
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    create
}