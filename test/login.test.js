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
const request = require('supertest');
const app_1 = __importDefault(require("../app"));
describe('Test for the /login with the credentials', () => {
    it('Sends the wrong credentials, and should return error with message', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.default)
            .post('/login')
            .send({ "email": "email", "password": "password" });
        expect(response.statusCode).toEqual(401);
        expect(response.body).toEqual({
            "error": true,
            "message": "Invalid credentials"
        });
    }));
    it('Sends the correct credentials, should return a Token', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(app_1.default)
            .post('/login')
            .send({ "email": "test@test.com", "password": "test" });
        expect(response.statusCode).toEqual(200);
        expect(response.body).toHaveProperty('token');
    }));
});
