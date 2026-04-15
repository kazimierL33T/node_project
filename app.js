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
const rateLimit = require("express-rate-limit");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const cache = require('apicache').middleware;

//importing of userRoutes route handler
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, //15 minutes
	max: 12,
	message: 'Too many requests from this IP, please try again after 15 minutes.',
});


async function throttling(req, res, next){
	try{
		setTimeout(() => {
			next();
		}, 1000);
	}catch(error){
		console.log(error);
	}
}

//view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware and route handler
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(throttling);
app.use(limiter);

app.use(cache('5 minutes'));
app.use(userRoutes);
app.use(authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


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