import { Request, Response } from "express"
import Product from "../models/product_model"
import { IStandart } from "../interfaces/i_standart"
import { handleError } from "../utils/helper"

export const addProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json({
            status: 200,
            message: 'Successfully add product',
            data: product
        } as IStandart)
    } catch (error) {
        sendError(res, 500, handleError(error))
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({})
        res.status(200).json({
            status: 200,
            message: 'Successfully fetch products',
            data: products
        } as IStandart)
    } catch (error) {
        sendError(res, 500, handleError(error))
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
        sendError(res, 500, handleError(error))
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
        sendError(res, 500, handleError(error))
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
        sendError(res, 500, handleError(error))
    }
}

function sendError(res: Response, status: number, err: string) {
    res.status(status).json({
        status: status,
        message: handleError(err)
    } as IStandart)
}