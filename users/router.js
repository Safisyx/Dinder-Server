const User = require('./model')
const Router = require('express').Router
const bcrypt = require('bcrypt')

const sign = require('../jwt').sign

const router = new Router()

router.get('/secret', (req, res) => {
	if (req.user) {
		res.send({
			message: `Welcome, you should be the user with email ${req.user.email}`
		})
	}
	else {
		res.status(401).send({
			message: 'Please login!'
		})
	}
})

router.post('/users', (req, res) => {
  const user = {
  	email: req.body.email,
  	password: bcrypt.hashSync(req.body.password, 10),
		name: req.body.name,
		description: req.body.description,
		preferredbreed: req.body.preferredbreed
  }

  User.create(user)
    .then(entity => {
      res.status(201)
      res.json({
        id: entity.id,
				name: entity.name,
        email: entity.email
      })
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({
        message: 'Something went wrong'
      })
    })

  })

router.post('/logins', (req, res) => {
    const user = {
    	email: req.body.email,
    	password: req.body.password
    }

		User.findOne({
    	where: {
    		email: req.body.email
    	}
    })
    .then(entity => {
    	if (bcrypt.compareSync(req.body.password, entity.password)) {
    		 res.send({
    				jwt: sign(entity.id)
    			})
    		}
     else {
    		res.status(400).send({
    			message: 'Password was incorrect'
    			})
    		}
    	})

  .catch(err => {
    		console.error(err)
    		res.status(500).send({
    			message: 'Something went wrong'
    		})
    	})
})

router.get('/users', (req, res) => {
  User.findAll({
    attributes: ['email', 'name', 'preferredbreed']
  })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500)
      res.json({message: 'Something went wrong'})
    })
})

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(result => {
      if (result) {
        res.json(result)
      } else {
        res.status(404)
        res.json({ message: 'Not Found' })
      }
    })
    .catch(err => {
      res.status(500)
      res.json({ message: 'There was an error' })
    })
})

router.delete('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(entity => {
      return entity.destroy()
    })
    .then(_ => {
      res.send({
        message: 'The user was deleted succesfully'
      })
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
})


module.exports = router
