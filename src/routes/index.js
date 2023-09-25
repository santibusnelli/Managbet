const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        style: 'main.css',
        navbar: 'navbar.css'
    })
})

module.exports = router;