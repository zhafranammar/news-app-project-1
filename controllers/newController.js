const { New } = require('../models');


const newController = {
  getAllNews: async (req, res) => {
    const news = await New.findAll();
    res.render('news/index', { news });
  },

  getNewById: async (req, res) => {
    const news = await New.findByPk(req.params.id);
    res.render('news/show', { news });
  },

  createNewForm: async (req, res) => {
    res.render('news/create');
  },

  createNew: async (req, res) => {
    await New.create(req.body);
    res.redirect('/news');
  },

  updateNewForm: async (req, res) => {
    const news = await New.findByPk(req.params.id);
    res.render('news/edit', { news });
  },

  updateNew: async (req, res) => {
    const { id } = req.params;
    await New.update(req.body, { where: { id } });
    res.redirect('/news');
  },

  deleteNew: async (req, res) => {
    const { id } = req.params;
    await New.destroy({ where: { id } });
    res.redirect('/news');
  },

};

module.exports = newController;
