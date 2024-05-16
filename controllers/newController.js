const { User, New } = require('../models');
const slugify = require('slugify');


const newController = {
  getAllNews: async (req, res) => {
    const news = await New.findAll();
    res.render('news/index', { news });
  },

  getNewById: async (req, res) => {
    const news = await New.findByPk(req.params.id);
    const author = await User.findByPk(news.userId)
    res.render('news/show', { news, author });
  },

  createNewForm: async (req, res) => {
    const authors = await User.findAll()
    res.render('news/create', { authors });
  },

  createNew: async (req, res) => {
    try {
      const { title, userId, content } = req.body;
      if (!title || !userId || !content) {
        return res.redirect('/error?message=Title, userId, and content are required');
      }

      const news = new New();
      news.title = title;
      news.userId = userId;
      news.content = content;
      news.slug = slugify(title, { lower: true, strict: true });
      news.publicationDate = new Date()

      await news.save(); // Use save method to persist the document

      res.redirect('/news');
    } catch (err) {
      res.redirect('/error?message=' + encodeURIComponent(err.message));
    }
  },

  updateNewForm: async (req, res) => {
    const news = await New.findByPk(req.params.id);
    const authors = await User.findAll()
    res.render('news/edit', { news, authors });
  },

  updateNew: async (req, res) => {
    try {
      const { id } = req.params;
      await New.update(req.body, { where: { id } });
      res.redirect('/news');
    } catch (err) {
      res.redirect('/error?message=' + encodeURIComponent(err.message));
    }

  },

  deleteNew: async (req, res) => {
    const { id } = req.params;
    await New.destroy({ where: { id } });
    res.redirect('/news');
  },

};

module.exports = newController;
