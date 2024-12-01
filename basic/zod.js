const { response } = require("express");
const zod = require("zod");

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(5),
});

const validate = (obj) => {
  const respons = schema.safeParse(obj);
  console.log(respons);
};

validate({
  email: "ankit@gmail.com",
  password: "142s1",
});
