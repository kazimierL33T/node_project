const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const ejs = require('ejs');

//importing of userRoutes route handler
const userRoutes = require('./routes/userRoutes');


//view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware and route handlers
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

//server setup
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});