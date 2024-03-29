"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    user_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: [true, 'Please add user_id'],
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please enter product name!']
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});
const Product = mongoose_1.default.model('Product', ProductSchema);
exports.default = Product;
