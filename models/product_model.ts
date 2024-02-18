import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', ProductSchema)

export default Product