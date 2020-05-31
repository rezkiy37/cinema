const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('../schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 3005

mongoose.connect('mongodb+srv://rezkiy37:z878870@cinema-yo2f6.mongodb.net/cinema', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(err))
dbConnection.once('open', () => console.log('DB was connected!'))

app.listen(PORT, err => {
    err ? console.error(err) : console.log('Server is listening')
})
