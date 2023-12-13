import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import productRoutes from './routes/products.js'
import bodyParser from 'body-parser';

const app = express()
dotenv.config()

app.use(cors())

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/products', productRoutes)


const CONNECTION_URL = "mongodb+srv://rajan:glamhour123@glamhour.h3dan6r.mongodb.net/"
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Server running')
})



mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));