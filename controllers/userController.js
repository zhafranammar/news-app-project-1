const { User } = require('../models');


const userController = {
  getAllUsers: async (req, res) => {
    const users = await User.findAll();
    res.render('users/index', { users });
  },

  getUserById: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.render('users/show', { user });
  },

  createUserForm: async (req, res) => {
    res.render('users/create');
  },

  createUser: async (req, res) => {

    try {
      await User.create(req.body);
      res.redirect('/users');
    } catch (err) {
      res.redirect('/error?message=' + encodeURIComponent(err.message));
    }

  },

  updateUserForm: async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.render('users/edit', { user });
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      await User.update(req.body, { where: { id } });
      res.redirect('/users');
    } catch (err) {
      res.redirect('/error?message=' + encodeURIComponent(err.message));
    }
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.redirect('/users');
  },

};

module.exports = userController;
