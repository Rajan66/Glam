const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const productRoutes = require('./routes/products.js')
const userRoutes = require('./routes/user.js')
const bodyParser = require('body-parser')

const app = express()
dotenv.config()

app.use(cors())

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/products', productRoutes)
app.use('/user', userRoutes)


const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Server running')
})


mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));