//immporting of required modules
const express = require('express');
const app = express();

const ejs = require('ejs');
const fs = require('fs').promises;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.MONGO_URI;
const port = process.env.PORT || 8000;

//importing of userRoutes route handler
const userRoutes = require('./routes/userRoutes');


//view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware and route handler
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

//json response route handler
app.get('/json-response', (req, res) =>{
		
		const data = {
		  name: "Jane Doe",
		}

		res.json(data);

		})

//connecting to MONGODB,,, then is a promise here
mongoose.connect(uri).then(async () => {

    console.log('connected to MongoDB');
    //server setup
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
})


.catch((err) => {
    console.error('error connecting to MongoDB: ${err}');
});