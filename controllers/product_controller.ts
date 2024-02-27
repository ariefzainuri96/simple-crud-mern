import { Request, Response } from "express"
import Product from "../models/product_model"
import { IStandart } from "../interfaces/i_standart"
import { handleError, handleStatus } from "../utils/helper"
import { sendError } from "../common/common_functions"

export const addProduct = async (req: Request, res: Response) => {
    try {
        const { name, quantity, price } = req.body

        const product = await Product.create({
            user_id: req.user.id,
            name: name,
            quantity: quantity,
            price: price
        })
        res.status(200).json({
            status: 200,
            message: 'Successfully add product',
            data: product
        } as IStandart)
    } catch (error) {
        sendError(res, handleStatus(error), handleError(error))
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({
            user_id: req.user.id
        })
        res.status(200).json({
            status: 200,
            message: 'Successfully fetch products',
            data: products
        } as IStandart)
    } catch (error) {
        sendError(res, handleStatus(error), handleError(error))
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)

        if (!product) {
            return sendError(res, 404, 'Product not found')
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully fetch Products',
            data: product
        } as IStandart)
    } catch (error) {
        sendError(res, handleStatus(error), handleError(error))
    }
}

export const updateProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            return sendError(res, 404, 'Product not found!')
        }

        const updatedProduct = await Product.findById(id)

        res.status(200).json({
            status: 200,
            message: 'Successfully update Product',
            data: updatedProduct
        } as IStandart)
    } catch (error) {
        sendError(res, handleStatus(error), handleError(error))
    }
}

export const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)

        if (!product) {
            return sendError(res, 404, 'Product not found')
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully delete Product',
            data: product
        } as IStandart)
    } catch (error) {
        sendError(res, handleStatus(error), handleError(error))
    }
}