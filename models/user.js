'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    description: DataTypes.TEXT,
    preferredbreed: DataTypes.ARRAY(DataTypes.STRING)
    }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
