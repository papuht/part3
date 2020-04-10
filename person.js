const mongoose = require('mongoose')

const url = 'mongodb+srv://papuht:tietoBasePass23@cluster0-a5mky.mongodb.net/luettelo'

mongoose.connect(url)


const Person = mongoose.model('Person', {
  name: String,
  number: String,
  
})


module.exports = Person