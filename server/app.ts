import express from 'express'
import { Response } from 'express'
import mongoose from 'mongoose'
import productRoutes from '../routes/product_route'

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)

// greetings
app.get('/', (_, res: Response) => {
    res.send('Hello world')
})

mongoose.connect('mongodb+srv://flaminglassoo1996:Rohanwebid96dong@backenddb.nvidkii.mongodb.net/Node-API?retryWrites=true&w=majority').then(() => {
    console.log('connected to mongodb')

    app.listen(3000, () => {
        console.log('server is running on 3000')
    })
}).catch(() => {
    console.log('connection failed')
})