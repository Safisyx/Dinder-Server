const Router = require('express').Router
const Breed = require('./model')

const router = new Router()

router.get('/breeds', (req, res) => {
  Breed.findAll({
    attributes: ['id', 'type', 'numberoflikes']
  })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500)
      res.json({message: 'Something went wrong'})
    })
})

router.get('/breeds/:id', (req, res) => {
  Breed.findById(req.params.id)
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

router.post('/breeds', (req, res) => {
  const breed = req.body

  Breed.findOrCreate({
      where: {
        type: breed.type
      }
    })
    .spread(function(userResult, created){
    // this userId was either created or found depending upon whether the argment 'created' is true or false
    // do something with this user now
      if (created){
      // some logic
        res.status(201)
        res.json(userResult)
      }
      else {
      // some other logic
        //res.json({message:'already here'})
        Breed.findById(userResult.id)
          .then(entity => {
            //console.log(entity);
      			return entity.update({numberoflikes: userResult.numberoflikes+1})
      		})
          .then(final => {
            res.send(final)
          })
          .catch(error => {
            res.status(500).send({
              message: `Something went wrong`,
              error
            })
          })
      }
    }) //
  // Breed.create(breed)
  //   .then(entity => {
  //     res.status(201)
  //     res.json(entity)
  //   })
    .catch(err => {
      res.status(422)
      res.json({ message: err.message })
    })
})

// router.patch('/breeds/:id', (req, res) => {
//   const breeds = breed
//     .findById(req.params.id)
//     .then((breed) => {
//       if (breed) {
//         breed.score = req.body.score
//         breed
//           .save()
//           .then((updatedbreed) => {
//             res.json(updatedbreed)
//           })
//           .catch((err) => {
//             res.status(422)
//             res.json({ message: err.message })
//           })
//       } else {
//         res.status(404)
//         res.json({ message: 'breed not found!' })
//       }
//     })
//     .catch((err) => {
//       console.error(err)
//       res.status(500)
//       res.json({ message: 'Oops! There was an error getting the breed. Please try again' })
//     })
// })

module.exports = router //ES6 -style module export
