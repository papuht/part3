const mongoose = require('mongoose')

const url = 'mongodb+srv://papuht:tietoBasePass23@cluster0-a5mky.mongodb.net/luettelo'

mongoose.connect(url)

const args = process.argv.splice(2)

const Person = mongoose.model('Person', {
  name: String,
  number: String,
  
})

const formatPerson = (person) => {
  return {
    name: person.name,
    number: person.number,
    id: person._id
  }
}

const person = new Person({
  name: args[0],
  number: args[1],
  
})

if (args[0] === undefined || args[1] === undefined) {
	Person
	.find({})
		.then(persons => {
			console.log(persons.map(formatPerson))
			mongoose.connection.close()
    })
	
	
}

else {


person
  .save()
  .then(response => {
	
    console.log('adding person  ' + person.name + '  number  ' + person.number + '  to the directory')
	
	
    mongoose.connection.close()
  })
}