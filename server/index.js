require('dotenv').config()

const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
const port = SERVER_PORT
const controller = require('./controller')
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.get('/api/products', controller.getProducts)
app.post('/api/products', controller.createProduct)
app.put('/api/products/:id', controller.updateProduct)
app.delete('/api/products/:id', controller.sellProduct)

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('DB is running')
        app.listen(port, ()=> {console.log(`server is listening on port: ${port}`)})
})
