const userService = require("../services/users.service");

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(201).json(users);
    }catch (error) {
        res.status(401).json({error: error.message});
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userService.getById(id);
        res.status(201).json(user);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
};

const createUser = async (req, res) => {

    const data = req.body;
    try {
        const user = await userService.create(data);
        res.status(201).json(user);
    } catch (error) {
        console.log("User controller")
        res.status(401).json({error: error.message,});
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.update(req.params.id, req.body);
        res.status(201).json(updatedUser);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await userService.remove(id);
        res.status(204).send(deleted);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}