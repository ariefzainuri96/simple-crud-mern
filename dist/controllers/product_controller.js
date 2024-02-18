"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProductById = exports.getProductById = exports.getProducts = exports.addProduct = void 0;
const product_model_1 = __importDefault(require("../models/product_model"));
const helper_1 = require("../utils/helper");
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.default.create(req.body);
        res.status(200).json({
            status: 200,
            message: 'Successfully add product',
            data: product
        });
    }
    catch (error) {
        sendError(res, 500, (0, helper_1.handleError)(error));
    }
});
exports.addProduct = addProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.default.find({});
        res.status(200).json({
            status: 200,
            message: 'Successfully fetch products',
            data: products
        });
    }
    catch (error) {
        sendError(res, 500, (0, helper_1.handleError)(error));
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_model_1.default.findById(id);
        if (!product) {
            return sendError(res, 404, 'Product not found');
        }
        res.status(200).json({
            status: 200,
            message: 'Successfully fetch Products',
            data: product
        });
    }
    catch (error) {
        sendError(res, 500, (0, helper_1.handleError)(error));
    }
});
exports.getProductById = getProductById;
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_model_1.default.findByIdAndUpdate(id, req.body);
        if (!product) {
            return sendError(res, 404, 'Product not found!');
        }
        const updatedProduct = yield product_model_1.default.findById(id);
        res.status(200).json({
            status: 200,
            message: 'Successfully update Product',
            data: updatedProduct
        });
    }
    catch (error) {
        sendError(res, 500, (0, helper_1.handleError)(error));
    }
});
exports.updateProductById = updateProductById;
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_model_1.default.findByIdAndDelete(id);
        if (!product) {
            return sendError(res, 404, 'Product not found');
        }
        res.status(200).json({
            status: 200,
            message: 'Successfully delete Product',
            data: product
        });
    }
    catch (error) {
        sendError(res, 500, (0, helper_1.handleError)(error));
    }
});
exports.deleteProductById = deleteProductById;
function sendError(res, status, err) {
    res.status(status).json({
        status: status,
        message: (0, helper_1.handleError)(err)
    });
}
