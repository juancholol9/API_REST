const userReposotory = require("../repository/users.repository");

const getAll = async () => {
    try {
        const users = await userReposotory.getAll();
        return users || [];
    } catch (error) {
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const user = await userReposotory.getById(id);
        return user || null;
    } catch (error) {
        throw new Error(error);
    }
}

const create = async (data) => {
    try {
        const user = await userReposotory.create(data);
        return user || [];
    } catch (error) {
        console.log("User Service")
        throw new Error(error);
    }
}

const update = async (id, data) => {
    try {
        const user = await userReposotory.update(id, data);
        return user || [];
    } catch (error) {
        throw new Error(error);
    }
}

const remove = async (id) => {
    try {
        const user = await userReposotory.remove(id);
        return user || [];
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
}