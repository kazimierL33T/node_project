const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

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

//folder structure lab
router.get('/folderStructure', async (req, res) => {
        try {

                //"example.txt" is the file being read by the fs module
                const data = await fs.readFile('example.txt', 'utf-8');
                res.send(data.toString());
        }catch(error){
        console.error('error reading file', error);
        res.status(500).send('internal server error');}
})



module.exports = router;