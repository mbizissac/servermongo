const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    // xu ly data
 res.send('Hello World! xai  nodemon ne')
})

router.get('/hehe', (req, res) => {
    res.send('Hello World! qqqqq q   qq qxae ')
})
router.get('/abc', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;
