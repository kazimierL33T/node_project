const express = require('express');
const router = express.Router();

//home page
router.get('/home', (req, res) => {
    res.render('home');
})


    //example of a middleware functioon
    router.use((req, res, next) => {
        console.log(`Request URL: ${req.url}. Time: ${new Date()}`);
    next();
});

//route handler //route parameters
router.get('/', (req, res) => {
    res.send('Hello World! <3');
});

router.get('/about', (req, res) => {
    res.send('This is the about page! :))');
});

router.get('/scary', (req, res) =>{
    res.send('This is the scary page! :O');
})

router.get('/ghosts/:id', (req, res) => {
    const { id } = req.params;
    res.send(`This is the ghost page for ghost ${req.params.id}! :O`);
});

//query parameters
router.get('/search', (req, res) => {
    res.send(`search query: ${req.query.q}`);
}); 



module.exports = router;