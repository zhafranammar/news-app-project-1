'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    static associate(models) {
      New.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  New.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    publicationDate: DataTypes.DATE,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'New',
  });
  return New;
};