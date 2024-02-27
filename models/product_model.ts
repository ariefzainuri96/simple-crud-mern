import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
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
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', ProductSchema)

export default Product