const userRepository = require("../repository/users.repository");

const getAll = async () => {
    try {
        const users = await userRepository.getAll();
        return users || [];
    } catch (error) {
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const user = await userRepository.getById(id);
        return user || null;
    } catch (error) {
        throw new Error(error);
    }
}

// const create = async (data) => {
//     try {
//         const user = await userRepository.create(data);
//         return user || [];
//     } catch (error) {
//         // console.log("User Service", error)
//         throw new Error(error);
//     }
// }

const update = async (id, data) => {
    try {
        const user = await userRepository.update(id, data);
        return user || [];
    } catch (error) {
        throw new Error(error);
    }
}

const remove = async (id) => {
    try {
        const user = await userRepository.remove(id);
        return user || [];
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getAll,
    getById,
    // create,
    update,
    remove,
}