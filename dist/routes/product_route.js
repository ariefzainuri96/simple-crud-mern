"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product_controller");
const validate_token_1 = require("../middleware/validate_token");
const router = express_1.default.Router();
// validate token for all request in this routes
router.use(validate_token_1.validateToken);
// add product
router.post('/', product_controller_1.addProduct);
// get all products
router.get('/', product_controller_1.getProducts);
// get product by id
router.get('/:id', product_controller_1.getProductById);
// update product by id
router.put('/:id', product_controller_1.updateProductById);
// delete product by id
router.delete('/:id', product_controller_1.deleteProductById);
exports.default = router;
