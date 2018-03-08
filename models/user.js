'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    preferredbreed: DataTypes.ARRAY(Sequelize.INTEGER)
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
