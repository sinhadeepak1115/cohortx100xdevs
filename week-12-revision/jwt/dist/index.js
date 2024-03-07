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
const verifiedValue = jsonwebtoken_1.default.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcGFrIiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5LCJpYXQiOjE3MDkwNzU4NDd9.be_lP6_SmR8KPd_mBRrSqDSYmBfVE0K1L4pDjtnrJJc", "secret");
console.log(verifiedValue);
