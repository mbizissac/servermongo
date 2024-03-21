
const connection = require('../config/database');

const User = require('../models/user');
const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs',{listUsers : results});

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
    res.redirect('/');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
   let user = await User.findById(userId).exec();

    res.render('edit.ejs',{userEdit: user});
   // res.send('Update page: ' + userId);

}

const postUpdateUser = async(req, res) => {
    // console.log(req.body);
     let email = req.body.email;
     let name = req.body.name;
     let city = req.body.city;
     let userId = req.body.userid;
     console.log(email,'|', name,'|', city ,'|', userId);
     await User.updateOne(
         {_id: userId},
         {email: email, name: name, city: city}
     )
     res.redirect('/');
 }

 const postDeleteUser = async(req, res) => {
    //console.log('delete|', req.params.id);
    const userId = req.params.id;
    let user = await User.findById(userId);
    
    res.render('delete.ejs', {userEdit: user});

 }

 const postHandleDeleteUser = async(req, res) => {
    console.log('delete|', req.params.id);
    const id = req.params.id;
    let result = await User.deleteOne({ _id: id});
    console.log('<<<<result =', result);
    res.redirect('/');
 }
const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

module.exports = {
    getHomepage,
    getABC,
    getHehe,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleDeleteUser
}