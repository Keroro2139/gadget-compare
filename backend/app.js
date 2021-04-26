const express = require('express');
const cors = require('cors');

// const categoryRoutes = require('./routes/category.routes');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
require("./routes/category.routes")(app);
// app.use('/v1/categories', categoryRoutes);

module.exports = app;
