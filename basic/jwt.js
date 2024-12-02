const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtpassword = "123456789";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {});

// const value = {
//   name: "ankrt",
//   pasword: "q21",
// };
// let gvalue="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW5rcnQiLCJwYXN3b3JkIjoicTIxIiwiaWF0IjoxNzMzMTQ2NTU0fQ.lN58xPm8LxTH-wUPNr8F4H74AgWMttHbgAl7wEZ_yns";
// const token = jwt.sign(value, "123");
// console.log(token);
// const Gtoken = jwt.verify(gvalue, "123");
// console.log(Gtoken);

const emaischema = zod.string().email();
const passschema = zod.string().min(5);

const jwtsign = (username, password) => {
  const ussernameResponse = emaischema.safeParse(username);
  const passwordResponse = passschema.safeParse(password);

  if (!ussernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign({ username }, jwtpassword);

  return signature;
};

const jwtDecode = (token) => {
  const decode = jwt.decode(token);
  if (decode) {
    return true;
  } else {
    return false;
  }
};

const jwtverify = () => {
  const verify = jwt.verify(token, jwtpassword);

  if (verify) {
    return true;
  } else {
    return false;
  }
};

const token = jwtsign("ankit@mail.com", "xcxant");
console.log(token);

const verified = jwtverify(token);
console.log(verified);

const dc = jwtDecode(token);
console.log(dc);
