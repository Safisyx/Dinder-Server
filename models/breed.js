'use strict';
module.exports = (sequelize, DataTypes) => {
  var Breed = sequelize.define('Breed', {
    type: DataTypes.STRING,
    numberoflikes: DataTypes.INTEGER
  }, {});
  Breed.associate = function(models) {
    // associations can be defined here
  };
  return Breed;
};