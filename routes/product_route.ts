import express from 'express'
import { getProducts, addProduct, getProductById, updateProductById, deleteProductById } from '../controllers/product_controller'

const router = express.Router()

// add product
router.post('/', addProduct)

// get all products
router.get('/', getProducts)

// get product by id
router.get('/:id', getProductById)

// update product by id
router.put('/:id', updateProductById)

// delete product by id
router.delete('/:id', deleteProductById)

export default router