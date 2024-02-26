import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import productRoutes from '../routes/product_route'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(loggerMiddleware)

app.use('/api/products', productRoutes)

// greetings
app.get('/', (_, res: Response) => {
    res.send('Hello world')
})

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log(`🚀 [API] ${req.method?.toUpperCase()} ${req.originalUrl}\n\nResponse ${res.statusCode} => ${res.json}`);
    next();
};

mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}`).then(() => {
    console.log('connected to mongodb')

    app.listen(3000, () => {
        console.log('server is running on 3000')
    })
}).catch(() => {
    console.log('connection failed')
})