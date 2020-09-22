const express = require('express')
const apps = express.Router()
const Application = require('../models/application')

//////////////////////////
////// Read Route ////////
//////////////////////////

apps.get('/', (req, res) => {
  Application.find()
    .then(allApps => res.json(allApps))
    .catch(err => res.json('Error: ' + err))
})

////////////////////////////
////// Create Route ////////
////////////////////////////

apps.post('/add', (req, res) => {
  Application.create(req.body, (err, newApp) => {
    if (err) {
      res.send(err)
    } else {
      Application.find({}, (err, allApps) => {
        res.json(allApps)
      })
    }
  })
})

////////////////////////////
////// Update Route ////////
////////////////////////////
apps.put('/:id', (req, res) => {
  Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true},
    (err, updatedApp) => {
      res.json(updatedApp)
    }
  )
})

////////////////////////////
////// Delete Route ////////
////////////////////////////
apps.delete('/:id', (req, res) => {
  Application.findByIdAndRemove(
    req.params.id,
    (err, deletedApp) => {
      Application.find({}, (err, allApps) => {
        res.json(allApps)
      })
    }
  )
})


module.exports = apps
