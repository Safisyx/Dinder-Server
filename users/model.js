const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
  },
  preferredbreed: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
}, {
  tableName: 'users',
	timestamps: false
})

module.exports = User
