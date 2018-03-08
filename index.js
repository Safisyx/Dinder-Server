const express = require('express')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')
const verify = require('./jwt').verify
const User = require('./users/model')

const app = express()
const breedsRouter = require('./breeds/router')
const usersRouter = require('./users/router')


app.use(bodyParser.json())
// var Sequelize = new Sequelize('postgres://localhost:5432/postgres')

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

app.use(function (req, res, next) {
  if (!req.headers.authorization) return next()

  const auth = req.headers.authorization.split(' ')
  if (auth[0] === 'Bearer') {
    verify(auth[1], function (err, jwt) {
      if (err) {
        console.error(err)
        res.status(400).send({
          message: "JWT token invalid"
        })
      }
      else {
        User
          .findById(jwt.id)
          .then(entity => {
            req.user = entity
            next()
          })
          .catch(err => {
            console.error(err)
            res.status(500).send({
              message: 'Something went horribly wrong'
            })
          })
      }
    })
  }
  else next()
})

app.use(breedsRouter)
app.use(usersRouter)
