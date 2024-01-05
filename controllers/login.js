"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.loginRouter = express_1.default.Router();
const JWT_SECRET = process.env.JWT_SECRET || '';
exports.loginRouter.use(express_1.default.json());
exports.loginRouter.post('/', (req, res) => {
    const { email, password } = req.body;
    if (email === 'test@test.com' && password === 'test') {
        const token = jsonwebtoken_1.default.sign({ id: 1, email: 'test@test.com' }, JWT_SECRET, { algorithm: 'HS256' });
        return res.json({ token });
    }
    return res.status(401).json({ error: true, message: 'Invalid credentials' });
});
