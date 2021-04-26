const sql = require("./db.js");

// constructor
const Category = function (category) {
    this.id = category.id;
    this.name = category.name;
    this.created_time = category.created_time;
};

Category.create = (newCategory, result) => {
    sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created category: ", { id: res.insertId, ...newCategory });
        result(null, { id: res.insertId, ...newCategory });
    });
};

Category.getAll = result => {
    sql.query("SELECT * FROM categories", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("categories: ", res);
        result(null, res);
    });
};

module.exports = Category;
