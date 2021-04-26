require('dotenv').config();
const app = require('./app');

// set port, listen for requests
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}.`);
});
