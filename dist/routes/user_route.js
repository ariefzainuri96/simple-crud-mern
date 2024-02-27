"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user_controller");
const validate_token_1 = require("../middleware/validate_token");
const router = express_1.default.Router();
// add product
router.post('/register', user_controller_1.register);
router.post('/login', user_controller_1.login);
// validate token to this request
router.get('/current', validate_token_1.validateToken, user_controller_1.current);
exports.default = router;
