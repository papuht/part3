const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Person = require('./person')
app.use(express.static('build'))

app.use(cors())
app.use(bodyParser.json())

	let persons = [
	{
    name: "Arto Hellas",
	number: "34324242",
	id: 1
  },
  {
    name: "Seppo",
	number:"34234234234",
	id: 2
  },
  {
    name:"Teppo",
	number:"204903492034",
	id: 3
  }]


app.get('/api/persons/', (request, response) => {
  Person
  .find({})
  .then(persons => {
      response.json(persons.map(formatPerson))
    })
  
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const formatPerson = (person) => {
  return {
    name: person.name,
    number: person.number,
    id: person._id
  }
}



const testpersons = persons.map(person => person.name)
console.log(testpersons)




app.post('/api/persons', (request, response) => {
  
  const body = request.body
  
  
  
  
  if (body.name === undefined) {
    return response.status(400).json({error: 'name missing'})
  }
  
  if (body.number === undefined) {
    return response.status(400).json({error: 'number missing'})
  }
  
  if (testpersons.includes(body.name)) {
    return response.status(400).json({error: 'name is not unique'})
  }
  
  
  
  const person = new Person ({
	  name: body.name,
	  number: body.number,
	  id: getRandomInt(99999) 
  })
  
  person
    .save()
    .then(savedPerson => {
      response.json(formatPerson(savedPerson))
    })
  /*
  persons = persons.concat(person)
  response.json(person)
  */
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


