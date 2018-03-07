'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    preferredbreed: DataTypes.ARRAY
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};