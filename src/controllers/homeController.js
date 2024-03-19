
const getHomepage = (req, res) => {
    res.send('Hello World! xai  nodemon ne');

}

const getABC = (req, res) => {
    res.send('Hello World! qqqqq q   qq qxae ');
}

const getHehe = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getHehe
}