'use strict';
module.exports = (sequelize, DataTypes) => {
  var breed = sequelize.define('breed', {
    type: DataTypes.STRING,
    numberoflike: DataTypes.INTEGER
  }, {});
  breed.associate = function(models) {
    // associations can be defined here
  };
  return breed;
};