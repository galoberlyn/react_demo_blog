'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class submissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  submissions.init({
    ps_id: DataTypes.STRING,
    link: DataTypes.STRING,
    text: DataTypes.STRING,
    score: DataTypes.INTEGER,
    upvote_ratio: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'submissions',
  });
  return submissions;
};