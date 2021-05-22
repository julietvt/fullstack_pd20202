'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Superhero.init({
    nickname: DataTypes.STRING,
    realName: DataTypes.STRING,
    originDescription: DataTypes.STRING,
    superpowers: DataTypes.ARRAY,
    catchPhrase: DataTypes.STRING,
    images: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Superhero',
  });
  return Superhero;
};