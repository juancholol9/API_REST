const Users = require("../models/users.model");

const getAll = async () => {
    try {
        const users  = await Users.findAll();
        return users
    } catch (error) {
        throw error
    }
}

const getById = async (id) => {
    try {
        const users  = await Users.findByPk(id);
        return users
    } catch (error) {
        throw error
    }
}

const create = async (data) => {
    try {
        console.log(data)
        const user = await Users.create(data);
        return user
    } catch (error) {
        console.log("User Repository")
        throw error
    }
}

const update = async (id, data) => {
    try {
        const user = await Users.findByPk(id);

        if (!user) throw new Error("Persona no encontrada");
        return await user.update(data);
    } catch (error) {
        throw error
    }
};

const remove = async (id) => {
    try {
        const user = await Users.findByPk(id);
        if (!user) throw new Error("Persona no encontrada");
        await user.destroy();
        return true;
    } catch (error) {
        throw error
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};