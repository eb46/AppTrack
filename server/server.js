const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = mongoose.connection

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000


// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// Database connection, uses the MongoDB URI from the .env file
const MONGODB_URI = process.env.MONGODB_URI


// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
);


// Error / success for MongoDB connection
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));


// Controllers
const applications = require('./controllers/applications_controller')
app.use('/applications', applications)


app.listen(PORT, () => {
  console.log('listening on port: ' + PORT);
})
