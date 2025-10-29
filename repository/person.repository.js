const Person = require("../models/persona.model");

const getAll = async () => {
    try {
        const personas  = await Person.findAll();
        return personas
    } catch (error) {
        throw error
    }
}

const getById = async (id) => {
    try {
        const personas  = await Person.findByPk(id);
        return personas
    } catch (error) {
        throw error
    }
}

const create = async (data) => {
    try {
        const persona = await Person.create(data);
        return persona
    } catch (error) {
        throw error
    }
}

const update = async (id, data) => {
    try {
        const persona = await Person.findByPk(id);

        if (!persona) throw new Error("Persona no encontrada");
        return await persona.update(data);
    } catch (error) {
        throw error
    }
};

const remove = async (id) => {
    try {
        const persona = await Person.findByPk(id);
        if (!persona) throw new Error("Persona no encontrada");
        await persona.destroy();
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