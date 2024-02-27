"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const value = {
    name: "deepak",
    accountNumber: 123456789
};
const token = jsonwebtoken_1.default.sign(value, "secret");
console.log(token);
