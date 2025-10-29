const personService = require("../services/person.service");

const getAllPersons = async (req, res) => {
    try {
        const persons = await personService.getAll();
        res.status(201).json(persons);
    }catch (error) {
        res.status(401).json({error: error.message});
    }
};

const getPersonById = async (req, res) => {
    const id = req.params.id;
    try {
        const person = await personService.getById(id);
        res.status(201).json(person);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
};

const createPerson = async (req, res) => {
    const {name, email, age} = req.body;
    const data = {name, email, age};
    try {
        const person = await personService.create(data);
        res.status(201).json(person);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
};

const updatePerson = async (req, res) => {
    try {
        const updatedPerson = await personService.update(req.params.id, req.body);
        res.status(201).json(updatedPerson);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
};

const deletePerson = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await personService.remove(id);
        res.status(204).send(deleted);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
};

module.exports = {
    getAllPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson,
};