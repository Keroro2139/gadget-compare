const Category = require("../models/category.model");

// Create and Save a new Category
exports.create = (req, res) => {

};

// Retrieve all Categories from the database.
exports.findAll = (req, res) => {
    Category.getAll((err, data) => {
        if (err)
            res.status(400).send({
                message: err.message || "Some error occurred while retrieving categories."
            });
        else res.send(data);
    });
};