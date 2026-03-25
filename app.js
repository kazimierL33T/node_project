const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//importing of userRoutes route handler
const userRoutes = require('./routes/userRoutes');

//route handler
app.use(userRoutes);


//server setup
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});