import jwt from 'jsonwebtoken';

const value = {
  name: "deepak",
  accountNumber: 123456789
}

const token = jwt.sign(value, "secret");
console.log(token)

const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGVlcGFrIiwiYWNjb3VudE51bWJlciI6MTIzNDU2Nzg5LCJpYXQiOjE3MDkwNzU4NDd9.be_lP6_SmR8KPd_mBRrSqDSYmBfVE0K1L4pDjtnrJJc", "secret");
console.log(verifiedValue);
