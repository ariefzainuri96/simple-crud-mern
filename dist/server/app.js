"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_route_1 = __importDefault(require("../routes/product_route"));
const user_route_1 = __importDefault(require("../routes/user_route"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(loggerMiddleware)
app.use('/api/products', product_route_1.default);
app.use('/api/users', user_route_1.default);
// greetings
app.get('/', (_, res) => {
    res.send('Hello world');
});
function loggerMiddleware(req, res, next) {
    var _a;
    console.log(`🚀 [API] ${(_a = req.method) === null || _a === void 0 ? void 0 : _a.toUpperCase()} ${req.originalUrl}\n\nResponse ${res.statusCode} => ${res.json}`);
    next();
}
;
mongoose_1.default.connect(`${process.env.MONGODB_CONNECTION_STRING}`).then(() => {
    console.log('connected to mongodb');
    app.listen(3000, () => {
        console.log('server is running on 3000');
    });
}).catch(() => {
    console.log('connection failed');
});
