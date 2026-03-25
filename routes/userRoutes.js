const express = require('express');
const router = express.Router();



//route handler
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

module.exports = router;