const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

const { getHomepage, getABC, getHehe, getCreatePage, postCreateUser, postUpdateUser,getUpdatePage, postDeleteUser, postHandleDeleteUser } = homeController;

router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/hehe', getHehe);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);

router.post('/create-user',postCreateUser);

router.post('/update-user',postUpdateUser);

router.post('/delete-user/:id',postDeleteUser);

router.post('/handle-delete-user/:id',postHandleDeleteUser);

//
module.exports = router;
 
