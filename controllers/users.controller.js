const userService = require("../services/users.service");

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAll();
        res.status(200).json(users); // Changed from 201 to 200
    } catch (error) {
        res.status(500).json({error: error.message}); // Changed from 401 to 500
    }
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userService.getById(id);
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

const createUser = async (req, res) => {
    const data = req.body;
    try {
        const user = await userService.create(data);
        res.status(201).json(user);
    } catch (error) {
        console.log("Error en el archivo User controller", error);
        res.status(400).json({error: error.message}); // Changed from 401 to 400
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await userService.update(req.params.id, req.body);
        res.status(200).json(updatedUser); // Changed from 201 to 200
    } catch (error) {
        res.status(400).json({error: error.message}); // Changed from 401 to 400
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await userService.remove(id);
        res.status(204).send(); // Removed deleted parameter
    } catch (error) {
        res.status(400).json({error: error.message}); // Changed from 401 to 400
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}