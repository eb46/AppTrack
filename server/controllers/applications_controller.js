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


module.exports = apps
