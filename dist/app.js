"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const app = (0, express_1.default)();
(0, db_1.connectDB)();
app.use(express_1.default.json());
app.use('/api/v1/auth', auth_route_1.default);
app.listen(5000, () => {
    console.log('server is running port 5000');
});
