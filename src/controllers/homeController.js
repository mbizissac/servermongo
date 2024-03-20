
const connection = require('../config/database');

const User = require('../models/user');
const getHomepage = (req, res) => {
    return res.render('home.ejs');

}

const getABC = (req, res) => {
    res.send('Hello World! qqqqq q   qq qxae ');
}

const getHehe = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async(req, res) => {
   // console.log(req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log(email,'|', name,'|', city);
    await User.create({
        email,
        name,
        city
    })
}
const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getHehe,
    postCreateUser,
    getCreatePage
}