import jwt from 'jsonwebtoken';

const value = {
  name: "deepak",
  accountNumber: 123456789
}

const token = jwt.sign(value, "secret");
console.log(token)
