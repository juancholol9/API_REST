const Users = require("../models/users.model");

const getAll = async () => {
    try {
        const users = await Users.findAll();
        return users;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const getById = async (id) => {
    try {
        const users = await Users.findByPk(id);
        return users;
    } catch (error) {
        throw error;
    }
}

const create = async (data) => {
    try {
        console.log(data);
        const user = await Users.create(data);
        return user;
    } catch (error) {

        // Handle Sequelize unique constraint errors
        if (error.name === 'SequelizeUniqueConstraintError') {
            const field = error.errors[0]?.path || 'field';
            const value = error.errors[0]?.value || 'value';
            throw new Error(`The ${field} '${value}' is already in use`);
        }

        // Handle Sequelize validation errors
        if (error.name === 'SequelizeValidationError') {
            const messages = error.errors.map(e => e.message).join(', ');
            throw new Error(`Validation error: ${messages}`);
        }

        throw error;
    }
}

const update = async (id, data) => {
    try {
        const user = await Users.findByPk(id);

        if (!user) throw new Error("Persona no encontrada");
        return await user.update(data);
    } catch (error) {
        // Handle Sequelize unique constraint errors
        if (error.name === 'SequelizeUniqueConstraintError') {
            const field = error.errors[0]?.path || 'field';
            const value = error.errors[0]?.value || 'value';
            throw new Error(`The ${field} '${value}' is already in use`);
        }

        // Handle Sequelize validation errors
        if (error.name === 'SequelizeValidationError') {
            const messages = error.errors.map(e => e.message).join(', ');
            throw new Error(`Validation error: ${messages}`);
        }

        throw error;
    }
};

const remove = async (id) => {
    try {
        const user = await Users.findByPk(id);
        if (!user) throw new Error("Persona no encontrada");
        await user.destroy();
        return true;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};