"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const product_route_1 = __importDefault(require("../routes/product_route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/products', product_route_1.default);
// greetings
app.get('/', (_, res) => {
    res.send('Hello world');
});
mongoose_1.default.connect('mongodb+srv://flaminglassoo1996:Rohanwebid96dong@backenddb.nvidkii.mongodb.net/Node-API?retryWrites=true&w=majority').then(() => {
    console.log('connected to mongodb');
    app.listen(3000, () => {
        console.log('server is running on 3000');
    });
}).catch(() => {
    console.log('connection failed');
});
