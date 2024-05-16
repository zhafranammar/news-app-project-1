const express = require('express');
const userController = require('../controllers/userController');
const newController = require('../controllers/newController');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

//route user 
router.get('/users', userController.getAllUsers);
router.get('/users/create', userController.createUserForm);
router.get('/users/:id', userController.getUserById);
router.get('/users/:id/edit', userController.updateUserForm);
router.post('/users', userController.createUser);
router.post('/users/:id/update', userController.updateUser);
router.post('/users/:id/delete', userController.deleteUser);

//route new 
router.get('/news', newController.getAllNews);
router.get('/news/create', newController.createNewForm);
router.get('/news/:id', newController.getNewById);
router.get('/news/:id/edit', newController.updateNewForm);
router.post('/news', newController.createNew);
router.post('/news/:id/update', newController.updateNew);
router.post('/news/:id/delete', newController.deleteNew);

//Route Error
router.get('/error', (req, res) => {
  console.log(req.query.message)
  res.render('error', { message: req.query.message });
});

module.exports = router;
