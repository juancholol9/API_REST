const PersonaReposotory = require("../repository/person.repository");

const getAll = async () => {
    try {
        const personas = await PersonaReposotory.getAll();
        return personas || [];
    } catch (error) {
        throw new Error(error);
    }
}

const getById = async (id) => {
    try {
        const persona = await PersonaReposotory.getById(id);
        return persona || null;
    } catch (error) {
        throw new Error(error);
    }
}

const create = async (data) => {
    try {
        const persona = await PersonaReposotory.create(data);
        return persona || [];
    } catch (error) {
        throw new Error(error);
    }
}

const update = async (id, data) => {
    try {
        const persona = await PersonaReposotory.update(id, data);
        return persona || [];
    } catch (error) {
        throw new Error(error);
    }
}

const remove = async (id) => {
    try {
        const persona = await PersonaReposotory.remove(id);
        return persona || [];
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